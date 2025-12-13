import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaStar, FaShoppingCart, FaEye } from 'react-icons/fa'
import { addToCart } from '../../redux/slices/cartSlice.js'
import toast from 'react-hot-toast'

export default function ProductCard({ product }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const cardBase = 'bg-[var(--bg-surface)] border border-[var(--bg-muted)] shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-transform'
    const thumbBg = 'bg-gradient-to-br from-brand/12 via-amber-300/10 to-brand/8'
    const titleColor = 'text-[var(--text-primary)]'
    const descColor = 'text-[var(--text-muted)]'
    const priceColor = 'text-[var(--text-primary)]'
    const ratingBg = 'bg-amber-100 text-amber-800'
    const ratingIcon = 'text-amber-500'
    const primaryBtn = 'bg-brand hover:bg-brand-dark'
    const borderTone = 'border-[var(--bg-muted)]'
    const overlayBg = 'bg-[var(--bg-surface)]'

    const handleAddToCart = (e) => {
        e.stopPropagation()
        dispatch(addToCart({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            qty: 1
        }))
        toast.success('Added to cart')
    }

    return (
        <div
            onClick={() => navigate(`/products/${product.id}`)}
            className={`group relative rounded-lg transition overflow-hidden cursor-pointer ${cardBase}`}
        >
            <div className={`aspect-square ${thumbBg} flex items-center justify-center`}>
                <img src={product.image} alt={product.title} className="h-40 object-contain group-hover:scale-105 transition" loading="lazy" />
            </div>
            <div className="p-3 space-y-1">
                <h3 className={`text-sm font-semibold line-clamp-2 ${titleColor}`}>{product.title}</h3>
                <p className={`text-xs line-clamp-2 ${descColor}`}>{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className={`text-lg font-bold ${priceColor}`}>₹{(product.price * 83).toFixed(0)}</span>
                    <span className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${ratingBg}`}>
                        <FaStar className={ratingIcon} />
                        {product.rating.toFixed(1)}
                    </span>
                </div>
            </div>

            {/* Hover Quick View */}
            <div className={`absolute inset-0 lg:-inset-4 shadow-2xl opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-200 flex flex-col gap-3 p-4 z-10 border ${overlayBg} ${borderTone}`}>
                <div className={`w-full ${thumbBg} rounded-lg flex items-center justify-center py-6 border border-brand/20`}>
                    <img src={product.image} alt={product.title} className="h-32 object-contain" loading="lazy" />
                </div>

                <div className="space-y-2">
                    <h3 className={`text-sm font-semibold line-clamp-2 ${titleColor}`}>{product.title}</h3>
                    <p className={`text-xs line-clamp-3 ${descColor}`}>{product.description}</p>
                    <div className={`flex items-center gap-2 text-sm font-semibold ${priceColor}`}>
                        <span>₹{(product.price * 83).toFixed(0)}</span>
                        <span className={`text-xs px-2 py-1 rounded flex items-center gap-1 ${ratingBg}`}>
                            <FaStar className={ratingIcon} />
                            {product.rating.toFixed(1)}
                        </span>
                    </div>
                </div>

                <div className="flex gap-2 pt-1">
                    <button
                        onClick={handleAddToCart}
                        className={`flex-1 inline-flex items-center justify-center gap-2 text-white px-3 py-2 rounded-lg text-sm font-semibold transition ${primaryBtn}`}
                    >
                        <FaShoppingCart />
                        Add to Cart
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); navigate(`/products/${product.id}`) }}
                        className={`px-3 py-2 border rounded-lg text-sm font-semibold hover:bg-[var(--bg-muted)]/60 transition flex items-center gap-2 ${borderTone} text-[var(--text-primary)]`}
                    >
                        <FaEye />
                        View
                    </button>
                </div>
            </div>
        </div>
    )
}
