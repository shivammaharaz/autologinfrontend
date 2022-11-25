import React, { useContext, useState } from 'react'
import axios from 'axios'
import './style.css'
import { Data } from '../context'
import { useNavigate } from 'react-router-dom'
// import abc.jpg as logo from '../img'

const Home = () => {
    const navigate = useNavigate()
    const { user, setUser, setIsLoggedin } = useContext(Data)
    const [open, setOpen] = useState(true)
    const [reset, setReset] = useState({
        email: "",
        password: "",
        newPassword: "",
        confirmNewPassword: ""
    })
    const handleResetChange = (e) => {
        const { name, value } = e.target
        setReset({ ...reset, [name]: value })
    }
    const handleReset = () => {
        axios.put('http://localhost:5000/reset', reset).then(resp => {
            alert(resp.data.message)
            if (resp.data.message === "password changed successfully")
                setOpen(!open)
            navigate("/")
            // setUser()
        })
    }

    const logOut = () => {
        setIsLoggedin(false)
        setUser({})
        localStorage.clear()
    }

    // const autoLogOut = () => {
    //     setTimeout(() => {
    //         logOut()
    //     }, 20000)
    // }
    // autoLogOut()



    if (open) {
        return (
            <div className='home'>
                <div className="logout">
                    <button className="btn btn-warning" onClick={logOut}>Logout</button>
                </div>
                <div className="profile">
                    <button className="btn btn-secondary">Add Profile</button>
                </div>

                <h2 className="name"> Welcome  {user.name}  !</h2>
                <h3 className="userid"> user_Id : {user.email}</h3>
                <div className="reset">
                    <button className="btn btn-primary" onClick={() => setOpen(!open)}>Reset Password</button>
                    <button className="btn btn-danger">Delete Account</button>
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="login">
                <input type="email" name='email' value={reset.email} placeholder='Enter Email' onChange={handleResetChange} />
                <input type="password" name="password" value={reset.password} placeholder="Enter Password" onChange={handleResetChange} />
                <input type="password" name="newPassword" value={reset.newPassword} placeholder="Enter Password" onChange={handleResetChange} />
                <input type="password" name="confirmNewPassword" value={reset.confirmNewPassword} placeholder="Enter Password" onChange={handleResetChange} />

                <button className="btn btn-primary" onClick={handleReset}>Reset</button>
            </div>
        )
    }
}

export default Home