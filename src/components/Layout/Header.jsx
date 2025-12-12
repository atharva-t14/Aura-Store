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
        <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow z-50">
            <div className="container-max h-full flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
                    <span className="text-brand">Ecom</span>
                    <span className="hidden sm:inline">Shop</span>
                </Link>
                <div className="flex-1 px-4">
                    <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-brand/30"
                        onKeyDown={(e) => { if (e.key === 'Enter') navigate('/products?search=' + encodeURIComponent(e.currentTarget.value)) }}
                    />
                </div>
                <nav className="flex items-center gap-4">
                    <Link to="/products" className="text-sm font-medium hover:text-brand">Products</Link>
                    <Link to="/cart" className="relative">
                        <FaShoppingCart className="text-2xl" />
                        {cartCount > 0 && (
                            <span className="absolute -top-2 -right-2 bg-brand text-white text-xs rounded-full px-1 min-w-[20px] text-center">{cartCount}</span>
                        )}
                    </Link>
                    {user ? (
                        <button className="flex items-center gap-2" onClick={() => dispatch(logout())}>
                            <FaUserCircle className="text-2xl" />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    ) : (
                        <Link to="/login" className="flex items-center gap-2">
                            <FaUserCircle className="text-2xl" />
                            <span className="hidden sm:inline">Login</span>
                        </Link>
                    )}
                </nav>
            </div>
        </header>
    )
}
