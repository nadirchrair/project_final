import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const fetchProduct = createAsyncThunk('productSlice/fetchProduct', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})

export const fetchProductdetials = createAsyncThunk("productSlice/fetchProductdetials", async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
})


const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
        // standard reducer logic, with auto-generated action types per reducer
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchProduct.fulfilled, (state, action) => {
            // Add user to the state array
            return action.payload
        })
        builder.addCase(fetchProductdetials.fulfilled, (state, action) => {
            return action.payload
        })

    },
})


export const { } = productSlice.actions;
export default productSlice.reducer;