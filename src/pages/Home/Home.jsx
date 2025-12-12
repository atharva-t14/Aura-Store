import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Home() {
    const user = useSelector(s => s.auth.user)
    return (
        <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-gradient-to-r from-brand to-brand-dark text-white p-8 md:p-14">
                <h1 className="text-3xl md:text-5xl font-extrabold">Shop the latest styles</h1>
                <p className="mt-3 text-white/90 max-w-2xl">Clean, modern, and responsive shopping experience inspired by Amazon, Flipkart, and Myntra.</p>
                <div className="mt-6 flex gap-3">
                    <Link to="/products" className="bg-white text-brand font-semibold px-5 py-2 rounded hover:bg-gray-100 transition">Shop Now</Link>
                    {!user && <Link to="/login" className="border border-white text-white font-semibold px-5 py-2 rounded hover:bg-white/10 transition">Login</Link>}
                </div>
            </div>
            <div className="p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg border">
                    <h3 className="font-semibold">Fast</h3>
                    <p className="text-sm text-gray-600">Lightning-fast product browsing with smooth transitions.</p>
                </div>
                <div className="p-4 rounded-lg border">
                    <h3 className="font-semibold">Secure</h3>
                    <p className="text-sm text-gray-600">Protected routes and persisted cart & auth state.</p>
                </div>
                <div className="p-4 rounded-lg border">
                    <h3 className="font-semibold">Responsive</h3>
                    <p className="text-sm text-gray-600">Looks great on mobile and desktop.</p>
                </div>
            </div>
        </div>
    )
}
