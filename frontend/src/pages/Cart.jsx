import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { FiTrash2, FiShoppingBag, FiArrowRight } from "react-icons/fi";
import { incrementQuantity, decrementQuantity, removeFromCart } from "../Redux/CartSlice";
import commoditiesBgImage from "../assets/commoditiesBgImage.jpg";

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

            <section className="relative min-h-screen overflow-hidden bg-[#f5f7f2] px-4 pb-12 pt-32">

                <div className="pointer-events-none absolute inset-x-0 top-0 h-32 overflow-hidden">
                    <img src={commoditiesBgImage} alt="" className="h-full w-full object-cover object-center brightness-50 saturate-75" />
                    <div className="absolute inset-0 bg-[#26372e]/35" />
                </div>

                <div className="mx-auto max-w-3xl rounded-3xl border border-[#e4e9df] bg-white px-6 py-16 text-center shadow-sm">

                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#edf5ee] text-3xl text-[#2f855a]">
                        <FiShoppingBag />
                    </div>

                    <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#2f855a]">Your selection</p>
                    <h2 className="text-3xl font-bold text-[#26372e]">Your cart is empty</h2>
                    <p className="mx-auto mt-3 max-w-md text-gray-600">Browse our commodities and add the products and quantities you need for your business order.</p>
                    <Link to="/commodities" className="mt-7 inline-flex items-center justify-center rounded-xl bg-[#2f855a] px-6 py-3 font-semibold text-white transition hover:bg-[#256c49]">
                        Explore commodities
                    </Link>

                </div>

            </section>

        );

    }

    return (

        <section className="relative min-h-screen overflow-hidden bg-[#f5f7f2] px-4 pb-10 pt-28 text-[#253449] sm:px-6">

            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 overflow-hidden">
                <img src={commoditiesBgImage} alt="" className="h-full w-full object-cover object-center brightness-50 saturate-75" />
                <div className="absolute inset-0 bg-[#26372e]/35" />
            </div>

            <div className="mx-auto max-w-[1440px]">

                <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
                    <div>
                        <p className="mb-1 text-sm font-semibold uppercase tracking-[0.16em] text-[#2f855a]">Bulk order basket</p>
                        <h1 className="text-3xl font-bold text-[#26372e] sm:text-4xl">Your Cart</h1>
                        <p className="mt-2 text-gray-600">Review products and quantities before placing your order.</p>
                    </div>
                    <div className="rounded-full border border-[#dce8dc] bg-white px-4 py-2 text-sm font-semibold text-[#2f855a] shadow-sm">
                        {totalItems} {totalItems === 1 ? "item" : "items"} · {cartItems.length} products
                    </div>
                </div>

                <div className="grid grid-cols-1 items-start gap-6 md:max-lg:grid-cols-[minmax(0,1fr)_minmax(250px,0.85fr)] lg:grid-cols-[minmax(0,1.7fr)_minmax(360px,0.9fr)] max-lg:gap-4">

                    {/* LEFT SIDE: CART PRODUCTS */}
                    <div className="space-y-4">

                        {cartItems.map((item) => (

                            <article key={item.product_id} className="rounded-2xl border border-[#e5e9e2] bg-white p-4 shadow-[0_5px_22px_rgba(39,58,44,0.06)] transition-shadow hover:shadow-[0_10px_28px_rgba(39,58,44,0.10)] sm:p-5">

                                <div className="flex flex-row items-start gap-3 sm:items-center sm:gap-4">

                                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#f5f8f4] p-2 sm:h-32 sm:w-32 sm:p-3">
                                        <img src={`http://localhost:9000/uploads/${item.image}`} alt={item.product_name} className="h-full w-full object-contain" />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex flex-wrap items-start justify-between gap-3">
                                            <div>
                                                <h2 className="text-xl font-bold text-[#26372e]">{item.product_name}</h2>
                                                <p className="mt-1 text-sm text-gray-600">{item.category_name || "Agricultural commodity"}</p>
                                            </div>
                                            <button type="button" onClick={() => {handleremoveFromcart(item.product_id)}} aria-label={`Remove ${item.product_name} from cart`} className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-gray-500 transition hover:bg-red-50 hover:text-red-600">
                                                <FiTrash2 /> Remove
                                            </button>
                                        </div>

                                        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
                                            <div className="space-y-2">
                                                <p className="text-sm text-gray-600"><span className="font-semibold text-[#34483c]">Packaging:</span> {item.packaging_detail}</p>
                                                <p className="text-lg font-bold text-[#8b4513]">₹ {Number(item.product_price).toLocaleString("en-IN")} <span className="text-xs font-medium text-gray-500">/ unit</span></p>
                                            </div>

                                            <div className="inline-flex h-10 items-center overflow-hidden rounded-xl border border-[#dce5dc] bg-white">
                                                <button type="button" aria-label={`Decrease ${item.product_name} quantity`} onClick={() => {handleDecrement(item.product_id)}} className="h-full w-11 bg-[#edf5ee] font-bold text-[#2f855a] transition hover:bg-[#dcecdf]">−</button>
                                                <span className="flex h-full min-w-12 items-center justify-center border-x border-[#e3e9e3] px-3 font-semibold">{item.quantity}</span>
                                                <button type="button" aria-label={`Increase ${item.product_name} quantity`} onClick={() => {handleIncrement(item.product_id)}} className="h-full w-11 bg-[#edf5ee] font-bold text-[#2f855a] transition hover:bg-[#dcecdf]">+</button>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </article>

                        ))}

                    </div>

                    {/* RIGHT SIDE: STAYS VISIBLE WHILE THE PRODUCT LIST SCROLLS */}
                    <aside className="lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:min-h-[620px]">

                        <div className="flex max-h-[calc(100vh-2rem)] flex-col overflow-hidden rounded-2xl border border-[#e3e9e1] bg-white shadow-[0_12px_36px_rgba(39,58,44,0.10)] lg:h-full lg:min-h-[620px]">

                            <div className="border-b border-[#edf0ea] px-5 py-4 sm:px-6">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf5ee] text-lg text-[#2f855a]"><FiShoppingBag /></div>
                                    <div>
                                        <h2 className="text-lg font-bold text-[#26372e]">Order summary</h2>
                                        <p className="text-sm text-gray-500">{totalItems} units across {cartItems.length} products</p>
                                    </div>
                                </div>
                            </div>

                            <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4 sm:px-6">
                                <div className="space-y-3">
                                    {cartItems.map((item) => (
                                        <div key={item.product_id} className="flex items-start justify-between gap-3 text-sm">
                                            <div className="min-w-0">
                                                <p className="truncate font-semibold text-[#34483c]">{item.product_name}</p>
                                                <p className="mt-0.5 text-gray-500">Qty {item.quantity} × ₹ {Number(item.product_price).toLocaleString("en-IN")}</p>
                                            </div>
                                            <p className="shrink-0 font-semibold text-[#26372e]">₹ {(Number(item.product_price) * item.quantity).toLocaleString("en-IN")}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="my-5 border-t border-dashed border-[#dce3d9]"></div>

                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between text-gray-600"><span>Items subtotal</span><span>₹ {totalAmount.toLocaleString("en-IN")}</span></div>
                                    <div className="flex justify-between text-gray-600"><span>Shipping & taxes</span><span className="text-right text-xs">Confirmed with order</span></div>
                                    <div className="flex items-end justify-between border-t border-[#edf0ea] pt-3">
                                        <div><p className="font-bold text-[#26372e]">Estimated total</p><p className="text-xs text-gray-500">Final charges confirmed before payment</p></div>
                                        <p className="text-2xl font-extrabold text-[#8b4513]">₹ {totalAmount.toLocaleString("en-IN")}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="border-t border-[#edf0ea] bg-white px-5 py-4 sm:px-6">
                                <Link to="/checkout" className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#8b4513] px-4 py-3.5 text-base font-bold text-white shadow-md transition hover:bg-[#71370f]">
                                    Proceed to checkout <FiArrowRight />
                                </Link>
                            </div>

                        </div>

                    </aside>

                </div>

            </div>

        </section>

    );

};

export default Cart;
