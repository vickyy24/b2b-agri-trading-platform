import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FiArrowLeft, FiBriefcase, FiCheck, FiCreditCard, FiLock, FiSmartphone } from "react-icons/fi";
import { SiGooglepay, SiPhonepe, SiPaytm, SiVisa, SiMastercard } from "react-icons/si";
import commoditiesBgImage from "../assets/commoditiesBgImage.jpg";

const Checkout = () => {

    const cartItems = useSelector(
        (state) => state.cart.cartItems
    );

    const totalAmount = useSelector(
        (state) => state.cart.totalAmount
    );

    const [selectedMethod, setSelectedMethod] = useState("");

    let totalItems = 0;
    cartItems.forEach((item) => {
        totalItems += item.quantity;
    });

    const paymentMethods = [
        { id: "gpay", name: "Google Pay", icon: <SiGooglepay className="text-2xl text-[#4285F4]" /> },
        { id: "phonepe", name: "PhonePe", icon: <SiPhonepe className="text-2xl text-[#5f259f]" /> },
        { id: "paytm", name: "Paytm", icon: <SiPaytm className="text-2xl text-[#00baf2]" /> },
        { id: "upi", name: "Other UPI apps", icon: <FiSmartphone className="text-2xl text-[#2f855a]" /> },
        { id: "card", name: "Credit or debit card", icon: <span className="flex items-center gap-1 text-xl"><SiVisa className="text-[#1a1f71]" /><SiMastercard className="text-[#eb001b]" /></span> },
        { id: "netbanking", name: "Net banking", icon: <FiCreditCard className="text-2xl text-[#2f855a]" /> },
        { id: "banktransfer", name: "Business bank transfer", detail: "NEFT / RTGS", icon: <FiBriefcase className="text-2xl text-[#2f855a]" /> }
    ];

    if (cartItems.length === 0) {
        return (
            <section className="relative min-h-screen overflow-hidden bg-[#f5f7f2] px-4 pb-12 pt-24">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-24 overflow-hidden">
                    <img src={commoditiesBgImage} alt="" className="h-full w-full object-cover object-center brightness-50 saturate-75" />
                    <div className="absolute inset-0 bg-[#26372e]/35" />
                </div>
                <div className="mx-auto max-w-2xl rounded-2xl border border-[#e4e9df] bg-white p-10 text-center shadow-sm">
                    <h1 className="text-2xl font-bold text-[#26372e]">Your cart is empty</h1>
                    <p className="mt-2 text-gray-600">Add products before continuing to checkout.</p>
                    <Link to="/commodities" className="mt-6 inline-flex rounded-xl bg-[#2f855a] px-5 py-3 font-semibold text-white">Browse commodities</Link>
                </div>
            </section>
        );
    }

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#f5f7f2] px-4 pb-12 pt-24 text-[#253449] sm:px-6">

            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 overflow-hidden">
                <img src={commoditiesBgImage} alt="" className="h-full w-full object-cover object-center brightness-50 saturate-75" />
                <div className="absolute inset-0 bg-[#26372e]/35" />
            </div>

            <div className="relative mx-auto max-w-7xl">

                <Link to="/cart" className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#dce5d9] bg-white px-4 py-2 text-sm font-semibold text-[#496052] shadow-sm transition hover:border-[#2f855a] hover:text-[#2f855a]">
                    <FiArrowLeft /> Back to cart
                </Link>

                <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
                    <div>
                        <p className="mb-1 text-xs font-bold uppercase tracking-[0.16em] text-[#2f855a]">Secure checkout</p>
                        <h1 className="text-3xl font-bold text-[#26372e] sm:text-4xl">Delivery & payment</h1>
                        <p className="mt-2 text-sm text-gray-600">Choose a payment option for your bulk order.</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-[#e1e8df] bg-white px-4 py-2 text-sm font-semibold text-[#5c6b60]">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2f855a] text-xs text-white">1</span> Cart
                        <span className="text-gray-300">/</span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#8b4513] text-xs text-white">2</span> Checkout
                    </div>
                </div>

                <div className="grid items-start gap-6 md:max-lg:grid-cols-[minmax(0,1.25fr)_minmax(250px,0.85fr)] lg:grid-cols-[minmax(0,1.45fr)_minmax(330px,0.75fr)] max-lg:gap-4">

                    <div className="space-y-5">

                        <section className="rounded-2xl border border-[#e5e9e2] bg-white p-5 shadow-[0_5px_22px_rgba(39,58,44,0.06)] sm:p-6">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf5ee] text-[#2f855a]"><FiBriefcase /></span>
                                <div>
                                    <h2 className="text-lg font-bold text-[#26372e]">Business order</h2>
                                    <p className="text-sm text-gray-500">{totalItems} units · {cartItems.length} products</p>
                                </div>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                                <label className="text-sm font-semibold text-[#435348]">Company or business name
                                    <input type="text" placeholder="Enter business name" className="mt-1.5 w-full rounded-lg border border-[#dfe6dc] bg-white px-3 py-2.5 font-normal outline-none transition focus:border-[#2f855a] focus:ring-2 focus:ring-[#2f855a]/10" />
                                </label>
                                <label className="text-sm font-semibold text-[#435348]">Contact person
                                    <input type="text" placeholder="Full name" className="mt-1.5 w-full rounded-lg border border-[#dfe6dc] bg-white px-3 py-2.5 font-normal outline-none transition focus:border-[#2f855a] focus:ring-2 focus:ring-[#2f855a]/10" />
                                </label>
                                <label className="text-sm font-semibold text-[#435348]">Mobile number
                                    <input type="tel" placeholder="Enter mobile number" className="mt-1.5 w-full rounded-lg border border-[#dfe6dc] bg-white px-3 py-2.5 font-normal outline-none transition focus:border-[#2f855a] focus:ring-2 focus:ring-[#2f855a]/10" />
                                </label>
                                <label className="text-sm font-semibold text-[#435348]">Email address
                                    <input type="email" placeholder="Enter email address" className="mt-1.5 w-full rounded-lg border border-[#dfe6dc] bg-white px-3 py-2.5 font-normal outline-none transition focus:border-[#2f855a] focus:ring-2 focus:ring-[#2f855a]/10" />
                                </label>
                                <label className="text-sm font-semibold text-[#435348] sm:col-span-2">Delivery address
                                    <textarea rows="2" placeholder="Enter delivery address" className="mt-1.5 w-full resize-y rounded-lg border border-[#dfe6dc] bg-white px-3 py-2.5 font-normal outline-none transition focus:border-[#2f855a] focus:ring-2 focus:ring-[#2f855a]/10" />
                                </label>
                            </div>
                        </section>

                        <section className="rounded-2xl border border-[#e5e9e2] bg-white p-5 shadow-[0_5px_22px_rgba(39,58,44,0.06)] sm:p-6">
                            <div className="mb-1 flex items-center gap-3">
                                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#edf5ee] text-[#2f855a]"><FiCreditCard /></span>
                                <div>
                                    <h2 className="text-lg font-bold text-[#26372e]">Select a payment method</h2>
                                    <p className="text-sm text-gray-500">Choose how you would like to pay</p>
                                </div>
                            </div>

                            <h3 className="mb-2 mt-5 text-xs font-bold uppercase tracking-[0.12em] text-gray-500">UPI apps</h3>
                            <div className="grid grid-cols-2 gap-2">
                                {paymentMethods.slice(0, 4).map((method) => (
                                    <button key={method.id} type="button" aria-pressed={selectedMethod === method.id} onClick={() => setSelectedMethod(method.id)} className={`flex min-h-14 items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${selectedMethod === method.id ? "border-[#2f855a] bg-[#f1f8f2] ring-2 ring-[#2f855a]/10" : "border-[#e3e8e1] bg-white hover:border-[#a8c8ae] hover:bg-[#fbfdf9]"}`}>
                                        <span className="flex h-8 w-8 items-center justify-center">{method.icon}</span>
                                        <span className="flex-1 text-sm font-semibold text-[#34483c]">{method.name}</span>
                                        <span className={`flex h-5 w-5 items-center justify-center rounded-full border ${selectedMethod === method.id ? "border-[#2f855a] bg-[#2f855a] text-white" : "border-[#cbd5ca] text-transparent"}`}><FiCheck className="text-xs" /></span>
                                    </button>
                                ))}
                            </div>

                            <h3 className="mb-2 mt-5 text-xs font-bold uppercase tracking-[0.12em] text-gray-500">Other payment methods</h3>
                            <div className="space-y-2">
                                {paymentMethods.slice(4).map((method) => (
                                    <button key={method.id} type="button" aria-pressed={selectedMethod === method.id} onClick={() => setSelectedMethod(method.id)} className={`flex min-h-14 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left transition ${selectedMethod === method.id ? "border-[#2f855a] bg-[#f1f8f2] ring-2 ring-[#2f855a]/10" : "border-[#e3e8e1] bg-white hover:border-[#a8c8ae] hover:bg-[#fbfdf9]"}`}>
                                        <span className="flex h-8 w-8 items-center justify-center">{method.icon}</span>
                                        <span className="flex-1 text-sm font-semibold text-[#34483c]">{method.name}<span className="ml-2 font-normal text-gray-500">{method.detail}</span></span>
                                        <span className={`flex h-5 w-5 items-center justify-center rounded-full border ${selectedMethod === method.id ? "border-[#2f855a] bg-[#2f855a] text-white" : "border-[#cbd5ca] text-transparent"}`}><FiCheck className="text-xs" /></span>
                                    </button>
                                ))}
                            </div>

                            <p className="mt-4 flex items-center gap-2 text-xs text-gray-500"><FiLock className="shrink-0 text-[#2f855a]" /> Payment choices are a visual preview; payment processing is not connected.</p>
                        </section>

                    </div>

                    <aside className="lg:sticky lg:top-4">
                        <div className="overflow-hidden rounded-2xl border border-[#e3e9e1] bg-white shadow-[0_12px_36px_rgba(39,58,44,0.10)]">
                            <div className="border-b border-[#edf0ea] px-5 py-4">
                                <h2 className="text-lg font-bold text-[#26372e]">Order summary</h2>
                                <p className="text-sm text-gray-500">{totalItems} units across {cartItems.length} products</p>
                            </div>

                            <div className="max-h-72 space-y-4 overflow-y-auto px-5 py-4">
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

                            <div className="border-t border-[#edf0ea] px-5 py-4">
                                <div className="mb-2 flex justify-between text-sm text-gray-600"><span>Items subtotal</span><span>₹ {totalAmount.toLocaleString("en-IN")}</span></div>
                                <div className="mb-3 flex justify-between text-sm text-gray-600"><span>Shipping & taxes</span><span>Confirmed after address</span></div>
                                <div className="flex items-end justify-between border-t border-[#edf0ea] pt-3">
                                    <span className="font-bold text-[#26372e]">Order total</span>
                                    <span className="text-2xl font-extrabold text-[#8b4513]">₹ {totalAmount.toLocaleString("en-IN")}</span>
                                </div>
                                <button type="button" disabled className="mt-5 w-full cursor-not-allowed rounded-xl bg-[#8b4513] px-4 py-3.5 font-bold text-white opacity-60">
                                    Place order
                                </button>
                                <p className="mt-2 text-center text-xs leading-5 text-gray-500">Order submission will be enabled when checkout is connected.</p>
                            </div>
                        </div>
                    </aside>

                </div>

            </div>

        </section>
    );
};

export default Checkout;
