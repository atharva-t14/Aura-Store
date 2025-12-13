import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { FaStar, FaShoppingCart, FaEye } from 'react-icons/fa'
import { addToCart } from '../../redux/slices/cartSlice.js'
import toast from 'react-hot-toast'

export default function ProductCard({ product }) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

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
            className="group relative bg-white rounded-lg shadow hover:shadow-xl transition overflow-hidden cursor-pointer"
        >
            <div className="aspect-square bg-gray-50 flex items-center justify-center">
                <img src={product.image} alt={product.title} className="h-40 object-contain group-hover:scale-105 transition" />
            </div>
            <div className="p-3 space-y-1">
                <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
                <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>
                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold">₹{(product.price * 83).toFixed(0)}</span>
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded flex items-center gap-1">
                        <FaStar className="text-yellow-500" />
                        {product.rating.toFixed(1)}
                    </span>
                </div>
            </div>

            {/* Hover Quick View */}
            <div className="absolute inset-0 lg:-inset-4 bg-white shadow-2xl border border-gray-100 backdrop-blur-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-200 flex flex-col gap-3 p-4 z-10">
                <div className="w-full bg-gray-50 rounded-lg flex items-center justify-center py-6">
                    <img src={product.image} alt={product.title} className="h-32 object-contain" />
                </div>

                <div className="space-y-2">
                    <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
                    <p className="text-xs text-gray-600 line-clamp-3">{product.description}</p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                        <span>₹{(product.price * 83).toFixed(0)}</span>
                        <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded flex items-center gap-1">
                            <FaStar className="text-yellow-500" />
                            {product.rating.toFixed(1)}
                        </span>
                    </div>
                </div>

                <div className="flex gap-2 pt-1">
                    <button
                        onClick={handleAddToCart}
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-brand text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-brand-dark transition"
                    >
                        <FaShoppingCart />
                        Add to Cart
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); navigate(`/products/${product.id}`) }}
                        className="px-3 py-2 border border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-100 transition flex items-center gap-2"
                    >
                        <FaEye />
                        View
                    </button>
                </div>
            </div>
        </div>
    )
}
