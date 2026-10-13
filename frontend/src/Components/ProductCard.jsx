import { Link } from "react-router-dom";

const ProductCard = ({ list, cartProduct, handleAddToCart, handleIncrement, handleDecrement }) => {

    return(

        <div className="p-4 md:p-6 h-full border border-gray-200 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300">

            {/* Product Image */}
            <div className="flex justify-center gap-18 mb-2 h-75 border-b border-gray-300">
                <img src={`http://localhost:9000/uploads/${list.image}`} alt="productImage" className="w-60 h-75"/>
            </div>

            {/* Product Name */}
            <h3 className="text-lg md:text-xl font-bold text-[#8b4513] mb-2 text-center">
                {list.product_name}
            </h3>

            {/* Product Price & Packaging */}
            <div className="flex gap-4 justify-center">

                <p className="flex flex-col mb-4">

                    <span className="text-black text-base md:text-lg font-bold">
                        ₹ {Number(list.product_price).toLocaleString("en-IN")}
                    </span>

                    <span className="text-gray-600 text-[8px] md:text-xs">
                        (Incl. of all taxes)
                    </span>

                </p>

                <div className="mb-4">

                    <h4 className="text-[#2f855a] text-sm md:text-base font-semibold">
                        Packaging
                    </h4>

                    <div className="text-xs md:text-sm text-gray-600">
                        {list.packaging_detail}
                    </div>

                </div>

            </div>

            {/* Product Buttons */}
            <div className="flex gap-4">

                <Link to={`/view-product/${list.product_id}`} className="bg-[#f5f5dc] border border-[#8b4513] px-2 md:px-4 py-1 md:py-2 text-xs md:text-sm text-[#8b4513] font-semibold rounded-md shadow-sm hover:bg-[#8b4513] hover:text-white hover:border-[#8b4513] hover:shadow-lg transition-all duration-300 cursor-pointer">
                    View Product
                </Link>

                {
                    cartProduct
                    ?
                    <div className="flex flex-1 w-full shadow-lg">

                        <button onClick={()=>{handleDecrement(list.product_id)}} className="w-full bg-green-800 hover:bg-green-700 text-sm md:text-base text-white font-semibold rounded-l-md duration-300 cursor-pointer">
                            -
                        </button>
                        <div className="flex w-full justify-center items-center text-xs md:text-sm text-white font-semibold bg-green-800">
                            {cartProduct.quantity}
                        </div>
                        <button onClick={()=>{handleIncrement(list.product_id)}} className="w-full bg-green-800 hover:bg-green-700 text-sm md:text-base text-white font-semibold rounded-r-md duration-300 cursor-pointer">
                            +
                        </button>

                    </div>
                    :
                    <button onClick={()=>{handleAddToCart(list)}} className="flex-1 w-full bg-green-800 hover:bg-green-700 text-sm md:text-base text-white font-semibold rounded-md shadow-lg duration-300 cursor-pointer">
                        Add To Cart
                    </button>
                }

            </div>

        </div>

    )
}

export default ProductCard;
