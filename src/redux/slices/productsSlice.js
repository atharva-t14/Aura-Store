import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Use DummyJSON to fetch 50 products out-of-the-box
export const fetchProducts = createAsyncThunk('products/fetch', async (_, { rejectWithValue }) => {
    try {
        const res = await fetch('https://dummyjson.com/products?limit=50')
        if (!res.ok) throw new Error('Failed to fetch products')
        const data = await res.json()
        return data.products.map(p => ({
            id: p.id,
            title: p.title,
            description: p.description,
            price: p.price, // USD
            category: p.category,
            image: p.thumbnail,
            images: p.images?.length ? p.images : [p.thumbnail],
            rating: p.rating || 0,
            ratingCount: p.reviews?.length || p.stock || 50,
        }))
    } catch (e) {
        return rejectWithValue(e.message)
    }
})

export const fetchProductById = createAsyncThunk('products/fetchById', async (id, { rejectWithValue }) => {
    try {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        if (!res.ok) throw new Error('Failed to fetch product')
        const p = await res.json()
        return {
            id: p.id,
            title: p.title,
            description: p.description,
            price: p.price,
            category: p.category,
            image: p.thumbnail,
            images: p.images?.length ? p.images : [p.thumbnail],
            rating: p.rating || 0,
            ratingCount: p.reviews?.length || p.stock || 50,
        }
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
