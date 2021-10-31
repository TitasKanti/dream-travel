import React, { useEffect, useState } from 'react';
import AllOrders from './AllOrders/AllOrders';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
            })
    }, [])

    //DELETE Order
    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrders = allOrders.filter(allOrder => allOrder._id !== id);
                        setAllOrders(remainingOrders);
                    }
                })
        }
    }

    return (
        <>
            <div className="flex flex-col">
                <h2 className="text-center text-5xl m-2 text-gray-600"> All Orders</h2>
                {
                    allOrders.map(allOrder => <AllOrders
                        key={allOrder._id}
                        allOrder={allOrder}
                        handleDeleteOrder={handleDeleteOrder}
                    >
                    </AllOrders>
                    )
                }
            </div>
        </>
    );
};

export default ManageAllOrders;