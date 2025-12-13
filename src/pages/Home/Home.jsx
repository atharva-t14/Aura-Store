import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { categories } from '../../data/products.js'
import { FaMobileAlt, FaTshirt, FaHome, FaSpa, FaDumbbell, FaBook, FaCube, FaCar } from 'react-icons/fa'

const categoryIcons = {
    'Electronics': FaMobileAlt,
    'Fashion': FaTshirt,
    'Home & Kitchen': FaHome,
    'Beauty': FaSpa,
    'Sports': FaDumbbell,
    'Books': FaBook,
    'Toys': FaCube,
    'Automotive': FaCar
}

const categoryColors = {
    'Electronics': 'from-blue-500 to-blue-600',
    'Fashion': 'from-pink-500 to-pink-600',
    'Home & Kitchen': 'from-green-500 to-green-600',
    'Beauty': 'from-purple-500 to-purple-600',
    'Sports': 'from-orange-500 to-orange-600',
    'Books': 'from-yellow-500 to-yellow-600',
    'Toys': 'from-red-500 to-red-600',
    'Automotive': 'from-gray-500 to-gray-600'
}

export default function Home() {
    const user = useSelector(s => s.auth.user)
    return (
        <div className="space-y-6">
            {/* Hero Section */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="bg-gradient-to-r from-brand to-brand-dark text-white p-8 md:p-14">
                    <h1 className="text-3xl md:text-5xl font-extrabold">Shop the latest styles</h1>
                    <p className="mt-3 text-white/90 max-w-2xl">Clean, modern, and responsive shopping experience inspired by Amazon, Flipkart, and Myntra.</p>
                    <div className="mt-6 flex gap-3">
                        <Link to="/products" className="bg-white text-brand font-semibold px-5 py-2 rounded hover:bg-gray-100 transition">Shop Now</Link>
                        {!user && <Link to="/login" className="border border-white text-white font-semibold px-5 py-2 rounded hover:bg-white/10 transition">Login</Link>}
                    </div>
                </div>
            </div>

            {/* Categories Grid */}
            <div>
                <h2 className="text-2xl font-bold mb-4">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map(category => {
                        const Icon = categoryIcons[category]
                        const gradient = categoryColors[category]
                        return (
                            <Link
                                key={category}
                                to={`/products?category=${encodeURIComponent(category)}`}
                                className="group bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden"
                            >
                                <div className={`bg-gradient-to-br ${gradient} p-6 flex items-center justify-center`}>
                                    <Icon className="text-4xl md:text-5xl text-white group-hover:scale-110 transition" />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="font-semibold text-gray-900">{category}</h3>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

            {/* Features */}
            <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-2xl font-bold mb-4">Why Shop With Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
        </div>
    )
}
