import React, { useState, useContext, useEffect } from 'react'
import { Trash2Icon, EditIcon } from 'lucide-react'
import { StockContext } from '../../contexts/StockContext';
import StockEditModal from './StockEditModal';

const StockTable = () => {
  const [showModal, setShowModal] = useState(false)
  const { getStockList, loadStockData, stock, setLoadStockData } = useContext(StockContext);
  const [editId, setEditId] = useState(null)

  useEffect(() => {
    getStockList()
  }, [loadStockData])

  const deleteStock = async (id) => {
    const url = "http://localhost:3000/api/stock/" + id;
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    };

    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then(data => {
        setLoadStockData((prev) => !prev);
        console.log('Success:', data);
      })
      .catch((error) => {
        console.log('Error:', error);
      });
  }

  const editableValue = (id) => {
    let editStock = stock.filter(stock => stock.id === id);
    return editStock[0]
  }

  const editStock = async (id) => {
    setEditId(id)
    setShowModal(true)

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
                    stock.map((items, index) => {
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
                              onClick={() => deleteStock(items.id)}
                              className="inline-block py-2.5 px-4 rounded-md hover:bg-red-300 text-red-600 font-medium"
                            >
                              <Trash2Icon />
                            </button>
                            <button
                              onClick={() => editStock(items.id)}
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
      {showModal && <StockEditModal onClose={() => setShowModal(false)} edit_stock={editableValue(editId)} />}
    </section>
  )
}

export default StockTable