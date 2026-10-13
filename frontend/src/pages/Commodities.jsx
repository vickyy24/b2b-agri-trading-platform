import { useEffect, useState } from "react";
import CommonHero from "../Components/CommonHero";
import commoditiesBgImage from "../assets/commoditiesBgImage.jpg";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, incrementQuantity, decrementQuantity } from "../Redux/CartSlice";
import ProductCard from "../Components/ProductCard";

const Commodities=()=>{

    const [categoryList, setCategoryList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [activeCategoryTab, setActiveCategoryTab] = useState("");

    //redux hooks
    const dispatch = useDispatch();

    //accessing cart from Store.js
    const cartItems = useSelector(
        (state) => state.cart.cartItems
    );

    // Helper Functions 
    function getCartProduct(product_id){
        return cartItems.find(
            (item) => item.product_id === product_id
        );
    }

    // Event Handlers
    function handleAddToCart(product){
        dispatch(addToCart(product));
    }

    function handleIncrement(product_id){
        dispatch(incrementQuantity(product_id));
    }

    function handleDecrement(product_id){
        dispatch(decrementQuantity(product_id));
    }

    // API Functions
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

    // Side Effects
    useEffect(()=>{

        getCategories();
        getProducts();

    },[]);

    return(

        <div>

            {/* Section 1 */}
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
                            } onClick={()=>setActiveCategoryTab("all")}>
                            All Commodities
                        </button>

                        {
                            categoryList.map((list,index)=>(

                                <button key={index} onClick={()=>setActiveCategoryTab(list.category_id)}

                                    className={
                                        activeCategoryTab === list.category_id
                                        ? "px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base whitespace-nowrap bg-[#2f855a] text-white shadow-md cursor-pointer"
                                        : "px-4 py-2 md:px-6 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base whitespace-nowrap bg-[#f5f5dc] text-[#8b4513] hover:bg-[#2f855a] hover:text-white cursor-pointer"
                                    }
                                >
                                    {list.category_name}
                                </button>

                            ))
                        }

                    </div>

                </div>

            </section>

            {/* Section 3 */}
            <section className=" py-5 md:py-10 bg-sky-50/40">

                <div className="mx-auto px-4">

                    {/* Heading Row */}
                    <div className="flex items-center gap-2 mb-5">

                        <h2 className="text-xl md:text-2xl font-bold text-[#8b4513]">

                            {
                                activeCategoryTab === "all" ? "All Commodities" : categoryList.find((item)=>item.category_id == activeCategoryTab)?.category_name
                            }

                        </h2>

                        <span className="text-[#2f855a] text-sm md:text-base font-semibold">

                            (
                                { activeCategoryTab === "all" ? productList.length : productList.filter((item)=>item.category_id == activeCategoryTab).length }
                                {" "}Products
                            )

                        </span>

                    </div>

                    {/* All Products Cards Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">

                        {
                            productList.map((list,index)=>{

                                //cartproduct means data of single product
                                const cartProduct = getCartProduct(list.product_id);

                                if(activeCategoryTab === "all" || list.category_id == activeCategoryTab){

                                    return(
                                        <ProductCard
                                            key={index}
                                            list={list}
                                            cartProduct={cartProduct}
                                            handleAddToCart={handleAddToCart}
                                            handleIncrement={handleIncrement}
                                            handleDecrement={handleDecrement}
                                        />
                                    )

                                }

                            })
                        }

                    </div>

                </div>

            </section>

            {/* Section 4 */}
            <section className="py-8 md:py-16 bg-white">

                <div className="px-4 mx-auto">

                    <h2 className="text-xl md:text-3xl text-[#8b4513] font-bold text-center mb-8 md:mb-12">
                        Quality Assurance Standards
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">

                        <div className="border border-gray-200 bg-sky-50/40 rounded-lg p-4 md:p-6 shadow-sm hover:border-[#2f855a] transition-colors">

                            <p className="text-3xl md:text-4xl mb-3 md:mb-4">🔬</p>

                            <h3 className="text-base md:text-lg text-[#2f855a] font-bold mb-2 md:mb-3">
                                Laboratory Testing
                            </h3>

                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                Every shipment undergoes rigorous lab testing for moisture, protein, purity, contaminants, and nutritional parameters.
                            </p>

                        </div>

                        <div className="border border-gray-200 bg-sky-50/40 rounded-lg p-4 md:p-6 shadow-sm hover:border-[#2f855a] transition-colors">

                            <p className="text-3xl md:text-4xl mb-3 md:mb-4">👁️</p>

                            <h3 className="text-base md:text-lg text-[#2f855a] font-bold mb-2 md:mb-3">
                                Visual & Physical Inspection
                            </h3>

                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                Trained inspectors verify color, size, uniformity, foreign matter, and physical characteristics before packaging.
                            </p>

                        </div>

                        <div className="border border-gray-200 bg-sky-50/40 rounded-lg p-4 md:p-6 shadow-sm hover:border-[#2f855a] transition-colors">

                            <p className="text-3xl md:text-4xl mb-3 md:mb-4">📋</p>

                            <h3 className="text-base md:text-lg text-[#2f855a] font-bold mb-2 md:mb-3">
                                Certification & Documentation
                            </h3>

                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                All commodities come with quality certificates, traceability documents, and compliance certificates.
                            </p>

                        </div>

                        <div className="border border-gray-200 bg-sky-50/40 rounded-lg p-4 md:p-6 shadow-sm hover:border-[#2f855a] transition-colors">

                            <p className="text-3xl md:text-4xl mb-3 md:mb-4">🌍</p>

                            <h3 className="text-base md:text-lg text-[#2f855a] font-bold mb-2 md:mb-3">
                                Global Standards
                            </h3>

                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                Compliance with international standards: ISO, FSSAI, FDA, EU regulations, and country-specific requirements.
                            </p>

                        </div>

                    </div>

                </div>

            </section>

            {/* Section 5 */}
            <section className="py-6 md:py-12 bg-gray-50">

                <div className="mx-auto px-4">

                    <h2 className="text-lg md:text-2xl font-bold text-center text-[#8b4513] mb-6 md:mb-8">
                        Commodity Categories
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">

                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-[#2f855a] mb-1 md:mb-2 text-sm md:text-base">Grains & Cereals</h3>
                            <p className="text-gray-600 text-xs md:text-sm">7 Products</p>
                        </div>

                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-[#2f855a] mb-1 md:mb-2 text-sm md:text-base">Pulses & Lentils</h3>
                            <p className="text-gray-600 text-xs md:text-sm">7 Products</p>
                        </div>

                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-[#2f855a] mb-1 md:mb-2 text-sm md:text-base">Seeds</h3>
                            <p className="text-gray-600 text-xs md:text-sm">7 Products</p>
                        </div>

                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-[#2f855a] mb-1 md:mb-2 text-sm md:text-base">Spices & Condiments</h3>
                            <p className="text-gray-600 text-xs md:text-sm">0 Products</p>
                        </div>

                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-[#2f855a] mb-1 md:mb-2 text-sm md:text-base">Sugar & Sweeteners</h3>
                            <p className="text-gray-600 text-xs md:text-sm">0 Products</p>
                        </div>

                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-[#2f855a] mb-1 md:mb-2 text-sm md:text-base">Dry Fruits & Nuts</h3>
                            <p className="text-gray-600 text-xs md:text-sm">0 Products</p>
                        </div>

                        <div className="bg-white p-3 md:p-4 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                            <h3 className="font-bold text-[#2f855a] mb-1 md:mb-2 text-sm md:text-base">Edible Oils</h3>
                            <p className="text-gray-600 text-xs md:text-sm">0 Products</p>
                        </div>

                    </div>

                </div>

            </section>

        </div>

    )

}

export default Commodities;
