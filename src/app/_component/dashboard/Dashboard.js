"use client";

export default function Dashboard() {
    return <>
        <div className="container mx-auto p-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="flex justify-between items-center mb-6">
                    <h1 className="text-2xl font-bold text-gray-800">Stock Management</h1>
                    <div className="flex gap-4">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
                            Add New Item
                        </button>
                        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
                            Export Report
                        </button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="py-3 px-4 text-left">Item Name</th>
                                <th className="py-3 px-4 text-left">Category</th>
                                <th className="py-3 px-4 text-left">Quantity</th>
                                <th className="py-3 px-4 text-left">Price</th>
                                <th className="py-3 px-4 text-left">Status</th>
                                <th className="py-3 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b hover:bg-gray-50">
                                <td className="py-3 px-4">Product A</td>
                                <td className="py-3 px-4">Electronics</td>
                                <td className="py-3 px-4">150</td>
                                <td className="py-3 px-4">$299.99</td>
                                <td className="py-3 px-4">
                                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">In Stock</span>
                                </td>
                                <td className="py-3 px-4">
                                    <div className="flex gap-2">
                                        <button className="text-blue-500 hover:text-blue-700">Edit</button>
                                        <button className="text-red-500 hover:text-red-700">Delete</button>
                                    </div>
                                </td>
                            </tr>
                            <tr className="border-b hover:bg-gray-50">
                                <td className="py-3 px-4">Product B</td>
                                <td className="py-3 px-4">Furniture</td>
                                <td className="py-3 px-4">5</td>
                                <td className="py-3 px-4">$599.99</td>
                                <td className="py-3 px-4">
                                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded">Low Stock</span>
                                </td>
                                <td className="py-3 px-4">
                                    <div className="flex gap-2">
                                        <button className="text-blue-500 hover:text-blue-700">Edit</button>
                                        <button className="text-red-500 hover:text-red-700">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="mt-4 flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                        Showing 1 to 2 of 2 entries
                    </div>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 border rounded hover:bg-gray-100">Previous</button>
                        <button className="px-3 py-1 border rounded bg-blue-500 text-white">1</button>
                        <button className="px-3 py-1 border rounded hover:bg-gray-100">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
}
