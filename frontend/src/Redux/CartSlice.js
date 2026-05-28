import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({

    // slice name
    name: "cart",

    // default state/initial state of data in this cart
    initialState: {

        cartItems: []

    },

    //functions to update cart data
    reducers: {

        addToCart: (state, action) => {

            const existingProduct = state.cartItems.find(

                (item) => item.product_id === action.payload.product_id

            );

            if(existingProduct){

                existingProduct.quantity += 1;

            }
            else{

                //all data of product coming is being pushed into cartitmes[]
                state.cartItems.push({

                    ...action.payload,

                    quantity: 1

                });

            }

        },

        incrementQuantity: (state, action) => {

            const existingProduct = state.cartItems.find(

                (item) => item.product_id === action.payload

            );

            if(existingProduct){

                existingProduct.quantity += 1;

            }

        },

        decrementQuantity: (state, action) => {

            const existingProduct = state.cartItems.find(

                (item) => item.product_id === action.payload

            );

            if(existingProduct){

                if(existingProduct.quantity > 1){

                    existingProduct.quantity -= 1;

                }
                else{

                    state.cartItems = state.cartItems.filter(

                        (item) =>
                            item.product_id !== action.payload

                    );

                }

            }

        },

        removeFromCart: (state, action) => {

            state.cartItems = state.cartItems.filter(

                (item) => item.product_id !== action.payload

            );

        }

    }

});


export const {

    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart

} = CartSlice.actions;


export default CartSlice.reducer;