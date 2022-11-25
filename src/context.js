import React, { useState, createContext } from 'react'

export const Data = createContext()

const Context = ({ children }) => {
    const [user, setUser] = useState({})
    const [isLoggedin, setIsLoggedin] = useState(localStorage.getItem('isLoggedin') ? localStorage.getItem('isLoggedin') : false)
    // const [token, setToken] = useState(localStorage.getItem('token') || '')
    // if (token) {
    //     localStorage.setItem('token', token)
    // }
    return (
        <div>
            <Data.Provider value={{ user, setUser, isLoggedin, setIsLoggedin }}>{children}</Data.Provider>
        </div>
    )
}

export default Context