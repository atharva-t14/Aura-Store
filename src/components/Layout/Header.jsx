import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/authSlice.js'
import { FaShoppingCart, FaUserCircle, FaMoon, FaSun } from 'react-icons/fa'

export default function Header() {
    const cartCount = useSelector(s => s.cart.items.reduce((acc, i) => acc + i.qty, 0))
    const user = useSelector(s => s.auth.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    }, [theme])
    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-[var(--bg-surface-solid)]/95 border-b border-[var(--border-subtle)] backdrop-blur-lg shadow-[var(--shadow-sm)] z-50">
            <div className="container-max h-full flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 font-semibold text-xl text-[var(--text-primary)]">
                    <span className="text-brand">Ecom</span>
                    <span className="hidden sm:inline text-[var(--text-muted)]">Shop</span>
                </Link>
                <div className="flex-1 px-4 max-w-md hidden sm:block">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full bg-[var(--bg-muted)] border border-[var(--bg-muted)] rounded-md px-3 py-1.5 text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-brand/60"
                        onKeyDown={(e) => { if (e.key === 'Enter') navigate('/products?search=' + encodeURIComponent(e.currentTarget.value)) }}
                    />
                </div>
                <nav className="flex items-center gap-4 text-[var(--text-muted)]">
                    <button
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                        className="p-2 rounded-md bg-gradient-to-br from-[var(--bg-accent)] to-[var(--bg-muted)] hover:shadow-[var(--shadow-sm)] text-[var(--text-primary)] border border-[var(--border-subtle)] transition-all"
                        onClick={() => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))}
                        title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
                    >
                        {theme === 'dark' ? <FaSun className="text-lg text-brand" /> : <FaMoon className="text-lg text-brand-dark" />}
                    </button>
                    <Link to="/products" className="text-sm font-medium hover:text-brand">Products</Link>
                    <Link to="/cart" className="relative">
                        <FaShoppingCart className="text-2xl" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-brand text-[var(--bg-base)] text-xs rounded-full px-1 min-w-[20px] text-center">{cartCount}</span>
                        )}
                    </Link>
                    {user ? (
                        <button className="flex items-center gap-2 hover:text-brand" onClick={() => dispatch(logout())}>
                            <FaUserCircle className="text-2xl" />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    ) : (
                        <Link to="/login" className="flex items-center gap-2 hover:text-brand">
                            <FaUserCircle className="text-2xl" />
                            <span className="hidden sm:inline">Login</span>
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    )
}
