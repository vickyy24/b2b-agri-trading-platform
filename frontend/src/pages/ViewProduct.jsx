import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ViewProduct = () => {

    const params = useParams();

    const [product, setProduct] = useState(null);

    useEffect(() => {

        window.scrollTo(0, 0);

        getProductById();

    }, [params.productid]);


    const getProductById = async () => {

        try{

            const response = await axios({

                url: `http://localhost:9000/getproduct/${params.productid}`,
                method: "GET"

            });

            setProduct(response.data);

        }
        catch(error){

            console.log(error.message);

        }

    }


    if(product === null){

        return(

            <section className="min-h-screen bg-linear-to-b from-[#2d3748] via-[#d8d2ad] to-[#f5f5dc] pt-28 flex justify-center items-center">

                <h1 className="text-xl md:text-2xl font-semibold text-[#2d3748]">
                    Loading Product...
                </h1>

            </section>

        )

    }


    return(

        <section className="bg-linear-to-b from-[#2d3748] via-[#d8d2ad] to-[#f5f5dc] pt-28">

            <div className="max-w-7xl mx-auto px-4 pb-16">

                <div className="bg-white rounded-3xl shadow-xl border border-[#edf2ed] overflow-hidden">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-5 md:p-10">

                        {/* Product Image Section */}
                        <div className="bg-[#f8faf7] rounded-3xl p-5 md:p-8 flex justify-center items-center">

                            <img
                                src={`http://localhost:9000/uploads/${product.image}`}
                                alt={product.product_name}
                                className="w-full max-w-md h-80 md:h-112 object-contain hover:scale-105 duration-300"
                            />

                        </div>


                        {/* Product Details Section */}
                        <div className="flex flex-col justify-center">

                            <p className="text-[#2f855a] text-xs md:text-sm font-semibold uppercase tracking-wide mb-3">
                                Premium Agricultural Commodity
                            </p>

                            <h1 className="text-3xl md:text-5xl font-bold text-[#2d3748] leading-tight mb-5">
                                {product.product_name}
                            </h1>


                            {/* Price Section */}
                            <div className="flex items-end gap-2 mb-8">

                                <h2 className="text-3xl md:text-4xl font-bold text-[#8b4513]">

                                    ₹ {Number(product.product_price).toLocaleString("en-IN")}

                                </h2>

                                <p className="text-[8px] md:text-xs text-gray-500 mb-1">
                                    Incl. all taxes
                                </p>

                            </div>


                            {/* Product Info */}
                            <div className="flex flex-wrap gap-4 mb-8">

                                <div className="bg-[#f5f5dc] border border-[#e6d8b6] rounded-2xl px-4 py-3 min-w-36">

                                    <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide mb-1">
                                        Packaging
                                    </p>

                                    <p className="text-sm md:text-base font-semibold text-[#2d3748]">
                                        {product.packaging_detail}
                                    </p>

                                </div>


                                <div className="bg-[#f5f5dc] border border-[#e6d8b6] rounded-2xl px-4 py-3 min-w-36">

                                    <p className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wide mb-1">
                                        HS Code
                                    </p>

                                    <p className="text-sm md:text-base font-semibold text-[#2d3748]">
                                        {product.hs_code}
                                    </p>

                                </div>

                            </div>


                            {/* Specifications */}
                            <div className="mb-8">

                                <h3 className="text-lg md:text-xl font-bold text-[#2d3748] mb-4">
                                    Product Specifications
                                </h3>

                                <div className="space-y-3">

                                    {
                                        product.specifications.map((list, index)=>(

                                            <div
                                                key={index}
                                                className="flex justify-between items-center border-b border-gray-200 pb-2"
                                            >

                                                <p className="text-sm md:text-base text-gray-600">
                                                    {list.title}
                                                </p>

                                                <p className="text-sm md:text-base font-semibold text-[#2d3748]">
                                                    {list.value}
                                                </p>

                                            </div>

                                        ))
                                    }

                                </div>

                            </div>


                            {/* Grades */}
                            <div className="mb-8">

                                <h3 className="text-lg md:text-xl font-bold text-[#2d3748] mb-4">
                                    Available Grades
                                </h3>

                                <div className="flex flex-wrap gap-3">

                                    {
                                        product.grades.map((list, index)=>(

                                            <div
                                                key={index}
                                                className="bg-[#f5f5dc] border border-[#d8cfa5] px-4 py-2 rounded-full text-sm md:text-base font-medium text-[#8b4513]"
                                            >

                                                {list.grade}

                                            </div>

                                        ))
                                    }

                                </div>

                            </div>


                            {/* Add To Cart Button */}
                            <div>

                                <button className="bg-teal-600 px-6 md:px-8 py-3 text-sm md:text-base text-white font-semibold rounded-xl shadow-md hover:bg-teal-700 transition-all duration-300 cursor-pointer">
                                    Add To Cart
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default ViewProduct;