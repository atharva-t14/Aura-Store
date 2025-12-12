import { Suspense, lazy } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import ProtectedRoute from './routes/ProtectedRoute.jsx'
import Loader from './components/Loaders/Loader.jsx'

const Login = lazy(() => import('./pages/Auth/Login.jsx'))
const Signup = lazy(() => import('./pages/Auth/Signup.jsx'))
const Home = lazy(() => import('./pages/Home/Home.jsx'))
const Products = lazy(() => import('./pages/Products/Products.jsx'))
const ProductDetail = lazy(() => import('./pages/Products/ProductDetail.jsx'))
const Cart = lazy(() => import('./pages/Cart/Cart.jsx'))
const Checkout = lazy(() => import('./pages/Checkout/Checkout.jsx'))
const Success = lazy(() => import('./pages/Checkout/Success.jsx'))

export default function App() {
    return (
        <Layout>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:id" element={<ProductDetail />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route element={<ProtectedRoute />}>
                        <Route path="/checkout" element={<Checkout />} />
                    </Route>
                    <Route path="/success" element={<Success />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Suspense>
        </Layout>
    )
}
