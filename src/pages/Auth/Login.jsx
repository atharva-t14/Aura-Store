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
        <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-[var(--bg-base)] via-[var(--bg-surface)] to-[var(--bg-base)] text-[var(--text-primary)]">
            <div className="w-full max-w-md bg-[var(--bg-surface)] border border-[var(--bg-muted)] rounded-xl shadow-xl p-6 sm:p-8 space-y-6">
                <div className="space-y-1">
                    <p className="text-sm uppercase tracking-[0.2em] text-[var(--text-muted)]">Welcome back</p>
                    <h2 className="text-3xl font-bold">Login</h2>
                </div>
                <form onSubmit={onSubmit} className="space-y-4">
                    <input
                        className="w-full rounded-lg border border-[var(--bg-muted)] bg-[var(--bg-base)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand/70 focus:border-brand"
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input
                        className="w-full rounded-lg border border-[var(--bg-muted)] bg-[var(--bg-base)] text-[var(--text-primary)] placeholder:text-[var(--text-muted)] px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-brand/70 focus:border-brand"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <button
                        disabled={loading}
                        className="w-full bg-brand text-[var(--bg-base)] rounded-lg py-2.5 font-semibold hover:bg-brand-dark transition disabled:opacity-60"
                    >
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <p className="text-sm text-[var(--text-muted)]">No account? <a href="/signup" className="text-brand hover:text-brand-dark">Sign up</a></p>
            </div>
        </div>
    )
}
