"use client";
import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { createCategory } from "@/features/category/categoryAction";

export default function AddCategory({ showModal, setShowModal }) {
    const [categoryName, setCategoryName] = useState("");
    const [description, setDescription] = useState("");
    const [loading, setLoading] = useState(false);
const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createCategory({name: categoryName, description}))
        console.log("i am here")
        // try {
        //     setLoading(true);
        //     const response = await axios.post("/api/category/add-category", {
        //         name: categoryName,
        //         description
        //     });
        //     setLoading(false);
        //     if (response.data.success) {
        //         setShowModal(prevState=> ({...prevState, category: false}));
        //         setCategoryName("");
        //         setDescription("");
        //         // fetchCategories();
        //     }
        // } catch (error) {
        //     setLoading(false);
        //     console.log(error);
        // }
    };

    if (!showModal) return null;

    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
            <div className="bg-white rounded-lg p-8 max-w-md w-full">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Add New Category</h2>
                    <button
                        onClick={() => setShowModal(prevState=> ({...prevState, category: false}))}
                        className="text-gray-400 hover:text-gray-500"
                    >
                        ×
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="categoryName" className="block text-sm font-medium text-gray-700">
                            Category Name
                        </label>
                        <input
                            id="categoryName"
                            type="text"
                            required
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="e.g., T-Shirts, Dresses, Pants"
                            value={categoryName}
                            onChange={(e) => setCategoryName(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            rows={4}
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                            placeholder="Describe the category..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="flex justify-end gap-3">
                        <button
                            type="button"
                            onClick={() => setShowModal(false)}
                            className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {loading ? "Adding..." : "Add Category"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
