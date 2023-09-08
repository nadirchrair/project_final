import { createSlice } from '@reduxjs/toolkit'



const cartSlice = createSlice({
    initialState: [],
    name: "cart",
    reducers: {
        addTocart: (state, action) => {
            //  const productId = action.payload;
            // search about my product
            const findProduct = state.find((item) => item.id === action.payload.id);
            console.log(findProduct);
            //condition
            if (findProduct) {
                findProduct.qunatity += 1;
            }
            else {
                const clone = { ...action.payload, qunatity: 1 };
                state.push(clone);
                //  localStorage.setItem('cart', JSON.stringify(state));
            }
        },
        deletefromCart: (state, action) => {
            return state.filter((produit) => produit.id !== action.payload.id)
        },
        removeALL: (state, action) => {
            return []
        },
    },
    extraReducers: {}
})
export const { addTocart, deletefromCart, removeALL } = cartSlice.actions;
export default cartSlice.reducer;