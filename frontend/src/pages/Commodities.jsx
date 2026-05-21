import { useEffect, useState } from "react";
import CommonHero from "../Components/CommonHero";
import commoditiesBgImage from "../assets/commoditiesBgImage.jpg";
import axios from "axios";
import { FiEye } from "react-icons/fi";

const Commodities=()=>{
    const [categoryList, setCategoryList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [activeCategoryTab, setActiveCategoryTab] = useState("");


    function getCategories(){

        axios({
            url: "http://localhost:9000/getcategories",
            method: "GET"
        })
        .then((response)=>{

            setCategoryList(response.data);

            setActiveCategoryTab("all");

        })
        .catch((error)=>{
            console.log(error);
        })

    }
    function getProducts(){

        axios({
            url: "http://localhost:9000/getproducts",
            method: "GET"
        })
        .then((response)=>{

            setProductList(response.data);

        })
        .catch((error)=>{
            console.log(error);
        })

    }
    useEffect(()=>{
        getCategories();
        getProducts();
    },[]);
    return(
        <div>

            <CommonHero
                bgImage = {commoditiesBgImage}
                title = "Agricultural Commodities"
                description = {`We source and supply premium quality agricultural products from verified, trusted producers. 
                Our portfolio includes essential grains, pulses, and specialty crops meeting international standards. 
                Each commodity undergoes rigorous quality checks to ensure nutritional value, purity, and market suitability.`}
            />
            
            {/* Section 2 - Categories Tabs */}
            <section className="sticky top-0 z-40 bg-white py-3 md:py-6 shadow-sm">
                <div className="px-4">

                    <div className="hidden md:flex flex-wrap justify-center gap-2 md:gap-4">

                        <button
                            className={
                                activeCategoryTab === "all"
                                ? "px-4 py-3 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base whitespace-nowrap bg-[#2f855a] text-white shadow-md cursor-pointer"
                                : "px-4 py-3 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base whitespace-nowrap bg-[#f5f5dc] text-[#8b4513] hover:bg-[#2f855a] hover:text-white cursor-pointer"
                            }
                            onClick={()=>setActiveCategoryTab("all")}>
                            All Commodities
                        </button>

                        {
                            categoryList.map((list,index)=>(

                                <button key={index} onClick={()=>setActiveCategoryTab(list.category_id)}
                                    className={
                                        activeCategoryTab === list.category_id
                                        ? "px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base whitespace-nowrap bg-[#2f855a] text-white shadow-md cursor-pointer"
                                        : "px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base whitespace-nowrap bg-[#f5f5dc] text-[#8b4513] hover:bg-[#2f855a] hover:text-white cursor-pointer"
                                    }>
                                    {list.category_name}
                                </button>

                            ))
                        }

                    </div>

                </div>

            </section>

            {/* Section 3 */}
            <section className=" py-6 md:py-12">
                <div className="px-4">

                    {/* Heading Row */}

                    <div className="flex items-center gap-2 mb-5">

                        <h2 className="text-xl md:text-2xl font-bold text-[#8b4513]">

                            {
                                activeCategoryTab === "all"
                                ? "All Commodities"
                                : categoryList.find((item)=>item.category_id == activeCategoryTab)?.category_name
                            }

                        </h2>

                        <span className="text-[#2f855a] text-sm md:text-base font-semibold">

                            (
                                {
                                    activeCategoryTab === "all"
                                    ? productList.length
                                    : productList.filter((item)=>item.category_id == activeCategoryTab).length
                                }
                                {" "}Products
                            )

                        </span>

                    </div>


                    {/* Products Grid */}

                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {
                            productList.map((list,index)=>{

                                if(activeCategoryTab === "all" || list.category_id == activeCategoryTab){

                                    return(

                                        // Main Card starts here
                                        <div key={index}
                                            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-6 flex flex-col h-full" >

                                            <div className="flex items-start justify-between mb-5">

                                                <img src={`http://localhost:9000/uploads/${list.image}`} alt="productImage" className="w-16 h-16 object-contain"/>

                                                <div className="bg-[#f5f5dc] text-[#8b4513] text-sm font-medium px-4 py-1 rounded-full">
                                                    Year-round
                                                </div>

                                            </div>

                                            {/* Product Name */}
                                            <h3 className="text-lg md:text-xl font-bold text-[#8b4513] mb-5">

                                                {list.product_name}

                                            </h3>


                                            {/* Specifications */}
                                            <div className="mb-4">

                                                <h4 className="text-[#2f855a] text-sm md:text-base font-bold mb-4">

                                                    Specifications:

                                                </h4>

                                                <ul className="space-y-3 text-gray-600 text-xs md:text-sm">

                                                    {
                                                        list.specifications.map((item, index)=>{
                                                            return(
                                                                
                                                                <li key={index}>• {item.title}:{item.value}</li>
                                                            )
                                                        })
                                                    }
                                                </ul>

                                            </div>

                                            {/* Quality Grades */}
                                            <div className="mb-4">

                                                <h4 className="text-[#2f855a] text-sm md:text-base font-bold mb-4">
                                                    Quality Grades:
                                                </h4>

                                                <ul className="flex gap-1 md:gap-2 ">
                                                    {
                                                        list.grades.map((item,index)=>( 
                                                            <li key={index} className="bg-gray-100 px-2 py-1 rounded-full text-xs md:text-sm text-gray-700">{item.grade}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>

                                            {/* Packaging */}
                                            <div className="mb-4">

                                                <h4 className="text-[#2f855a] text-sm md:text-base font-bold mb-2">

                                                    Packaging:

                                                </h4>

                                                <div className="inline-block bg-blue-50 text-blue-700 text-xs md:text-sm px-2 py-1 rounded-full">

                                                    {list.packaging_detail}

                                                </div>

                                            </div>


                                            {/* HS Code */}

                                            <div className="border-t border-gray-100 pt-4">

                                                <p className="text-xs md:text-sm text-gray-500">

                                                    HS Code:
                                                    {" "}

                                                    <span className="text-[#8b4513] font-mono">

                                                        {list.hs_code}

                                                    </span>

                                                </p>

                                            </div>

                                            {/* Button */}
                                            <div className="mt-10">

                                                <button className="w-full flex items-center justify-center gap-2 bg-[#2f855a] hover:bg-green-700 text-white text-sm md:py-3 md:text-base py-2 px-4 rounded-lg duration-300 cursor-pointer">
                                                    <span><FiEye className="h-5 w-5" /></span>
                                                    View Details 
                                                </button>

                                            </div>

                                        </div>

                                    )

                                }

                            })
                        }

                    </div>

                </div>
            </section>

        </div>
    )
}

export default Commodities;