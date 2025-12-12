import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast'

const initialState = {
    user: null,
    token: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            const { user, token } = action.payload
            state.user = user
            state.token = token
            toast.success('Logged in successfully')
        },
        signupSuccess: (state, action) => {
            const { user, token } = action.payload
            state.user = user
            state.token = token
            toast.success('Account created')
        },
        logout: (state) => {
            state.user = null
            state.token = null
            toast.success('Logged out')
        },
    },
})

export const { loginSuccess, signupSuccess, logout } = authSlice.actions
export default authSlice.reducer
