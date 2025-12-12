import { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import { loginSuccess } from '../../redux/slices/authSlice.js'
import toast from 'react-hot-toast'

export default function Login() {
    const token = useSelector(s => s.auth.token)
    const navigate = useNavigate()
    const location = useLocation()
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // If already logged in, redirect
        if (token) navigate('/products', { replace: true })
    }, [token, navigate])

    const validate = useCallback(() => {
        if (!email || !password) return 'All fields are required'
        if (!email.includes('@')) return 'Invalid email'
        if (password.length < 6) return 'Password must be 6+ chars'
        return null
    }, [email, password])

    const onSubmit = async (e) => {
        e.preventDefault()
        const error = validate()
        if (error) return toast.error(error)
        setLoading(true)
        setTimeout(() => {
            dispatch(loginSuccess({ user: { email }, token: 'fake-jwt-token' }))
            const from = location.state?.from || '/products'
            navigate(from, { replace: true })
            setLoading(false)
        }, 700)
    }

    if (token) return <Navigate to="/products" replace />

    return (
        <div className="max-w-md mx-auto bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={onSubmit} className="space-y-3">
                <input className="w-full border rounded px-3 py-2" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
                <input className="w-full border rounded px-3 py-2" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
                <button disabled={loading} className="w-full bg-brand text-white rounded py-2 disabled:opacity-60">{loading ? 'Logging in...' : 'Login'}</button>
            </form>
            <p className="text-sm mt-3">No account? <a href="/signup" className="text-brand">Sign up</a></p>
        </div>
    )
}
