import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { FaCheckCircle, FaMapMarkerAlt, FaCreditCard, FaClipboardList, FaShieldAlt, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

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
    const totalItems = items.reduce((a, i) => a + i.qty, 0)
    const shipping = totalPrice > 2000 ? 0 : 99
    const grandTotal = totalPrice + shipping

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

    const steps = [
        { id: 1, label: 'Delivery', icon: FaMapMarkerAlt },
        { id: 2, label: 'Payment', icon: FaCreditCard },
        { id: 3, label: 'Review', icon: FaClipboardList }
    ]

    const renderInput = (props) => (
        <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
                {props.icon}
                <span>{props.label}</span>
                {props.required && <span className="text-red-500">*</span>}
            </label>
            <input
                {...props.inputProps}
                className="w-full rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand"
            />
            {props.error && <p className="text-xs text-red-600">{props.error}</p>}
        </div>
    )

    return (
        <div className="grid lg:grid-cols-[2fr_1fr] gap-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 space-y-6">
                {/* Stepper */}
                <div className="flex items-center justify-between">
                    {steps.map((s, idx) => {
                        const Icon = s.icon
                        const active = step === s.id
                        const done = step > s.id
                        return (
                            <div key={s.id} className="flex-1 flex items-center">
                                <div className={`flex items-center gap-3 ${idx !== steps.length - 1 ? 'w-full' : ''}`}>
                                    <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${done ? 'border-green-500 bg-green-50 text-green-600' : active ? 'border-brand bg-brand/10 text-brand' : 'border-gray-200 text-gray-400'}`}>
                                        {done ? <FaCheckCircle /> : <Icon />}
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-wide text-gray-500">Step {s.id}</p>
                                        <p className={`text-sm font-semibold ${active ? 'text-gray-900' : 'text-gray-600'}`}>{s.label}</p>
                                    </div>
                                </div>
                                {idx !== steps.length - 1 && (
                                    <div className={`h-0.5 flex-1 ${step > s.id ? 'bg-brand' : 'bg-gray-200'} mx-3`} />
                                )}
                            </div>
                        )
                    })}
                </div>

                {/* Panels */}
                {step === 1 && (
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Delivery Details</h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            {renderInput({
                                label: 'Full Name',
                                icon: <FaMapMarkerAlt className="text-brand" />,
                                inputProps: {
                                    placeholder: 'John Doe',
                                    value: address.name,
                                    onChange: e => setAddress({ ...address, name: e.target.value })
                                },
                                error: addressErrors.name,
                                required: true
                            })}
                            {renderInput({
                                label: 'Phone Number',
                                icon: <FaMapMarkerAlt className="text-brand" />,
                                inputProps: {
                                    placeholder: '10-digit phone',
                                    value: address.phone,
                                    maxLength: 10,
                                    onChange: e => {
                                        const digits = e.target.value.replace(/\D/g, '').slice(0, 10)
                                        setAddress({ ...address, phone: digits })
                                    }
                                },
                                error: addressErrors.phone,
                                required: true
                            })}
                        </div>
                        {renderInput({
                            label: 'Full Address',
                            icon: <FaMapMarkerAlt className="text-brand" />,
                            inputProps: {
                                placeholder: 'House, Street, Area, City',
                                value: address.address,
                                onChange: e => setAddress({ ...address, address: e.target.value })
                            },
                            error: addressErrors.address,
                            required: true
                        })}
                        <div className="grid gap-4 md:grid-cols-2">
                            {renderInput({
                                label: 'Pincode',
                                icon: <FaMapMarkerAlt className="text-brand" />,
                                inputProps: {
                                    placeholder: '6-digit pincode',
                                    value: address.pincode,
                                    maxLength: 6,
                                    onChange: e => {
                                        const digits = e.target.value.replace(/\D/g, '').slice(0, 6)
                                        setAddress({ ...address, pincode: digits })
                                    }
                                },
                                error: addressErrors.pincode,
                                required: true
                            })}
                            <div className="hidden md:block" />
                        </div>
                        <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-100 rounded-lg p-3">
                            <FaShieldAlt className="text-brand mt-0.5" />
                            <p>Your address is secure and only used for delivery purposes.</p>
                        </div>
                    </div>
                )}

                {step === 2 && (
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Payment Details</h2>
                        <div className="grid gap-4 md:grid-cols-2">
                            {renderInput({
                                label: 'Card Number',
                                icon: <FaCreditCard className="text-brand" />,
                                inputProps: {
                                    placeholder: '1234 5678 9012 3456',
                                    value: payment.card,
                                    maxLength: 19,
                                    onChange: e => {
                                        const digits = e.target.value.replace(/\D/g, '').slice(0, 16)
                                        const formatted = digits.replace(/(.{4})/g, '$1 ').trim()
                                        setPayment({ ...payment, card: formatted })
                                    }
                                },
                                error: paymentErrors.card,
                                required: true
                            })}
                            {renderInput({
                                label: 'CVV',
                                icon: <FaShieldAlt className="text-brand" />,
                                inputProps: {
                                    placeholder: '123',
                                    value: payment.cvv,
                                    maxLength: 3,
                                    onChange: e => {
                                        const digits = e.target.value.replace(/\D/g, '').slice(0, 3)
                                        setPayment({ ...payment, cvv: digits })
                                    }
                                },
                                error: paymentErrors.cvv,
                                required: true
                            })}
                        </div>
                        <div className="grid gap-4 md:grid-cols-2">
                            {renderInput({
                                label: 'Expiry (MM/YY)',
                                icon: <FaCreditCard className="text-brand" />,
                                inputProps: {
                                    placeholder: 'MM/YY',
                                    value: payment.expiry,
                                    maxLength: 5,
                                    onChange: e => {
                                        const raw = e.target.value.replace(/[^0-9]/g, '').slice(0, 4)
                                        let formatted = raw
                                        if (raw.length >= 3) formatted = `${raw.slice(0, 2)}/${raw.slice(2)}`
                                        else if (raw.length >= 1) formatted = raw
                                        setPayment({ ...payment, expiry: formatted })
                                    }
                                },
                                error: paymentErrors.expiry,
                                required: true
                            })}
                            <div className="hidden md:block" />
                        </div>
                        <div className="flex items-start gap-2 text-sm text-gray-600 bg-gray-50 border border-gray-100 rounded-lg p-3">
                            <FaShieldAlt className="text-brand mt-0.5" />
                            <p>We use 256-bit encryption. Your payment details are never stored.</p>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="space-y-4">
                        <h2 className="text-lg font-semibold">Review & Confirm</h2>
                        <div className="bg-gray-50 border border-gray-100 rounded-lg p-4 space-y-2">
                            <div className="flex justify-between text-sm text-gray-600">
                                <span>Deliver to</span>
                                <span className="font-semibold text-gray-900">{address.name || '—'}</span>
                            </div>
                            <div className="text-sm text-gray-700 leading-relaxed">{address.address || 'No address provided yet.'}</div>
                            <div className="text-sm text-gray-600">Phone: {address.phone || '—'}</div>
                            <div className="text-sm text-gray-600">Pincode: {address.pincode || '—'}</div>
                        </div>
                        <div className="border border-gray-100 rounded-lg">
                            {items.map(i => (
                                <div key={i.id} className="flex justify-between items-center px-4 py-3 border-b last:border-none">
                                    <div>
                                        <p className="text-sm font-semibold text-gray-900 line-clamp-2">{i.title}</p>
                                        <p className="text-xs text-gray-500">Qty: {i.qty}</p>
                                    </div>
                                    <p className="text-sm font-semibold text-gray-900">₹{(i.price * 83 * i.qty).toFixed(0)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Footer actions */}
                <div className="flex items-center justify-between pt-2">
                    <button
                        className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 disabled:opacity-60"
                        onClick={prev}
                        disabled={step === 1}
                    >
                        <FaArrowLeft />
                        Back
                    </button>

                    {step < 3 ? (
                        <button
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white rounded-lg text-sm font-semibold hover:bg-brand-dark disabled:opacity-60"
                            onClick={next}
                            disabled={(step === 1 && !addressValidation.valid) || (step === 2 && !paymentValidation.valid)}
                        >
                            Next
                            <FaArrowRight />
                        </button>
                    ) : (
                        <button
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700"
                            onClick={confirm}
                        >
                            Place Order
                            <FaCheckCircle />
                        </button>
                    )}
                </div>
            </div>

            {/* Order Summary */}
            <aside className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit sticky top-20 space-y-4">
                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Order Summary</h3>
                    <span className="text-sm text-gray-500">{totalItems} item(s)</span>
                </div>
                <div className="divide-y divide-gray-100">
                    {items.map(i => (
                        <div key={i.id} className="py-3 flex gap-3">
                            <div className="w-14 h-14 rounded border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden">
                                <img src={i.image} alt={i.title} className="w-full h-full object-contain" />
                            </div>
                            <div className="flex-1 space-y-1">
                                <p className="text-sm font-semibold text-gray-900 line-clamp-2">{i.title}</p>
                                <p className="text-xs text-gray-500">Qty: {i.qty} • ₹{(i.price * 83).toFixed(0)} each</p>
                            </div>
                            <p className="text-sm font-semibold text-gray-900 whitespace-nowrap">₹{(i.price * 83 * i.qty).toFixed(0)}</p>
                        </div>
                    ))}
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                    <div className="flex justify-between">
                        <span>Subtotal</span>
                        <span>₹{totalPrice.toFixed(0)}</span>
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
                <div className="text-xs text-gray-500 flex items-center gap-2">
                    <FaShieldAlt className="text-brand" /> Secure checkout • Encrypted payments
                </div>
                {step === 3 && (
                    <button
                        className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-green-600 text-white rounded-lg text-sm font-semibold hover:bg-green-700"
                        onClick={confirm}
                    >
                        Place Order
                        <FaCheckCircle />
                    </button>
                )}
            </aside>
        </div>
    )
}
