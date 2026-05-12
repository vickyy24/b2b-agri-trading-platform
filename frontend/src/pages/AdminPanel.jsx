// import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

const Admin = () => {

    const location = useLocation();

    return (
        <div className="min-h-screen bg-[#f8faf7] px-6 py-6">

            <div className="mb-5">
                <h1 className="text-3xl font-bold text-[#8b4513] mb-1">Admin Panel</h1>
                <p className="text-gray-600">Manage commodity categories and products.</p>
            </div>

            <div className="flex gap-4 mb-5">

                <Link to="category" className={
                    location.pathname === "/admin/category" ? "px-5 py-2.5 rounded-lg font-semibold cursor-pointer bg-[#2f855a] text-white " : "px-5 py-2.5 rounded-lg font-semibold cursor-pointer bg-white border border-gray-300 text-gray-700"}>
                    Categories
                </Link>

               <Link to="product" className={
                    location.pathname === "/admin/product" ? "px-5 py-2.5 rounded-lg font-semibold cursor-pointer bg-[#2f855a] text-white " : "px-5 py-2.5 rounded-lg font-semibold cursor-pointer bg-white border border-gray-300 text-gray-700"}>
                    Products
                </Link>

            </div>
            <Outlet />

        </div>
    );

};

export default Admin;