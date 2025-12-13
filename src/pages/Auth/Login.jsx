import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import { loginSuccess } from '../../redux/slices/authSlice.js'
import toast from 'react-hot-toast'

const heroImages = [
    'src/data/oliviarodrigoimage.webp',
    'https://images.unsplash.com/photo-1445205170230-053b83016050?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=600&fit=crop',
    'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&h=600&fit=crop',
    'src/data/henrycavilimage.jpg',
    'src/data/mitrazimage.jpeg',
]

export default function Login() {
    const token = useSelector(s => s.auth.token)
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    useEffect(() => {
        // If already logged in, redirect
        if (token) navigate('/products', { replace: true })
    }, [token, navigate])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    const validate = useCallback(() => {
        if (!email || !password) return 'All fields are required'
        if (!email.includes('@')) return 'Invalid email'
        if (password.length < 6) return 'Password must be 6+ chars'
        return null
    }, [email, password])

    const onSubmit = async (e) => {
        e.preventDefault()
        const error = validate()
        if (error) return toast.error(error)
        setLoading(true)
        setTimeout(() => {
            dispatch(loginSuccess({ user: { email }, token: 'fake-jwt-token' }))
            const from = location.state?.from || '/products'
            navigate(from, { replace: true })
            setLoading(false)
        }, 700)
    }

    if (token) return <Navigate to="/products" replace />

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--bg-base)] via-[var(--bg-surface)] to-[var(--bg-base)]">
            <div className="w-full h-screen flex">
                {/* Left side - Form */}
                <div className="w-full lg:w-[40%] flex items-center justify-center p-4 sm:p-8 bg-[var(--bg-surface)]/50">
                    <div className="w-full max-w-sm bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl shadow-2xl p-8 space-y-6 text-[var(--text-primary)]">
                        <div className="space-y-2">
                            <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">Welcome back</p>
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-brand to-brand-dark bg-clip-text text-transparent">Login</h2>
                        </div>
                        <form onSubmit={onSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-primary)]">Email</label>
                                <input
                                    className="w-full rounded-lg border border-[var(--bg-muted)] bg-[var(--bg-base)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/70 focus:border-brand transition"
                                    placeholder="your@email.com"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-[var(--text-primary)]">Password</label>
                                <input
                                    className="w-full rounded-lg border border-[var(--bg-muted)] bg-[var(--bg-base)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand/70 focus:border-brand transition"
                                    type="password"
                                    placeholder="••••••••"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <button
                                disabled={loading}
                                className="w-full bg-gradient-to-r from-brand to-brand-dark text-[var(--bg-base)] rounded-lg py-3 font-semibold hover:shadow-lg hover:shadow-brand/30 transition disabled:opacity-60 mt-6"
                            >
                                {loading ? 'Logging in...' : 'Login'}
                            </button>
                        </form>
                        <div className="pt-4 border-t border-[var(--bg-muted)]">
                            <p className="text-sm text-[var(--text-muted)] text-center">New here? <a href="/signup" className="text-brand hover:text-brand-dark font-semibold transition">Create an account</a></p>
                        </div>
                    </div>
                </div>

                {/* Right side - Carousel */}
                <div className="hidden lg:block lg:w-[60%] relative overflow-hidden">
                    <div
                        className="relative w-full h-full flex flex-col justify-center p-8 md:p-14 bg-cover bg-center transition-all duration-1000"
                        style={{
                            backgroundImage: `url("${heroImages[currentImageIndex]}")`,
                            backgroundBlendMode: 'overlay'
                        }}
                    >
                        {/* Brightness layer */}
                        <div className="absolute inset-0 bg-white/30"></div>

                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f0a05]/80 via-[#1a1209]/60 to-[#0f0a05]/80"></div>

                        <div className="relative z-10">
                            <h1 className="text-3xl md:text-5xl font-extrabold text-white">Shop the latest styles</h1>
                            <p className="mt-3 text-gray-300 max-w-2xl">Discover curated collections crafted for every lifestyle and occasion.</p>
                        </div>

                        {/* Indicator dots */}
                        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
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
            </div>
        </div>
    )
}
