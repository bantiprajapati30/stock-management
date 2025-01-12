// pages/index.jsx
'use client';
import React, { useEffect, useState } from 'react';
import Sidebar from './_component/Sidebar';
import BrandDisplay from './_component/BrandDissplay';
import AddCategory from './_component/AddCategory';
import AddBrand from './_component/AddBrand';
import axios from 'axios';

const HomePage = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categoriesList, setCategoriesList] = useState([]);
    const [singleCategory, setSingleCategory] = useState([]);
    const [brandsList, setBrandsList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showModal, setShowModal] = useState({ category: false, brand: false });
    useEffect(() => {
        // setLoading(true);
        // fetchCategories();
    }, []);
    const fetchCategories = async () => {
        try {
            const response = await axios.get("/api/category/get-category-list");
            setCategoriesList(response.data.categories);

            const res = await axios.get("/api/brand/get-brand?parentValue=");
            setBrandsList(res.data.brands);
            setSingleCategory(res.data.categories);
            setSelectedCategory(res.data.categories[0]);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };
    // const fetchBrands = async () => {
    //     try {
           
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };
    return (
        <div>
        {!loading ?<div className="flex flex-col md:flex-row">
            <div>
                <button
                    onClick={() => setShowModal({ category: true, brand: false })}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    Add New Category
                </button>
                <button
                    onClick={() => setShowModal({ category: false, brand: true })}
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    Add Brand
                </button>
            </div>
            {/* Sidebar */}
            <Sidebar
                categories={singleCategory}
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
            />

            {/* Brand Display Section */}
            <div className="flex-1 bg-gray-100 h-auto md:h-screen overflow-auto">
                <h1 className="text-2xl md:text-3xl font-bold p-4">
                    {selectedCategory} Brands
                </h1>
                <BrandDisplay brands={brandsList} />
            </div>
            <AddCategory
                showModal={showModal.category}
                setShowModal={setShowModal}
                // fetchCategories={fetchCategories}
            />
            <AddBrand
                showModal={showModal.brand}
                setShowModal={setShowModal}
                categories={categoriesList}
            />
        </div>: null}
        </div>
    );
};

export default HomePage;
