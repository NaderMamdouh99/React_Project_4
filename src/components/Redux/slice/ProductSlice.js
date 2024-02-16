import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    productinchart: [],
    loading: false,
    error: "",
}


// TODO: Get All Products from API 
export const getAllProductsFetch = createAsyncThunk("getAllProducts", async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const { data } = await axios.get('https://fakestoreapi.com/products')
        return data;
    } catch (e) {
        return rejectWithValue(e.message);
    }
})

// TODO: Get All Products with a specific name Of Category
export const getAllProductsinCategroy = createAsyncThunk("getAllProductsinCategroy", async (Categroy, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/category/${Categroy}`)
        return data;
    } catch (e) {
        return rejectWithValue(e.message);
    }
})

// TODO: Get All Products and Push Him In Cart Array
export const getProductinCart = createAsyncThunk("getProductinCart", async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`)
        return data;
    } catch (e) {
        return rejectWithValue(e.message);
    }
})

// TODO: Delete Product from Cart when Do Dispatch in Cart
export const deleteProductFromCart = createAsyncThunk("deleteProductFromCart", async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        console.log(id);
        return id;
    } catch (e) {
        return rejectWithValue(e.message);
    }
})


export const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        // TODO: Get All Products from API 
        builder.addCase(getAllProductsFetch.pending, (state) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(getAllProductsFetch.fulfilled, (state, action) => {
            state.products = action.payload;
            state.loading = false;
        })
        builder.addCase(getAllProductsFetch.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })




        // TODO: Get All Products with a specific name Of Category
        builder.addCase(getAllProductsinCategroy.pending, (state) => {
            state.loading = true;
            state.error = "";
        })
        builder.addCase(getAllProductsinCategroy.fulfilled, (state, action) => {
            state.products = action.payload;

            state.loading = false;
        })
        builder.addCase(getAllProductsinCategroy.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })




        // TODO: Get All Products and Push Him In Cart Array
        builder.addCase(getProductinCart.pending, (state) => {
            state.loading = false;
            state.error = "";
        })
        builder.addCase(getProductinCart.fulfilled, (state, action) => {
            state.productinchart.push(action.payload)
            state.loading = false;
        })
        builder.addCase(getProductinCart.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })





        // TODO: Delete Product from Cart when Do Dispatch in Cart
        builder.addCase(deleteProductFromCart.pending, (state) => {
            state.loading = false;
            state.error = "";
        })
        builder.addCase(deleteProductFromCart.fulfilled, (state, action) => {
            state.productinchart = state.productinchart.filter(prod => prod.id !== action.payload);
            state.loading = false;
        })
        builder.addCase(deleteProductFromCart.rejected, (state, action) => {
            state.error = action.payload;
            state.loading = false;
        })
    }
})


export const { getAllProducts } = ProductSlice.actions

export default ProductSlice.reducer