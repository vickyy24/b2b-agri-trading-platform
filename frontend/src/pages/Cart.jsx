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
                    <div className="flex flex-col gap-4 sticky top-30 self-start">
                        
                        <div className="bg-white rounded-xl shadow-xl border border-[#edf2ed] p-4 max-w-full">

                            <h5 className="text-lg text-[#8b4513] font-semibold mb-2">Order Details:</h5>

                            <table className="w-full table-fixed">
                                <thead>
                                    <tr>
                                        <th className="w-full border border-gray-300 px-2 py-3 text-left text-lg font-semibold text-[#2f855a]">
                                            Product
                                        </th>
                                        <th className="w-full border border-gray-300 px-2 py-3 text-left text-lg font-semibold text-[#2f855a]">
                                            Quantity
                                        </th>
                                        <th className="w-full border border-gray-300 px-2 py-3 text-left text-lg font-semibold text-[#2f855a]">
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cartItems.map((item, index) => (
                                            <tr key={index}>

                                                <td className="w-full border border-gray-300 text-gray-700 px-2 py-3 text-left">{item.product_name}</td>
                                                <td className="w-full border border-gray-300 text-gray-700 px-2 py-3 text-left">{item.quantity}x</td>
                                                <td className="w-full border border-gray-300 text-gray-700 px-2 py-3 text-left">₹ {Number(item.product_price).toLocaleString("en-IN")}</td>
                                            </tr>

                                        ))
                                    }

                                </tbody>
                                <tfoot>

                                    <tr>
                                        <td className="w-full px-2 py-3 text-left"></td>
                                        <td className="w-full border border-gray-300 px-2 py-3 text-right text-base font-bold text-[#2d3748]">
                                            Total :{/* {totalItems} */}
                                        </td>
                                        <td className="w-full border border-gray-300 px-2 py-3 text-left text-base font-semibold text-[#8b4513]">
                                            ₹ {totalAmount.toLocaleString("en-IN")}
                                        </td>
                                    </tr>

                                </tfoot>

                            </table>
                            
                        </div>

                        <button type="button" className="w-full border border-[#8b4513] bg-white p-2 flex justify-center items-center gap-2 text-lg text-[#8b4513] font-semibold rounded-xl hover:bg-[#8b4513] hover:text-white shadow-xl cursor-pointer"  >
                            Place Order <HiOutlineLightningBolt />
                        </button>

                    </div>
                </div>

            </div>

        </section>

    );

};

export default Cart;