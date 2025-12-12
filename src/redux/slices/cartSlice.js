import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: [], // {id, title, price, image, qty}
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const item = action.payload
            const existing = state.items.find(i => i.id === item.id)
            if (existing) {
                existing.qty += item.qty || 1
            } else {
                state.items.push({ ...item, qty: item.qty || 1 })
            }
        },
        removeFromCart: (state, action) => {
            const id = action.payload
            state.items = state.items.filter(i => i.id !== id)
        },
        increaseQty: (state, action) => {
            const id = action.payload
            const item = state.items.find(i => i.id === id)
            if (item) item.qty += 1
        },
        decreaseQty: (state, action) => {
            const id = action.payload
            const item = state.items.find(i => i.id === id)
            if (item && item.qty > 1) item.qty -= 1
        },
        clearCart: (state) => {
            state.items = []
        }
    },
})

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions
export default cartSlice.reducer
