import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchproduct = createAsyncThunk('productSlice/fetchproduct', async () => {
    const res = await fetch('https://fakestoreapi.com/products');
    const data = await res.json();
    return data;
})

export const fetchdetails = createAsyncThunk('productSlice/fetchdetails', async (id) => {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();
    return data;
})

export const productSlice = createSlice({
    name: 'product',
    initialState: [],
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchproduct.fulfilled, (state, action) => {
            // Add user to the state array
            return action.payload
        })
        builder.addCase(fetchdetails.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

// Action creators are generated for each case reducer function
export const { } = productSlice.actions

export default productSlice.reducer