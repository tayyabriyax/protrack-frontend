import React, { useEffect, useState } from 'react'
import PosTable from '../components/PointOfSale/PosTable'
import PosModal from '../components/PointOfSale/PosModal'

const PointOfSale = () => {
    const [products, setProducts] = useState([])
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(550)
    const [selectedProduct, setselectedProduct] = useState(550)
    const [gridProducts, setGridProducts] = useState([])
    const [selectedProductName, setselectedProductName] = useState([])
    const [subtotal, setSubtotal] = useState(0)

    useEffect(() => {
        getProductList()
    }, [])



    async function getProductList() {
        fetch("http://localhost:3000/api/product")
            .then(response => {
                response.json()
                    .then(resp => { setProducts(resp) })
            });
    }
    const handleAddProductToGrid = () => {
        const obj = {
            'product_id': selectedProduct,
            'product_name': selectedProductName,
            'product_qty': quantity,
            'product_price': price,
            'total': price * quantity
        }
        const updatedGridProducts = [...gridProducts, obj];
        setGridProducts(updatedGridProducts);

        const newSubtotal = updatedGridProducts.reduce((acc, item) => acc + item.total, 0);
        setSubtotal(newSubtotal);
        setQuantity(0)
    }

    function handleProductChange(e) {
        let options = e.target.childNodes
        let pname = "";
        options.forEach(element => {
            if (element.value == e.target.value) {
                pname = element.innerText
            }
        });
        setselectedProduct(e.target.value)
        setselectedProductName(pname)
    }

    return (
        <div className='w-full bg-purple-50 p-4 rounded-md flex flex-col gap-10 text-purple-600'>
            <div className='flex gap-2 justify-between items-center'>
                <div className='flex gap-4 items-center justify-between'>
                    <div
                        className="py-5 px-2 text-center text-base font-medium"
                    >
                        <select value={selectedProduct} onChange={(e) => handleProductChange(e)} name='product_id'
                            className='p-2 w-72 bg-purple-50 rounded-md outline-purple-600 border-purple-600 text-gray-400 border'>
                            <option value="">--SELECT--</option>
                            {
                                products.map((product, index) => {
                                    return (
                                        <option value={product.id} key={index}>{product.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <input
                        type="text"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        placeholder='Quantity'
                        className='p-2 border h-fit border-purple-600 w-40 bg-purple-50 rounded-md outline-purple-600' />
                    <input
                        type="text"
                        placeholder='Price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        readOnly
                        className='p-2 border h-fit border-purple-600 w-40 bg-purple-50 rounded-md outline-purple-600' />
                </div>
                <div className='flex gap-4 items-center'>
                    <button
                        onClick={handleAddProductToGrid}
                        className='hover:bg-purple-300 hover:text-purple-600 p-2 font-bold w-40 rounded-md 
                                border-purple-500 border-2'>
                        Add
                    </button>
                </div>
            </div>
            <PosTable product={gridProducts} />
            <PosModal total={subtotal} />
        </div>
    )
}

export default PointOfSale