import { useDispatch, useSelector } from "react-redux";

import { FiTrash2 } from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../Redux/CartSlice";

const Cart = () => {

    const dispatch = useDispatch();
    const cartItems = useSelector(
        (state) => state.cart.cartItems
    );

    const totalAmount = useSelector(
        (state) => state.cart.totalAmount
    );

    const handleIncrement =(product_id)=>{
        dispatch(incrementQuantity(product_id))
    }

    const handleDecrement =(product_id)=>{
        dispatch(decrementQuantity(product_id))
    }

    const handleremoveFromcart =(product_id)=>{
        dispatch(removeFromCart(product_id))
    }

    let totalItems = 0;
    cartItems.forEach((item) => {
        totalItems += item.quantity;
    });

    if (cartItems.length === 0) {

        return (

            <section className="bg-linear-to-b from-[#2d3748] via-[#d8d2ad] to-[#f5f5dc] pt-30 pb-10 min-h-screen">

                <div className="max-w-7xl mx-auto px-4">

                    <div className="bg-white rounded-xl shadow-xl border border-[#edf2ed] p-10 text-center">

                        <h2 className="text-3xl font-bold text-[#8b4513]"> Your Cart Is Empty</h2>

                    </div>

                </div>

            </section>

        );

    }

    return (

        <section className="bg-linear-to-b from-[#2d3748] via-[#d8d2ad] to-[#f5f5dc] pt-30 pb-10 min-h-screen">

            <div className="max-w-300 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-4">

                    {/* LEFT SIDE CARD*/}
                    <div className="space-y-4 max-w-300">

                        {
                            cartItems.map((item) => (

                                <div key={item.product_id} className=" bg-white rounded-xl shadow-xl border border-[#edf2ed] p-4">

                                    <div className="flex gap-4">

                                        {/* IMAGE */}
                                        <div className="bg-[#f8faf7] rounded-xl  flex justify-center items-center shrink-0">
                                            <img src={`http://localhost:9000/uploads/${item.image}`} alt={item.product_name} className="w-20 h-28 object-contain"/>
                                        </div>

                                        {/* DETAILS */}
                                        <div className="flex-1">

                                            <h2 className="text-lg font-bold text-[#2d3748] mb-3">
                                                {item.product_name}
                                            </h2>

                                            <div className="flex justify-between items-center">

                                                <p className="text-sm text-gray-600">
                                                    <span className="font-semibold text-[#2d3748]">Packaging :</span>{" "}
                                                    {item.packaging_detail}
                                                </p>

                                                <div className="flex">

                                                    <button onClick={() => {handleDecrement(item.product_id)} } className="w-9 h-9 bg-[#2f855a] text-white rounded-l-md cursor-pointer">
                                                        -
                                                    </button>

                                                    <div className="w-11 h-9 flex justify-center items-center border-y border-gray-300 font-medium">
                                                        {item.quantity}
                                                    </div>

                                                    <button onClick={() => {handleIncrement(item.product_id)} } className="w-9 h-9 bg-[#2f855a] text-white rounded-r-md cursor-pointer">
                                                        +
                                                    </button>

                                                </div>

                                            </div>

                                            <h3 className=" font-semibold text-[#8b4513] mt-2">₹ {Number(item.product_price).toLocaleString("en-IN")}</h3>

                                        </div>

                                    </div>

                                    {/* ACTIONS */}
                                    <div className="max-w-30 flex ml-auto mt-4 border border-gray-300 hover:border-red-300 rounded-md">

                                        <button onClick={() => {handleremoveFromcart( item.product_id)}} className="flex-1 flex justify-center items-center gap-2 py-3 text-sm font-semibold text-gray-700 hover:text-red-600 cursor-pointer">

                                            <FiTrash2 />
                                            Remove

                                        </button>

                                        {/* <div className="w-px bg-gray-200"></div> */}

                                        {/* <button className="flex-1 flex justify-center items-center gap-2 py-3 text-sm font-semibold text-gray-700 hover:text-[#2f855a] cursor-pointer">
                                            <HiOutlineLightningBolt />
                                            Buy Now
                                        </button> */}

                                    </div>

                                </div>

                            ))

                        }

                    </div>

                    {/* RIGHT SIDE */}
                    <div>
                        <div className="bg-white rounded-xl shadow-xl border border-[#edf2ed] p-4 max-w-full sticky top-30">

                            <table>
                                <thead>
                                    <tr>
                                        <th className="text-base font-semibold text-[#2d3748]"> Product</th>

                                        <th className="text-base font-semibold text-[#2d3748]">Quantity</th>

                                        <th className="text-base font-semibold text-[#2d3748]"> Price</th>
                                    </tr>
                                </thead>

                                {
                                    cartItems.map((item,index)=>(
                                        
                                        <tbody key={index}>
                                            <tr>
                                                <td className="">{item.product_name}</td>
                                                <td className="">{item.quantity}x</td>
                                                <td className="">{Number(item.product_price).toLocaleString("en-IN")}</td>
                                            </tr>
                                        </tbody>
                                    ))
                                }
                                <tfoot className="border-t">
                                    <tr>
                                        <td className=""></td>
                                        <td className="text-base font-semibold text-[#2d3748]">{totalItems}</td>
                                        <td className="text-base font-bold text-[#8b4513]">₹ {totalAmount.toLocaleString("en-IN")}</td>
                                    </tr>
                                </tfoot>
                            </table>
                            
                        </div>
                        <div className="bg-white rounded-xl shadow-xl border border-[#edf2ed] p-4 max-w-full sticky top-30">
                                
                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

};

export default Cart;