import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addToCart, decrementQuantity, incrementQuantity } from "../Redux/CartSlice";
import commoditiesBgImage from "../assets/commoditiesBgImage.jpg";

const ViewProduct = () => {

    const params = useParams();
    const dispatch = useDispatch();

    const cartItems = useSelector(
        (state) => state.cart.cartItems
    );

    const [productdata, setProductdata] = useState(null);
    const [productError, setProductError] = useState("");

    const cartProduct = cartItems.find(
        (item) => item.product_id === Number(params.productid)
    );

    useEffect(() => {

        window.scrollTo(0, 0);
        getProductById();

    }, [params.productid]);

    const getProductById = async () => {

        try{
            setProductError("");

            const response = await axios({
                url: `http://localhost:9000/getproduct/${params.productid}`,
                method: "GET"
            });

            setProductdata(response.data);
        }
        catch(error){
            console.log(error.message);
            setProductError("We couldn't load this product. Please try again.");
        }

    }

    function handleIncrement(){
        dispatch(incrementQuantity(productdata.product_id));
    }

    function handleAddToCart(){
        dispatch(addToCart(productdata));
    }

    function handleDecrement(){
        dispatch(decrementQuantity(productdata.product_id));
    }

    if(productdata === null){

        return(

            <section className="min-h-screen bg-[#f4f7f2] pt-32 pb-16 flex justify-center items-center px-4">
                <div className="w-full max-w-3xl rounded-3xl border border-[#e3e9df] bg-white p-10 text-center shadow-lg">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#2f855a]">
                        Padmayog Agrotech
                    </p>
                    <h1 className="text-xl md:text-2xl font-semibold text-[#2d3748]">
                        {productError || "Loading product details..."}
                    </h1>
                    {productError &&
                        <button onClick={getProductById} className="mt-6 rounded-xl bg-[#2f855a] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#276749]">
                            Try again
                        </button>
                    }
                </div>
            </section>

        )

    }
    return(

        <section className="relative min-h-screen overflow-hidden bg-[#f4f7f2] pt-[104px] pb-12">

            <div className="pointer-events-none absolute inset-x-0 top-0 h-24 overflow-hidden">
                <img src={commoditiesBgImage} alt="" className="h-full w-full object-cover object-center brightness-50 saturate-75" />
                <div className="absolute inset-0 bg-[#26372e]/35" />
            </div>

            <div className="pointer-events-none absolute -right-32 top-36 h-80 w-80 rounded-full bg-[#e6d8b6]/40 blur-3xl" />
            <div className="pointer-events-none absolute -left-32 bottom-16 h-80 w-80 rounded-full bg-[#2f855a]/10 blur-3xl" />

            <div className="relative mx-auto max-w-7xl px-4 md:px-6">

                <div className="overflow-hidden rounded-[2rem] border border-white bg-white shadow-[0_24px_70px_-35px_rgba(45,55,72,0.42)]">

                    <div className="flex flex-wrap items-center justify-between gap-3 px-5 pt-4 pb-3 md:px-7 lg:px-8">
                        <Link to="/commodities" className="inline-flex items-center gap-2 rounded-full border border-[#dce5d9] bg-white/80 px-4 py-2 text-sm font-semibold text-[#496052] shadow-sm transition-all hover:-translate-x-0.5 hover:border-[#2f855a] hover:text-[#2f855a]">
                            <span aria-hidden="true">←</span>
                            Back to commodities
                        </Link>

                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#708075]">
                            Product details
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-0 lg:grid-cols-[0.95fr_1.05fr]">

                        {/* Product Image Section */}
                        <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[radial-gradient(ellipse_at_52%_42%,#ffffff_0%,#f5f7ef_42%,#eaf1e9_100%)] p-5 md:min-h-[430px] md:p-7">

                            <div className="pointer-events-none absolute left-1/2 top-[44%] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e6d8b6]/50 blur-2xl md:h-80 md:w-80" />
                            <div className="pointer-events-none absolute left-1/2 top-[44%] h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2f855a]/15 bg-white/20 shadow-[0_0_0_18px_rgba(47,133,90,0.025),inset_0_0_40px_rgba(47,133,90,0.06)] md:h-72 md:w-72" />
                            <div className="pointer-events-none absolute bottom-[13%] left-1/2 h-8 w-52 -translate-x-1/2 rounded-[50%] bg-[#2d3748]/15 blur-xl md:w-64" />

                            <div className="absolute left-5 top-5 z-20 rounded-full border border-white/80 bg-white/85 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#2f855a] shadow-sm backdrop-blur">
                                Premium quality
                            </div>

                            <img
                                src={`http://localhost:9000/uploads/${productdata.image}`}
                                alt={productdata.product_name}
                                className="relative z-10 h-[280px] w-full max-w-md object-contain drop-shadow-[0_22px_26px_rgba(45,55,72,0.22)] transition-transform duration-500 hover:scale-[1.025] md:h-[370px] md:-translate-y-14"
                            />

                        </div>

                        {/* Product Details Section */}
                        <div className="flex flex-col p-5 md:p-7 lg:p-8">

                            <div className="mb-5">
                                <p className="mb-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.14em] text-[#2f855a] md:text-xs">
                                    <span className="h-2 w-2 rounded-full bg-[#2f855a]" />
                                    Premium agricultural commodity
                                </p>

                                <h1 className="text-3xl font-bold leading-tight text-[#2d3748] md:text-4xl">
                                    {productdata.product_name}
                                </h1>

                                <p className="mt-2 max-w-xl text-sm leading-6 text-[#6b7280] md:text-[15px]">
                                    Quality specifications and available grades for this commodity.
                                </p>
                            </div>

                            <div className="mb-5 flex flex-wrap items-center justify-between gap-4 rounded-xl border border-[#eee5cf] bg-[#fbf9ef] p-4">

                                <div>
                                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#778071]">
                                        Price
                                    </p>
                                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                        <h2 className="text-2xl font-bold text-[#8b4513] md:text-3xl">
                                            ₹ {Number(productdata.product_price).toLocaleString("en-IN")}
                                        </h2>
                                        <p className="text-xs text-gray-500">
                                            Incl. all taxes
                                        </p>
                                    </div>
                                </div>

                                {
                                    cartProduct
                                    ?
                                    <div className="flex h-11 w-full max-w-44 overflow-hidden rounded-lg shadow-sm sm:w-44">
                                        <button
                                            onClick={handleDecrement}
                                            aria-label={`Decrease ${productdata.product_name} quantity`}
                                            className="w-full rounded-l-md bg-green-800 text-sm font-semibold text-white duration-300 hover:bg-green-700 md:text-base"
                                        >
                                            −
                                        </button>
                                        <div aria-live="polite" aria-label={`Quantity ${cartProduct.quantity}`} className="flex w-full items-center justify-center bg-green-800 text-xs font-semibold text-white md:text-sm">
                                            {cartProduct.quantity}
                                        </div>
                                        <button
                                            onClick={handleIncrement}
                                            aria-label={`Increase ${productdata.product_name} quantity`}
                                            className="w-full rounded-r-md bg-green-800 text-sm font-semibold text-white duration-300 hover:bg-green-700 md:text-base"
                                        >
                                            +
                                        </button>
                                    </div>
                                    :
                                    <button onClick={handleAddToCart} className="h-11 w-full max-w-44 rounded-lg bg-green-800 px-4 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-green-700 sm:w-44">
                                        Add To Cart
                                    </button>
                                }

                            </div>

                            <div className="mb-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

                                {/* Packaging Details */}
                                <div className="rounded-2xl border border-[#e6e9dc] bg-[#f8faf7] p-4">
                                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#778071]">
                                        Packaging
                                    </p>
                                    <p className="font-semibold text-[#2d3748]">
                                        {productdata.packaging_detail}
                                    </p>
                                </div>

                                {/* HS Code */}
                                <div className="rounded-2xl border border-[#e6e9dc] bg-[#f8faf7] p-4">
                                    <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#778071]">
                                        HS Code
                                    </p>
                                    <p className="font-semibold text-[#2d3748]">
                                        {productdata.hs_code}
                                    </p>
                                </div>

                            </div>

                            {/* Specifications */}
                            <div className="mb-5">

                                <div className="mb-4 flex items-end justify-between gap-3">
                                    <div>
                                        <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#2f855a]">Product profile</p>
                                        <h3 className="text-lg font-bold text-[#2d3748] md:text-xl">
                                            Product specifications
                                        </h3>
                                    </div>
                                    <p className="text-xs text-[#778071]">
                                        {productdata.specifications.length} details
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                                    {
                                        productdata.specifications.map((list, index)=>(
                                            <div key={index} className="rounded-xl border border-[#e8ece5] bg-white p-3.5 transition-all hover:border-[#b7d4c0] hover:shadow-sm">
                                                <p className="text-sm text-[#778071]">{list.title}</p>
                                                <p className="mt-2 text-base font-bold text-[#2d3748]">{list.value}</p>
                                            </div>
                                        ))
                                    }
                                </div>

                            </div>

                            {/* Grades */}
                            <div className="mt-auto">
                                <div className="mb-4">
                                    <p className="mb-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#2f855a]">Quality options</p>
                                    <h3 className="text-lg font-bold text-[#2d3748] md:text-xl">
                                        Available grades
                                    </h3>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {
                                        productdata.grades.map((list, index)=>(
                                            <div key={index} className="rounded-full border border-[#e6d8b6] bg-[#fbf9ef] px-4 py-2 text-sm font-semibold text-[#8b4513] shadow-sm">
                                                {list.grade}
                                            </div>
                                        ))
                                    }
                                </div>

                                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#edf0eb] pt-4">
                                    <p className="text-sm text-[#6b7280]">Need a different quantity or grade?</p>
                                    <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-[#8b4513] px-5 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:bg-[#71370f] hover:shadow-md">
                                        Contact our team
                                        <span aria-hidden="true">↗</span>
                                    </Link>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    )

}

export default ViewProduct;
