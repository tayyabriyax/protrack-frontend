import React, { useEffect, useState } from 'react'
import PosTable from '../components/PointOfSale/PosTable'
import PosModal from '../components/PointOfSale/PosModal'
import { useDispatch, useSelector } from 'react-redux'
import { addCartAsync } from '../features/PointOfSaleSlice'
import { getProductAsync } from '../features/ProductSlice'

const PointOfSale = () => {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [productQty, setProductQty] = useState("");
    const cart = {
        product_id: productId,
        product_name: productName,
        product_price: productPrice,
        product_qty: productQty,
        product_total: Number.parseInt(productPrice * productQty)
    };
    const product = useSelector(state => state.Product.Product)
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(getProductAsync())
    }, [])

    const handleChangeQty = (e) => {
        setProductQty(e.target.value)
    }

    const handleChangeId = (e) => {
        setProductId(e.target.value); 
        setProductName(e.target.options[e.target.selectedIndex].text);
        setProductPrice(e.target.options[e.target.selectedIndex].getAttribute('price'));
    }

    const handleAddClick = () => {
        dispatch(addCartAsync(cart));
    }

    return (
        <div className='w-full bg-purple-50 p-4 rounded-md flex flex-col gap-10 text-purple-600'>
            <div className='flex gap-2 justify-between items-center'>
                <div className='flex gap-4 items-center justify-between'>
                    <div
                        className="py-5 px-2 text-center text-base font-medium"
                    >
                        <select value={cart.product_id} onChange={handleChangeId} name='product_id'
                            className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600 border-purple-600 text-gray-400 border'>
                            <option price="" value="">--SELECT--</option>
                            {
                                product.map((product, index) => {
                                    return (
                                        <option price={product.price} value={product.id} key={index}>{product.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <input
                        type="text"
                        name='product_qty'
                        value={cart.product_qty}
                        onChange={handleChangeQty}
                        placeholder='Quantity'
                        className='p-2 border h-fit border-purple-600 w-40 bg-purple-50 rounded-md outline-purple-600' />
                    <input
                        type="text"
                        name='product_price'
                        placeholder='Price'
                        value={cart.product_price}
                        readOnly
                        className='p-2 border h-fit border-purple-600 w-40 bg-purple-50 rounded-md outline-purple-600' />
                </div>
                <div className='flex gap-4 items-center'>
                    <button
                        onClick={handleAddClick}
                        className='hover:bg-purple-300 hover:text-purple-600 p-2 font-bold w-40 rounded-md 
                                border-purple-500 border-2'>
                        Add
                    </button>
                </div>
            </div>
            <PosTable />
            <PosModal total={cart} />
        </div>
    )
}

export default PointOfSale