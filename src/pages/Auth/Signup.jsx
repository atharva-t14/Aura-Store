import { useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'
import { signupSuccess } from '../../redux/slices/authSlice.js'
import toast from 'react-hot-toast'

export default function Signup() {
    const token = useSelector(s => s.auth.token)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const validate = useCallback(() => {
        if (!name || !email || !password) return 'All fields are required'
        if (!email.includes('@')) return 'Invalid email'
        if (password.length < 6) return 'Password must be 6+ chars'
        return null
    }, [name, email, password])

    const onSubmit = (e) => {
        e.preventDefault()
        const error = validate()
        if (error) return toast.error(error)
        setLoading(true)
        setTimeout(() => {
            dispatch(signupSuccess({ user: { name, email }, token: 'fake-jwt-token' }))
            navigate('/products', { replace: true })
            setLoading(false)
        }, 700)
    }

    if (token) return <Navigate to="/products" replace />

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Sign up</h2>
            <form onSubmit={onSubmit} className="space-y-3">
                <input className="w-full border rounded px-3 py-2" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
                <input className="w-full border rounded px-3 py-2" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="w-full border rounded px-3 py-2" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button disabled={loading} className="w-full bg-brand text-white rounded py-2 disabled:opacity-60">{loading ? 'Creating account...' : 'Create account'}</button>
            </form>
        </div>
    )
}
