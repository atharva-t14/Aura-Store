import { useEffect, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { increaseQty, decreaseQty, removeFromCart, addToCart } from '../../redux/slices/cartSlice.js'
import { fetchProducts } from '../../redux/slices/productsSlice.js'
import { FaTrash, FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa'

export default function Cart() {
    const items = useSelector(s => s.cart.items)
    const products = useSelector(s => s.products.list)
    const productsStatus = useSelector(s => s.products.status)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (productsStatus === 'idle') {
            dispatch(fetchProducts())
        }
    }, [productsStatus, dispatch])

    const totalItems = items.reduce((a, i) => a + i.qty, 0)
    const subtotal = items.reduce((a, i) => a + (i.price * 83 * i.qty), 0)
    const shipping = subtotal >= 2000 || subtotal === 0 ? 0 : 99
    const grandTotal = subtotal + shipping

    const recommendations = useMemo(() => {
        const cartIds = new Set(items.map(i => i.id))
        return products.filter(p => !cartIds.has(p.id)).slice(0, 4)
    }, [products, items])

    if (items.length === 0) {
        return (
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 text-center space-y-4">
                <p className="text-lg font-semibold text-gray-900">Your cart is empty</p>
                <p className="text-sm text-gray-600">Add items to enjoy a seamless checkout experience.</p>
                <button
                    className="inline-flex items-center gap-2 bg-brand text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-brand-dark"
                    onClick={() => navigate('/products')}
                >
                    <FaShoppingCart /> Start Shopping
                </button>
            </div>
        )
    }

    return (
        <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 divide-y">
                {items.map(item => (
                    <div key={item.id} className="p-4 flex gap-4">
                        <div className="w-24 h-24 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
                            <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 line-clamp-2">{item.title}</h3>
                            <p className="text-sm text-gray-500 mt-1">₹{(item.price * 83).toFixed(0)} each</p>
                            <div className="flex items-center gap-3 mt-3">
                                <div className="flex items-center rounded-lg border border-gray-200 overflow-hidden">
                                    <button className="px-3 py-2 hover:bg-gray-50" onClick={() => dispatch(decreaseQty(item.id))}><FaMinus /></button>
                                    <span className="px-4 py-2 font-semibold">{item.qty}</span>
                                    <button className="px-3 py-2 hover:bg-gray-50" onClick={() => dispatch(increaseQty(item.id))}><FaPlus /></button>
                                </div>
                                <p className="font-semibold text-gray-900">₹{(item.price * 83 * item.qty).toFixed(0)}</p>
                                <button className="text-red-600 text-sm inline-flex items-center gap-1" onClick={() => dispatch(removeFromCart(item.id))}>
                                    <FaTrash /> Remove
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <aside className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4 h-fit sticky top-20">
                <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold">Order Summary</h4>
                    <span className="text-sm text-gray-500">{totalItems} item(s)</span>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹{subtotal.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Shipping</span>
                        <span className="text-green-600">{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <span className="text-sm font-semibold text-gray-900">Total</span>
                    <span className="text-xl font-bold text-gray-900">₹{grandTotal.toFixed(0)}</span>
                </div>
                <button
                    className="w-full bg-brand text-white rounded-lg py-2.5 font-semibold hover:bg-brand-dark"
                    onClick={() => navigate('/checkout')}
                >
                    Proceed to Checkout
                </button>
            </aside>

            {/* Recommendations */}
            {recommendations.length > 0 && (
                <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Users also bought</h3>
                        <button className="text-sm text-brand hover:underline" onClick={() => navigate('/products')}>
                            Browse more
                        </button>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {recommendations.map(p => (
                            <div key={p.id} className="border border-gray-100 rounded-lg p-3 hover:shadow-md transition">
                                <div className="h-32 bg-gray-50 rounded flex items-center justify-center overflow-hidden mb-3">
                                    <img src={p.image} alt={p.title} className="h-full object-contain" />
                                </div>
                                <p className="text-sm font-semibold text-gray-900 line-clamp-2">{p.title}</p>
                                <p className="text-xs text-gray-500 mt-1">₹{(p.price * 83).toFixed(0)}</p>
                                <button
                                    className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-gray-900 text-white rounded-lg py-2 text-sm font-semibold hover:bg-gray-800"
                                    onClick={() => dispatch(addToCart({
                                        id: p.id,
                                        title: p.title,
                                        price: p.price,
                                        image: p.image,
                                        qty: 1
                                    }))}
                                >
                                    <FaShoppingCart /> Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
