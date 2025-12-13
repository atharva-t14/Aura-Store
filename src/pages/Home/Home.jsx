import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { categories } from '../../data/products.js'
import { FaMale, FaFemale, FaShoePrints, FaGem, FaRunning, FaTshirt, FaUserTie, FaTshirt as FaCasual, FaSnowflake, FaSun, FaCrown, FaSuitcase } from 'react-icons/fa'

const heroImages = [
    'src/data/oliviarodrigoimage.webp',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=600&fit=crop',
    'src/data/henrycavilimage.jpg',
    'src/data/mitrazimage.jpeg',
]

const categoryIcons = {
    'Men\'s Clothing': FaMale,
    'Women\'s Clothing': FaFemale,
    'Footwear': FaShoePrints,
    'Accessories': FaGem,
    'Sportswear': FaRunning,
    'Ethnic Wear': FaTshirt,
    'Formal Wear': FaUserTie,
    'Casual Wear': FaCasual,
    'Winter Collection': FaSnowflake,
    'Summer Collection': FaSun,
    'Luxury Brands': FaCrown,
    'Bags & Luggage': FaSuitcase
}

const categoryColors = {
    'Men\'s Clothing': 'from-amber-500 to-amber-700',
    'Women\'s Clothing': 'from-amber-300 to-amber-500',
    'Footwear': 'from-amber-400 to-amber-600',
    'Accessories': 'from-amber-300 to-amber-600',
    'Sportswear': 'from-amber-400 to-amber-700',
    'Ethnic Wear': 'from-amber-200 to-amber-500',
    'Formal Wear': 'from-amber-500 to-amber-800',
    'Casual Wear': 'from-amber-300 to-amber-500',
    'Winter Collection': 'from-amber-200 to-amber-400',
    'Summer Collection': 'from-amber-400 to-amber-600',
    'Luxury Brands': 'from-amber-500 to-amber-700',
    'Bags & Luggage': 'from-amber-400 to-amber-600'
}

export default function Home() {
    const user = useSelector(s => s.auth.user)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="space-y-6">
            {/* Hero Section */}
            <div className="bg-gradient-to-br from-[var(--bg-surface-solid)] to-[var(--bg-base-secondary)] border border-[var(--border-subtle)] rounded-xl shadow-[var(--shadow-md)] overflow-hidden">
                <div
                    className="relative h-80 md:h-96 flex flex-col justify-center p-8 md:p-14 bg-cover bg-center transition-all duration-1000"
                    style={{
                        backgroundImage: `url("${heroImages[currentImageIndex]}")`,
                        backgroundBlendMode: 'overlay'
                    }}
                >
                    {/* Brightness layer */}
                    <div className="absolute inset-0 bg-white/30"></div>

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0f0a05]/90 via-[#1a1209]/70 to-[#0f0a05]/90"></div>

                    <div className="relative z-10">
                        <h1 className="text-3xl md:text-5xl font-extrabold text-white">Shop the latest styles</h1>
                        <p className="mt-3 text-gray-300 max-w-2xl">Discover curated collections crafted for every lifestyle and occasion.</p>
                        <div className="mt-6 flex gap-3">
                            <Link to="/products" className="bg-gradient-to-r from-brand to-brand-dark text-white font-semibold px-5 py-2 rounded hover:shadow-[0_0_20px_var(--brand-glow)] transition-all">Shop Now</Link>
                            {!user && <Link to="/login" className="border border-white text-white font-semibold px-5 py-2 rounded hover:bg-white/10 transition">Login</Link>}
                        </div>
                    </div>

                    {/* Indicator dots */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
                        {heroImages.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentImageIndex(idx)}
                                className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-brand w-6' : 'bg-white/50 hover:bg-white/80'}`}
                                aria-label={`Go to slide ${idx + 1}`}
                            />
                        ))}
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
                                className="group bg-gradient-to-br from-[var(--bg-surface-solid)] to-[var(--bg-accent)] border border-[var(--border-subtle)] rounded-lg shadow-[var(--shadow-sm)] hover:shadow-[var(--shadow-md)] hover:border-brand/30 transition-all overflow-hidden"
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
            <div className="bg-gradient-to-br from-[var(--bg-surface-solid)] to-[var(--bg-base-secondary)] border border-[var(--border-subtle)] rounded-xl shadow-[var(--shadow-md)] p-6">
                <h2 className="text-2xl font-bold mb-4 text-[var(--text-primary)]">Why Shop With Us</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-gradient-to-br from-[var(--bg-accent)] to-transparent hover:shadow-[var(--shadow-sm)] transition-all">
                        <h3 className="font-semibold text-[var(--text-primary)]">Fast</h3>
                        <p className="text-sm text-[var(--text-muted)]">Lightning-fast product browsing with smooth transitions.</p>
                    </div>
                    <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-gradient-to-br from-[var(--bg-accent)] to-transparent hover:shadow-[var(--shadow-sm)] transition-all">
                        <h3 className="font-semibold text-[var(--text-primary)]">Secure</h3>
                        <p className="text-sm text-[var(--text-muted)]">Protected routes and persisted cart & auth state.</p>
                    </div>
                    <div className="p-4 rounded-lg border border-[var(--border-subtle)] bg-gradient-to-br from-[var(--bg-accent)] to-transparent hover:shadow-[var(--shadow-sm)] transition-all">
                        <h3 className="font-semibold text-[var(--text-primary)]">Responsive</h3>
                        <p className="text-sm text-[var(--text-muted)]">Looks great on mobile and desktop.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
