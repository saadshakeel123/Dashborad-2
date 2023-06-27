import React from "react";
import { useState } from 'react';

function NewOrders() {
    const [itemName, setItemName] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [totalAmount, setTotalAmount] = useState('');
    const [status, setStatus] = useState('');
    const [location, setLocation] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Perform additional validation or API calls here
        // ...

        // Clear the form
        setItemName('');
        setCustomerName('');
        setTotalAmount('');
        setStatus('');
        setLocation('');
    };

    return (
        <div className="flex justify-center">
            <div className="border-solid border-2 border-sky-500 ml-5 mt-10 w-[45rem]">
                <div className="container mx-auto p-4">
                    <h1 className="text-2xl font-bold mb-4">Add Order</h1>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        <label className="mb-2" htmlFor="itemName">
                            Item Name:
                        </label>
                        <input
                            type="text"
                            id="itemName"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
                            required
                        />

                        <label className="mb-2" htmlFor="customerName">
                            Customer Name:
                        </label>
                        <input
                            type="text"
                            id="customerName"
                            value={customerName}
                            onChange={(e) => setCustomerName(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
                            required
                        />

                        <label className="mb-2" htmlFor="totalAmount">
                            Total Amount:
                        </label>
                        <input
                            type="number"
                            id="totalAmount"
                            value={totalAmount}
                            onChange={(e) => setTotalAmount(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
                            required
                        />

                        <label className="mb-2" htmlFor="status">
                            Status:
                        </label>
                        <input
                            type="text"
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
                            required
                        />

                        <label className="mb-2" htmlFor="location">
                            Location:
                        </label>
                        <input
                            type="text"
                            id="location"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            className="border border-gray-300 rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-500"
                            required
                        />

                        <button
                            type="submit"
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Add Order
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewOrders;
