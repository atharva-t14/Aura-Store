import { useSelector, useDispatch } from 'react-redux'
import { increaseQty, decreaseQty, removeFromCart } from '../../redux/slices/cartSlice.js'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
    const items = useSelector(s => s.cart.items)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const totalItems = items.reduce((a, i) => a + i.qty, 0)
    const totalPrice = items.reduce((a, i) => a + (i.price * 83 * i.qty), 0)

    if (items.length === 0) return <div className="bg-white rounded-lg shadow p-6">Your cart is empty.</div>

    return (
        <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white rounded-lg shadow">
                {items.map(item => (
                    <div key={item.id} className="p-4 flex gap-4 border-b">
                        <img src={item.image} alt={item.title} className="h-20 object-contain" />
                        <div className="flex-1">
                            <h3 className="font-semibold">{item.title}</h3>
                            <div className="flex items-center gap-3 mt-2">
                                <span>₹{(item.price * 83).toFixed(0)}</span>
                                <div className="flex items-center border rounded overflow-hidden">
                                    <button className="px-3" onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                                    <span className="px-4">{item.qty}</span>
                                    <button className="px-3" onClick={() => dispatch(increaseQty(item.id))}>+</button>
                                </div>
                                <button className="text-red-600" onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="bg-white rounded-lg shadow p-4 h-fit">
                <h4 className="font-semibold mb-2">Order Summary</h4>
                <p>Total items: {totalItems}</p>
                <p>Total price: ₹{totalPrice.toFixed(0)}</p>
                <button className="w-full bg-brand text-white rounded py-2 mt-3" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
            </div>
        </div>
    )
}
