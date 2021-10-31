import React, { useEffect, useState } from 'react';

const AllOrders = ({ allOrder, handleDeleteOrder }) => {
    const { userName, email, name, price, _id } = allOrder;
    const [order, setOrder] = useState({});


    useEffect(() => {
        const url = `http://localhost:5000/orders/${_id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    //update status
    const handleStatusChange = e => {
        const updatedStatus = 'approved';
        console.log(updatedStatus)
        const updatedOrder = { ...order };
        updatedOrder.status = updatedStatus;
        setOrder(updatedOrder);
    }
    const handleStatusUpdate = id => {
        const url = `http://localhost:5000/orders/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated status successfully');
                }
            })
    }


    return (
        <>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Event Title & cost
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                        update status
                                    </th>
                                    <th scope="col" className="relative px-6 py-3">
                                        <span className="sr-only">X</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">

                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">
                                                    {userName}
                                                </div>
                                                <div className="text-sm text-gray-500">
                                                    {email}
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{name}</div>
                                        <div className="text-sm text-gray-500">{price}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            <input type="button" onClick={handleStatusChange} value={order.status || ''} />
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        <span className="bg-gray-600 hover:bg-gray-800 text-white p-2 rounded-sm"><button onClick={() => handleStatusUpdate(_id)}>Update Status</button></span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <button onClick={() => handleDeleteOrder(_id)} className="text-indigo-600 hover:text-indigo-900 text-2xl">X</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    );
};

export default AllOrders;