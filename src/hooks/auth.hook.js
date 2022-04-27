import {useCallback, useEffect, useState} from "react";

const storageName = 'userData'

export const useAuth = () => {
    const [token, setToken] = useState(null)
    const [ready, setReady] = useState(false)
    const [userId, setUserId] = useState(null)
    const [user, setUser] = useState({
        name: '',
        firstname: '',
        age: '',
        gender: '',
        email: '',
        password: '',
        phone: ''
    })


    const login = useCallback((jwtToken, user) => {
        setToken(jwtToken)
        setUser(user)
        setUserId(user._id)
        localStorage.setItem("accessToken", jwtToken.accessToken)
        localStorage.setItem("refreshToken", jwtToken.refreshToken)
        localStorage.setItem(storageName, JSON.stringify({ user:user, token:jwtToken }))
    }, [])

    const update = useCallback((user) => {
        console.log(user)
        setUser(user)
        localStorage.setItem(storageName, JSON.stringify({ user:user}))
    }, [])

    const logout = useCallback(() => {
        setToken(null)
        setUserId(null)
        localStorage.removeItem(storageName)
        localStorage.removeItem("accessToken")
        localStorage.removeItem("refreshToken")
        setReady(false)
    }, [])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(storageName))
        console.log(data)

        if (data && data.token) {
            login(data.token, data.user)
        }
        setReady(true)
    }, [login, update])
    return { login, token, userId, ready, logout, user }

}