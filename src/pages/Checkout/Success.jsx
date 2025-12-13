import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaCheckCircle, FaClock, FaHome, FaShoppingBag } from 'react-icons/fa'

export default function Success() {
    const items = useSelector(s => s.cart.items)
    const user = useSelector(s => s.auth.user)
    const navigate = useNavigate()

    const { subtotal, shipping, totalItems, grandTotal } = useMemo(() => {
        const subtotalCalc = items.reduce((a, i) => a + (i.price * 83 * i.qty), 0)
        const shippingCalc = subtotalCalc >= 2000 || subtotalCalc === 0 ? 0 : 99
        return {
            subtotal: subtotalCalc,
            shipping: shippingCalc,
            totalItems: items.reduce((a, i) => a + i.qty, 0),
            grandTotal: subtotalCalc + shippingCalc
        }
    }, [items])

    const orderId = useMemo(() => `ORD-${Date.now().toString().slice(-6)}`, [])

    return (
        <div className="max-w-5xl mx-auto bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-2xl shadow-xl p-6 sm:p-8 text-[var(--text-primary)]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-6 border-b border-[var(--bg-muted)]">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/15 text-emerald-300 flex items-center justify-center text-2xl">
                        <FaCheckCircle />
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold">Order Successful</h2>
                        <p className="text-sm text-[var(--text-muted)]">Thank you{user?.name ? `, ${user.name}` : ''}! We’ve emailed your receipt.</p>
                    </div>
                </div>
                <div className="text-right space-y-1">
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">Order ID</p>
                    <p className="font-mono text-lg">{orderId}</p>
                </div>
            </div>

            <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 pt-6">
                <div className="space-y-4">
                    <div className="bg-[var(--bg-base)]/60 border border-[var(--bg-muted)] rounded-xl p-4 sm:p-5 space-y-3">
                        <div className="flex items-center justify-between">
                            <h3 className="text-lg font-semibold">Items ({totalItems})</h3>
                            <span className="text-sm text-[var(--text-muted)]">Subtotal ₹{subtotal.toFixed(0)}</span>
                        </div>
                        <div className="divide-y divide-[var(--bg-muted)]">
                            {items.length === 0 ? (
                                <p className="py-6 text-center text-[var(--text-muted)]">No items found. Browse products to fill your cart.</p>
                            ) : (
                                items.map(i => (
                                    <div key={i.id} className="flex gap-3 py-3">
                                        <div className="w-16 h-16 rounded border border-[var(--bg-muted)] bg-[var(--bg-base)] flex items-center justify-center overflow-hidden">
                                            <img src={i.image} alt={i.title} className="w-full h-full object-contain" loading="lazy" />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <p className="text-sm font-semibold line-clamp-2">{i.title}</p>
                                            <p className="text-xs text-[var(--text-muted)]">Qty: {i.qty}</p>
                                        </div>
                                        <div className="text-sm font-semibold whitespace-nowrap">₹{(i.price * 83 * i.qty).toFixed(0)}</div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>

                    <div className="bg-[var(--bg-base)]/60 border border-[var(--bg-muted)] rounded-xl p-4 sm:p-5 space-y-3">
                        <h3 className="text-lg font-semibold">Delivery</h3>
                        <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                            <FaClock className="text-brand" />
                            <div>
                                <p className="text-[var(--text-primary)] font-semibold">Arrives in 3-5 business days</p>
                                <p>We’ll notify you when it ships.</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-[var(--text-muted)]">
                            <FaHome className="text-brand" />
                            <p>Standard delivery selected. Shipping {shipping === 0 ? 'is free' : `₹${shipping}`}.</p>
                        </div>
                    </div>
                </div>

                <aside className="bg-[var(--bg-base)]/60 border border-[var(--bg-muted)] rounded-xl p-4 sm:p-5 space-y-4 h-fit">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold">Receipt</h3>
                        <span className="text-xs px-2 py-1 rounded-full bg-brand/15 text-brand font-semibold">Paid</span>
                    </div>
                    <div className="space-y-2 text-sm text-[var(--text-muted)]">
                        <div className="flex justify-between"><span>Items</span><span className="text-[var(--text-primary)]">₹{subtotal.toFixed(0)}</span></div>
                        <div className="flex justify-between"><span>Shipping</span><span className="text-amber-300">{shipping === 0 ? 'Free' : `₹${shipping}`}</span></div>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-[var(--bg-muted)]">
                        <span className="text-sm font-semibold">Total Paid</span>
                        <span className="text-2xl font-bold">₹{grandTotal.toFixed(0)}</span>
                    </div>
                    <div className="text-xs text-[var(--text-muted)]">Payment processed securely. A copy of this receipt is in your email.</div>
                    <div className="grid gap-2 sm:grid-cols-2">
                        <button
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 border border-[var(--bg-muted)] rounded-lg text-sm font-semibold hover:bg-[var(--bg-muted)]"
                            onClick={() => navigate('/cart')}
                        >
                            View Cart
                        </button>
                        <button
                            className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 bg-brand text-[var(--bg-base)] rounded-lg text-sm font-semibold hover:bg-brand-dark"
                            onClick={() => navigate('/products')}
                        >
                            <FaShoppingBag /> Continue Shopping
                        </button>
                    </div>
                </aside>
            </div>
        </div>
    )
}
