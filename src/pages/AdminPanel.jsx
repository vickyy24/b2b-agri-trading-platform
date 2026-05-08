import { useState } from "react";

const Admin = () => {

    const [activeTab, setActiveTab] = useState("category");

    const [specificationInput, setSpecificationInput] = useState({
        title: "",
        value: ""
    });
    const [specificationlist, setSpecificationlist] = useState([]);

    const [gradesInput, setGradesInput] = useState({
        grades: ""
    });
    const [gradeslist, setGradeslist] = useState([]);

    function handleCategoryTab() {
        setActiveTab("category");
    }

    function handleProductTab() {
        setActiveTab("product");
    }

    function handleSpecificationInput(e) {

        setSpecificationInput({
            ...specificationInput,
            [e.target.name]: e.target.value
        });

    }

    function addSpecification() {

        setSpecificationlist([
            ...specificationlist,
            specificationInput
        ]);

        setSpecificationInput({
            title: "",
            value: ""
        });

    }

    function handleGradesInput(e) {

        setGradesInput({
            ...gradesInput,
            [e.target.name]: e.target.value
        });

    }

    function addGrade() {

        setGradeslist([
            ...gradeslist,
            gradesInput
        ]);

        setGradesInput({
            grades: ""
        });

    }

    function addCategory(e){
        e.preventDefault()
    }
    function addProduct(e){
        e.preventDefault()
    }

    return (
        <div className="min-h-screen bg-[#f8faf7] px-6 py-6">

            <div className="mb-5">
                <h1 className="text-3xl font-bold text-[#8b4513] mb-1">Admin Panel</h1>
                <p className="text-gray-600">Manage commodity categories and products.</p>
            </div>

            <div className="flex gap-4 mb-5">

                <button className={`px-5 py-2.5 rounded-lg font-semibold cursor-pointer 
                    ${ activeTab === "category" ? "bg-[#2f855a] text-white" : "bg-white border border-gray-300 text-gray-700"}`} onClick={handleCategoryTab}>
                    Categories
                </button>

                <button className={`px-5 py-2.5 rounded-lg font-semibold cursor-pointer 
                    ${ activeTab === "product" ? "bg-[#2f855a] text-white" : "bg-white border border-gray-300 text-gray-700"}`} onClick={handleProductTab}>
                    Products
                </button>

            </div>

            {
                activeTab === "category" && (

                    <div className="flex gap-6 items-start">

                        <div className="w-[40%] bg-white rounded-2xl shadow-md border border-gray-100 p-6">

                            <h2 className="text-2xl font-semibold text-[#8b4513] mb-6">Category Details</h2>
                            <form onSubmit={addCategory} className="space-y-5">

                                <label className="block text-sm font-medium text-gray-800 mb-2">Category Name *</label>
                                <input type="text" placeholder="Enter category name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700"/>
                                
                                <label className="block text-sm font-medium text-gray-800 mb-2">Is Active *</label>
                                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700">
                                    <option>Select Status</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                </select>

                                <button type="submit" className="w-full px-7 py-3 mt-6 rounded-lg text-white font-semibold bg-linear-to-b from-green-600 to-green-700 cursor-pointer">
                                    Add Category
                                </button>
                            </form >
                        </div>

                        {/* --------- Category List table --------- */}
                        <div className="w-[60%] bg-white rounded-2xl shadow-md border border-gray-100 p-6">

                            <h2 className="text-2xl font-semibold text-[#8b4513] mb-6">Category List</h2>
                            <div className="overflow-x-auto">

                                <table className="w-full border">
                                    <thead className="bg-[#f3f5f2]">
                                        <tr>
                                            <th className="text-left px-5 py-4 border border-gray-300">Sr No</th>
                                            <th className="text-left px-5 py-4 border border-gray-300">Category Name</th>
                                            <th className="text-left px-5 py-4 border border-gray-300">Is Active</th>
                                            <th className="text-left px-5 py-4 border border-gray-300">Action</th>
                                        </tr>
                                    </thead>
                                </table>

                            </div>

                        </div>

                    </div>

                )
            }

            {
                activeTab === "product" && (

                    <div className="flex gap-6 items-start">

                        <form onSubmit={addProduct} className="w-[40%] bg-white rounded-2xl shadow-md border border-gray-100 p-6">

                            <h2 className="text-2xl font-semibold text-[#8b4513] mb-6">Product Details</h2>

                            <div className="space-y-5">

                                <label className="block text-sm font-medium text-gray-800 mb-2">Category</label>
                                <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700">
                                    <option>Select Category</option>
                                </select>
                                
                                <label className="block text-sm font-medium text-gray-800 mb-2">Product Name</label>
                                <input type="text" placeholder="Enter product name" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700"/>
                                
                                <label className="block text-sm font-medium text-gray-800 mb-2">Packaging Detail</label>
                                <input type="text" placeholder="Enter packaging detail" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700"/>

                                <label className="block text-sm font-medium text-gray-800 mb-2">HS Code</label>
                                <input type="text" placeholder="Enter HS code" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700"/>

                                <label className="block text-sm font-medium text-gray-800 mb-2">Product Image</label>
                                <input type="file" className="w-full border border-gray-300 rounded-lg px-4 py-3"/>
                            </div>

                            <div className="flex justify-between items-center mb-4 mt-8">
                                <h3 className="text-lg font-semibold text-[#8b4513]">Specifications</h3>
                                <button onClick={addSpecification} className="px-4 py-2 rounded-lg bg-[#2f855a] text-white text-sm font-medium cursor-pointer">
                                    Add
                                </button>
                            </div>

                            <div className="grid grid-cols-2 gap-4">

                                <input type="text" name="title" placeholder="Title" value={specificationInput.title} onChange={handleSpecificationInput} className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700"/>

                                <input type="text" name="value" placeholder="Value" value={specificationInput.value} onChange={handleSpecificationInput} className="border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700"/>

                            </div>

                            <div className="mt-6 overflow-x-auto">

                                <table className="w-full">
                                    <thead className="bg-[#f3f5f2]">
                                        <tr>
                                            <th className="text-left px-5 py-4 border border-gray-300"> Sr No.</th>
                                            <th className="text-left px-5 py-4 border border-gray-300"> Title</th>
                                            <th className="text-left px-5 py-4 border border-gray-300">Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            specificationlist.map((list, index)=> (
                                                <tr key={index}>
                                                    <td className="px-5 py-4 border border-gray-300">{index+1}</td>
                                                    <td className="px-5 py-4 border border-gray-300">{list.title}</td>
                                                    <td className="px-5 py-4 border border-gray-300">{list.value}</td>
                                                </tr>
                                            ))
                                        }

                                    </tbody>

                                </table>

                            </div>

                            <div className="flex justify-between items-center mb-4 mt-8">

                                <h3 className="text-lg font-semibold text-[#8b4513]">Quality Grades</h3>
                                <button onClick={addGrade} className="px-4 py-2 rounded-lg bg-[#2f855a] text-white text-sm font-medium cursor-pointer">
                                    Add
                                </button>

                            </div>

                            <input type="text" name="grades" placeholder="Enter grade" value={gradesInput.grades} onChange={handleGradesInput} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-green-700"/>

                            <div className="mt-6 overflow-x-auto">

                                <table className="w-full">
                                    <thead className="bg-[#f3f5f2]">
                                        <tr>
                                            <th className="text-left px-5 py-4 border border-gray-300"> Sr No.</th>
                                            <th className="text-left px-5 py-4 border border-gray-300"> Grade</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {
                                            gradeslist.map(function(list, index) {
                                                return (
                                                    <tr key={index}>
                                                        <td className="px-5 py-4 border border-gray-300">{index+1}</td>
                                                        <td className="px-5 py-4 border border-gray-300">{list.grades}</td>
                                                    </tr>
                                                );

                                            })
                                        }

                                    </tbody>

                                </table>

                            </div>

                            <button type="submit" className="w-full px-7 py-3 mt-8 rounded-lg text-white font-semibold bg-linear-to-b from-green-600 to-green-700 cursor-pointer">
                                Add Product
                            </button>

                        </form >

                        {/* --------- Product List Table ---------*/}
                        <div className="w-[60%] bg-white rounded-2xl shadow-md p-6">

                            <h2 className="text-2xl font-semibold text-[#8b4513] mb-6"> Product List</h2>
                            <div className="overflow-x-auto">

                                <table className="w-full">
                                    <thead className="bg-[#f3f5f2]">
                                        <tr>
                                            <th className="text-left px-5 py-4 border border-gray-300">Sr No</th>
                                            <th className="text-left px-5 py-4 border border-gray-300">Product Name</th>
                                            <th className="text-left px-5 py-4 border border-gray-300">Category</th>
                                            <th className="text-left px-5 py-4 border border-gray-300">HS Code</th>
                                            <th className="text-left px-5 py-4 border border-gray-300">Action</th>
                                        </tr>
                                    </thead>
                                </table>

                            </div>

                        </div>

                    </div>

                )
            }

        </div>
    );

};

export default Admin;