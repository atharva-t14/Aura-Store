import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import authReducer from './slices/authSlice.js'
import cartReducer from './slices/cartSlice.js'
import productsReducer from './slices/productsSlice.js'

const rootReducer = combineReducers({
    auth: authReducer,
    cart: cartReducer,
    products: productsReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth', 'cart']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export const persistor = persistStore(store)
