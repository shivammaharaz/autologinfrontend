import React, { useContext, useState } from 'react'
import axios from 'axios'
import './style.css'
import { Data } from '../context'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const navigate = useNavigate()
    const { user, setUser, setIsLoggedin, isLoggedin } = useContext(Data)
    const [Loginuser, setLoginUser] = useState({
        email: "",
        password: ""
    })


    const handleChange = (e) => {
        const { name, value } = e.target
        // console.log({ [name]: 1 })
        setLoginUser({
            ...Loginuser,
            [name]: value
        })
        // console.log(Loginuser)
    }
    const handleLogin = () => {
        axios.post('https://auto-login-zi43.vercel.app/login', Loginuser)
            .then(resp => {
                console.log(resp.data)
                alert(resp.data.message)
                // console.log(resp.data)
                if (resp.data.message === "Login successful") {
                    setUser(resp.data.user)
                    setIsLoggedin(true)
                    localStorage.setItem('isLoggedin', isLoggedin)
                    localStorage.setItem('token', resp.data.accessToken)
                    console.log(user);
                    navigate('/')
                }
            })
    }
    return (
        <div className="login">
            <h1>Login</h1>
            <input type="email" name='email' value={Loginuser.email} placeholder='Enter Email' onChange={handleChange} />
            <input type="password" name="password" value={Loginuser.password} placeholder="Enter Password" onChange={handleChange} />
            <button className="btn btn-primary" onClick={handleLogin}>Login</button>
            <b><i>or</i></b>
            <button className="btn btn-primary" onClick={() => navigate('/register')}>Register</button>
        </div>
    )
}

export default Login