import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { products } from '../../data/products.js'

// Use custom local database instead of API
export const fetchProducts = createAsyncThunk('products/fetch', async (_, { rejectWithValue }) => {
    try {
        // Simulate async delay like real API
        await new Promise(resolve => setTimeout(resolve, 300))
        return products
    } catch (e) {
        return rejectWithValue(e.message)
    }
})

export const fetchProductById = createAsyncThunk('products/fetchById', async (id, { rejectWithValue }) => {
    try {
        // Simulate async delay
        await new Promise(resolve => setTimeout(resolve, 200))
        const product = products.find(p => p.id === Number(id))
        if (!product) throw new Error('Product not found')
        return product
    } catch (e) {
        return rejectWithValue(e.message)
    }
})

const initialState = {
    list: [],
    status: 'idle',
    error: null,
    selected: null,
    reviews: {}, // { productId: [{ id, userName, rating, comment, date }] }
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        clearSelected: (state) => { state.selected = null },
        addReview: (state, action) => {
            const { productId, review } = action.payload
            if (!state.reviews[productId]) {
                state.reviews[productId] = []
            }
            state.reviews[productId].unshift(review)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => { state.status = 'loading' })
            .addCase(fetchProducts.fulfilled, (state, action) => { state.status = 'succeeded'; state.list = action.payload })
            .addCase(fetchProducts.rejected, (state, action) => { state.status = 'failed'; state.error = action.payload })
            .addCase(fetchProductById.pending, (state) => { state.selected = null })
            .addCase(fetchProductById.fulfilled, (state, action) => { state.selected = action.payload })
            .addCase(fetchProductById.rejected, (state, action) => { state.error = action.payload })
    }
})

export const { clearSelected, addReview } = productsSlice.actions
export default productsSlice.reducer
