import React, { useState, useEffect } from 'react'
import { Trash2Icon, EditIcon } from 'lucide-react'
import StockEditModal from './StockEditModal';
import { useDispatch, useSelector } from 'react-redux';
import { deleteStockAsync, editStockAsync, getStockAsync } from '../../features/StockSlice';

const StockTable = () => {
  const [showModal, setShowModal] = useState(false)
  const [editStock, setEditStock] = useState(null)
  const stocks = useSelector(state => state.Stock.Stock);
  const loadData = useSelector(state => state.Stock.loadData)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStockAsync())
  }, [loadData])

  const handleeditProduct = (stock) => {
    setShowModal(true)
    setEditStock(stock)
  }

  return (
    <section className="py-2 w-full text-purple-600">
      <div className="container mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto rounded-md">
              <table className="w-full table-auto rounded-md bg-purple-100">
                <thead>
                  <tr className="text-center bg-purple-300 rounded-md">
                    <th
                      className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                    >
                      #
                    </th>
                    <th
                      className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                    >
                      Product
                    </th>
                    <th
                      className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                    >
                      Purchase Price
                    </th>
                    <th
                      className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                    >
                      Sale Price
                    </th>
                    <th
                      className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                    >
                      Quantity
                    </th>
                    <th
                      className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                    >
                      Batch No.
                    </th>
                    <th
                      className="w-1/6 min-w-[160px] py-4 px-3 text-lg font-bold lg:py-7 lg:px-4"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    stocks.map((items, index) => {
                      return (
                        <tr className='border-b border-purple-300' key={index}>
                          <td
                            className="border-s py-3 px-2 text-center text-base font-medium"
                          >
                            {index + 1}
                          </td>
                          <td
                            className="py-3 px-2 text-center text-base font-medium"
                          >
                            {items.product?.name}
                          </td>
                          <td
                            className="py-3 px-2 text-center text-base font-medium"
                          >
                            {items.purchase_price}
                          </td>
                          <td
                            className="py-3 px-2 text-center text-base font-medium"
                          >
                            {items.sale_price}
                          </td>
                          <td
                            className="py-3 px-2 text-center text-base font-medium"
                          >
                            {items.quantity}
                          </td>
                          <td
                            className="py-3 px-2 text-center text-base font-medium"
                          >
                            {items.batch_no}
                          </td>
                          <td
                            className="border-r py-3 px-2 text-center text-base font-medium flex justify-center gap-2"
                          >
                            <button
                              onClick={() => dispatch(deleteStockAsync(items.id))}
                              className="inline-block py-2.5 px-4 rounded-md hover:bg-red-300 text-red-600 font-medium"
                            >
                              <Trash2Icon />
                            </button>
                            <button
                              onClick={() => handleeditProduct(items)}
                              className="inline-block py-2.5 px-4 rounded-md hover:bg-purple-300 font-medium"
                            >
                              <EditIcon />
                            </button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showModal && <StockEditModal onClose={() => setShowModal(false)} edit_stock={editStock} />}
    </section>
  )
}

export default StockTable