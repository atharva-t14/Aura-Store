import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
    const items = useSelector(s => s.cart.items)
    const navigate = useNavigate()
    const [step, setStep] = useState(1)

    // Step 1: Address
    const [address, setAddress] = useState({ name: '', phone: '', address: '', pincode: '' })
    const [addressErrors, setAddressErrors] = useState({})

    const addressValidation = useMemo(() => {
        const errors = {}
        if (!address.name.trim() || address.name.trim().length < 3) errors.name = 'Name must be at least 3 characters'
        const phoneDigits = address.phone.replace(/\D/g, '')
        if (phoneDigits.length !== 10) errors.phone = 'Phone must be 10 digits'
        if (!address.address.trim() || address.address.trim().length < 10) errors.address = 'Address must be at least 10 characters'
        const pinDigits = address.pincode.replace(/\D/g, '')
        if (pinDigits.length !== 6) errors.pincode = 'Pincode must be 6 digits'
        return { errors, valid: Object.keys(errors).length === 0 }
    }, [address])

    // Step 2: Payment
    const [payment, setPayment] = useState({ card: '', cvv: '', expiry: '' })
    const [paymentErrors, setPaymentErrors] = useState({})

    const paymentValidation = useMemo(() => {
        const errors = {}
        const digits = payment.card.replace(/\D/g, '')
        if (digits.length !== 16) errors.card = 'Card must be 16 digits'
        const cvvDigits = payment.cvv.replace(/\D/g, '')
        if (cvvDigits.length !== 3) errors.cvv = 'CVV must be 3 digits'
        const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/
        if (!expiryRegex.test(payment.expiry.trim())) errors.expiry = 'Expiry must be MM/YY'
        return { errors, valid: Object.keys(errors).length === 0 }
    }, [payment])

    const totalPrice = items.reduce((a, i) => a + (i.price * 83 * i.qty), 0)

    const next = () => {
        if (step === 1) {
            setAddressErrors(addressValidation.errors)
            if (!addressValidation.valid) return
        }
        if (step === 2) {
            setPaymentErrors(paymentValidation.errors)
            if (!paymentValidation.valid) return
        }
        setStep(s => Math.min(3, s + 1))
    }
    const prev = () => setStep(s => Math.max(1, s - 1))

    const confirm = () => {
        navigate('/success', { replace: true })
    }

    return (
        <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3].map(n => (
                    <div key={n} className={`px-3 py-1 rounded ${step === n ? 'bg-brand text-white' : 'bg-gray-200'}`}>Step {n}</div>
                ))}
            </div>

            {step === 1 && (
                <div className="grid gap-3 md:grid-cols-2">
                    <div>
                        <input className="border rounded px-3 py-2 w-full" placeholder="Name" value={address.name} onChange={e => setAddress({ ...address, name: e.target.value })} />
                        {addressErrors.name && <p className="text-sm text-red-600 mt-1">{addressErrors.name}</p>}
                    </div>
                    <div>
                        <input className="border rounded px-3 py-2 w-full" placeholder="Phone (10 digits)" value={address.phone} onChange={e => setAddress({ ...address, phone: e.target.value })} />
                        {addressErrors.phone && <p className="text-sm text-red-600 mt-1">{addressErrors.phone}</p>}
                    </div>
                    <div className="md:col-span-2">
                        <input className="border rounded px-3 py-2 w-full" placeholder="Full Address" value={address.address} onChange={e => setAddress({ ...address, address: e.target.value })} />
                        {addressErrors.address && <p className="text-sm text-red-600 mt-1">{addressErrors.address}</p>}
                    </div>
                    <div>
                        <input className="border rounded px-3 py-2 w-full" placeholder="Pincode (6 digits)" value={address.pincode} onChange={e => setAddress({ ...address, pincode: e.target.value })} />
                        {addressErrors.pincode && <p className="text-sm text-red-600 mt-1">{addressErrors.pincode}</p>}
                    </div>
                </div>
            )}

            {step === 2 && (
                <div className="grid gap-3 md:grid-cols-3">
                    <div className="md:col-span-2">
                        <input className="border rounded px-3 py-2 w-full" placeholder="Card Number (16 digits)" value={payment.card} onChange={e => setPayment({ ...payment, card: e.target.value })} />
                        {paymentErrors.card && <p className="text-sm text-red-600 mt-1">{paymentErrors.card}</p>}
                    </div>
                    <div>
                        <input className="border rounded px-3 py-2 w-full" placeholder="CVV" value={payment.cvv} onChange={e => setPayment({ ...payment, cvv: e.target.value })} />
                        {paymentErrors.cvv && <p className="text-sm text-red-600 mt-1">{paymentErrors.cvv}</p>}
                    </div>
                    <div>
                        <input className="border rounded px-3 py-2 w-full" placeholder="Expiry (MM/YY)" value={payment.expiry} onChange={e => setPayment({ ...payment, expiry: e.target.value })} />
                        {paymentErrors.expiry && <p className="text-sm text-red-600 mt-1">{paymentErrors.expiry}</p>}
                    </div>
                </div>
            )}

            {step === 3 && (
                <div>
                    <h3 className="font-semibold mb-2">Order Summary</h3>
                    {items.map(i => (
                        <div key={i.id} className="flex justify-between py-2 border-b">
                            <span>{i.title} × {i.qty}</span>
                            <span>₹{(i.price * 83 * i.qty).toFixed(0)}</span>
                        </div>
                    ))}
                    <div className="text-right font-bold mt-3">Total: ₹{totalPrice.toFixed(0)}</div>
                </div>
            )}

            <div className="flex justify-between mt-6">
                <button className="px-4 py-2 border rounded" onClick={prev} disabled={step === 1}>Back</button>
                {step < 3 ? (
                    <button
                        className="px-4 py-2 bg-brand text-white rounded disabled:opacity-60"
                        onClick={next}
                        disabled={(step === 1 && !addressValidation.valid) || (step === 2 && !paymentValidation.valid)}
                    >
                        Next
                    </button>
                ) : (
                    <button className="px-4 py-2 bg-green-600 text-white rounded" onClick={confirm}>Confirm Order</button>
                )}
            </div>
        </div>
    )
}
