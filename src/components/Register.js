import React, { useState } from 'react'
import axios from 'axios'
import './style.css'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const navigate = useNavigate()
    const [RegisterUser, setRegisterUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        // console.log({ [name]: 1 })
        setRegisterUser({
            ...RegisterUser,
            [name]: value
        })
        console.log(RegisterUser)
    }
    const handleSubmit = () => {
        axios.post('https://auto-login-zi43.vercel.app/register', RegisterUser).then(resp => {

            alert(resp.data.message)
            if (resp.data.message === "Registration Successful") {
                navigate('/login')
            }
        })
    }

    return (
        <div className="login">
            <h1>Register</h1>
            <input type="text" name="name" value={RegisterUser.name} placeholder="Enter Name" onChange={handleChange} />
            <input type="email" name='email' value={RegisterUser.email} placeholder='Enter Email' onChange={handleChange} />
            <input type="password" name="password" value={RegisterUser.password} placeholder="Enter Password" onChange={handleChange} />
            <button className="btn btn-primary" onClick={handleSubmit}>Register</button>
            <b>Or</b>
            <button className="btn btn-primary" onClick={() => navigate('/login')}>Login</button>
        </div>
    )
}

export default Register