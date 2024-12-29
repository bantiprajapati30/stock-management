"use client"
import { useState } from "react";
import axios from "axios";
import Select from 'react-select';
export default function AddBrand({ showModal, setShowModal, categories }) {
    const [brandName, setBrandName] = useState("");
const [loading, setLoading] = useState(false);
const [dropdownData, setDropdownData] = useState({});
const renderListing =()=>{
    let temp = [];
    console.log(categories);
    categories && categories.map((item)=>{
        temp.push({value: item._id, label: item.name, refValueId: item.refValueId})
    })
    return temp
}
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/brand/add-brand", {
                name: brandName,
                parentValue: dropdownData.refValueId
            });
            if (response.data.success) {
                setBrandName("");
            }
        } catch (error) {
            console.log(error);
        }
    };
    if (!showModal) return null;
    return (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
        <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Add Brand</h2>
                <button
                    onClick={() => setShowModal(prevState=> ({...prevState, brand: false}))}
                    className="text-gray-400 hover:text-gray-500"
                >
                    ×
                </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Category
                    
                        <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={null}
        // isDisabled={false}
        // isClearable={true}
        // isSearchable={true}
        onChange={(e) => setDropdownData(e)}
        name="color"
        options={renderListing()}
      /></label>
                    <label className="block text-sm font-medium text-gray-700">
                        Brand Name
                    </label>
                    <input
                        id="categoryName"
                        type="text"
                        required
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md "
                        placeholder="e.g., T-Shirts, Dresses, Pants"
                        value={brandName}
                        onChange={(e) => setBrandName(e.target.value)}
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

