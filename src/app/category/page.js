"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import AddCategory from "./_component/AddCategory";
import AddBrand from "./_component/AddBrand";
import Sidebar from "./_component/Sidebar";
import style from './category.module.scss'

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const [showModal, setShowModal] = useState({category: false, brand: false});
    const router = useRouter();

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get("/api/category/get-category-list");
            setCategories(response.data.categories);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className={`max-w-7xl mx-auto }`}>
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Categories</h1>
                    <div>
                    <button
                        onClick={() => setShowModal( {category: true, brand: false})}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        Add New Category
                    </button>
                    <button
                        onClick={() => setShowModal( {category: false, brand: true})}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                        Add Brand
                    </button>
                    </div>
                </div>
                <Sidebar />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => (
                        <div key={category._id} className="bg-white rounded-lg shadow p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                            <p className="text-gray-600">{category.description}</p>
                        </div>
                    ))}
                </div>
                <AddCategory
                    showModal={showModal.category}
                    setShowModal={setShowModal}
                    fetchCategories={fetchCategories}
                />
                <AddBrand
                    showModal={showModal.brand}
                    setShowModal={setShowModal}
                    categories={categories}
                />
            </div>
        </div>
    );
}
