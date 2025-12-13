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
    'Electronics': 'from-amber-400 to-amber-600',
    'Fashion': 'from-amber-300 to-amber-500',
    'Home & Kitchen': 'from-amber-200 to-amber-500',
    'Beauty': 'from-amber-300 to-amber-600',
    'Sports': 'from-amber-400 to-amber-700',
    'Books': 'from-amber-300 to-amber-600',
    'Toys': 'from-amber-300 to-amber-500',
    'Automotive': 'from-amber-400 to-amber-700'
}

export default function Home() {
    const user = useSelector(s => s.auth.user)
    return (
        <div className="space-y-6">
            {/* Hero Section */}
            <div className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-xl shadow-sm overflow-hidden">
                <div className="bg-gradient-to-r from-[#c07c32] via-[#f7a620] to-[#c07c32] text-[var(--bg-base)] p-8 md:p-14">
                    <h1 className="text-3xl md:text-5xl font-extrabold">Shop the latest styles</h1>
                    <p className="mt-3 text-[var(--bg-base)]/80 max-w-2xl">Curated selections with a bold dark-amber vibe.</p>
                    <div className="mt-6 flex gap-3">
                        <Link to="/products" className="bg-[var(--bg-base)] text-brand font-semibold px-5 py-2 rounded hover:bg-[#130f1a] transition">Shop Now</Link>
                        {!user && <Link to="/login" className="border border-[var(--bg-base)] text-[var(--bg-base)] font-semibold px-5 py-2 rounded hover:bg-[var(--bg-base)]/10 transition">Login</Link>}
                    </div>
                </div>
            </div>

            {/* Categories Grid */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Shop by Category</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {categories.map(category => {
                        const Icon = categoryIcons[category]
                        const gradient = categoryColors[category]
                        return (
                            <Link
                                key={category}
                                to={`/products?category=${encodeURIComponent(category)}`}
                                className="group bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden"
                            >
                                <div className={`bg-gradient-to-br ${gradient} p-6 flex items-center justify-center`}>
                                    <Icon className="text-4xl md:text-5xl text-[var(--bg-base)] group-hover:scale-110 transition" />
                                </div>
                                <div className="p-4 text-center">
                                    <h3 className="font-semibold text-[var(--text-primary)]">{category}</h3>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>

            {/* Features */}
            <div className="bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Why Shop With Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg border border-[var(--bg-muted)] bg-[var(--bg-base)]/40">
                        <h3 className="font-semibold text-[var(--text-primary)]">Fast</h3>
                        <p className="text-sm text-[var(--text-muted)]">Lightning-fast product browsing with smooth transitions.</p>
                    </div>
                    <div className="p-4 rounded-lg border border-[var(--bg-muted)] bg-[var(--bg-base)]/40">
                        <h3 className="font-semibold text-[var(--text-primary)]">Secure</h3>
                        <p className="text-sm text-[var(--text-muted)]">Protected routes and persisted cart & auth state.</p>
                    </div>
                    <div className="p-4 rounded-lg border border-[var(--bg-muted)] bg-[var(--bg-base)]/40">
                        <h3 className="font-semibold text-[var(--text-primary)]">Responsive</h3>
                        <p className="text-sm text-[var(--text-muted)]">Looks great on mobile and desktop.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
