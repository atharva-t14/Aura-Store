import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/authSlice.js'
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'

export default function Header() {
    const cartCount = useSelector(s => s.cart.items.reduce((acc, i) => acc + i.qty, 0))
    const user = useSelector(s => s.auth.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    return (
        <header className="fixed top-0 left-0 right-0 h-16 bg-[var(--bg-surface)] border-b border-[var(--bg-muted)]/70 backdrop-blur z-50">
            <div className="container-max h-full flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 font-semibold text-xl text-[var(--text-primary)]">
                    <span className="text-brand">Ecom</span>
                    <span className="hidden sm:inline text-[var(--text-muted)]">Shop</span>
                </Link>
                <div className="flex-1 px-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full bg-[var(--bg-muted)] border border-[var(--bg-muted)] rounded-md px-3 py-2 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-brand/60"
                        onKeyDown={(e) => { if (e.key === 'Enter') navigate('/products?search=' + encodeURIComponent(e.currentTarget.value)) }}
                    />
                </div>
                <nav className="flex items-center gap-4 text-[var(--text-muted)]">
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
