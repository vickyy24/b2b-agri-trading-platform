import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({

    // slice name
    name: "cart",

    // default state/initial state of data in this cart
    initialState: JSON.parse(localStorage.getItem("cart")) || {

        cartItems: [],
        totalAmount: 0
    },

    //functions to update cart data
    reducers: {

        addToCart: (state, action) => {

            //all data of product coming is being pushed into cartitmes[]
            state.cartItems.push({
                ...action.payload,
                quantity: 1
            });

            state.totalAmount += Number(action.payload.product_price);
            localStorage.setItem("cart",JSON.stringify(state));
        },

        incrementQuantity: (state, action) => {

            const existingProduct = state.cartItems.find(

                (item) => item.product_id === action.payload

            );

            if(existingProduct){

                existingProduct.quantity += 1;
                state.totalAmount += Number(existingProduct.product_price);
                localStorage.setItem("cart",JSON.stringify(state));

            }

        },

        decrementQuantity: (state, action) => {

            const existingProduct = state.cartItems.find(

                (item) => item.product_id === action.payload

            );

            if(existingProduct){

                if(existingProduct.quantity > 1){

                    existingProduct.quantity -= 1;
                    state.totalAmount -= Number(existingProduct.product_price);

                }
                else{

                    state.totalAmount -= Number(existingProduct.product_price);
                    state.cartItems = state.cartItems.filter(

                        (item) =>
                            item.product_id !== action.payload

                    );

                }

                localStorage.setItem( "cart", JSON.stringify(state) );

            }

        },

        removeFromCart: (state, action) => {

            const existingProduct = state.cartItems.find(

                (item) => item.product_id === action.payload

            );

            state.totalAmount -= (

                Number(existingProduct.product_price) * existingProduct.quantity

            );

            state.cartItems = state.cartItems.filter(

                (item) => item.product_id !== action.payload

            );

            localStorage.setItem( "cart",JSON.stringify(state));

        }

    }

});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart } = CartSlice.actions;

export default CartSlice.reducer;