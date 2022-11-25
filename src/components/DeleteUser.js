import axios from 'axios'
import React, { useState } from 'react'

const DeleteUser = () => {
    const [deleteData, setDelete] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setDelete({ ...deleteData, [name]: value })
    }
    const handledelete = () => {
        axios.delete('http://localhost:5000/deleteAccount', { data: deleteData, headers: { "Authorization": "***" } }).then(res => {
            alert(res.data.message)
        })
    }
    return (
        <div className="login">
            <input type="email" name='email' value={deleteData.email} placeholder='Enter Email' onChange={handleChange} />
            <input type="password" name="password" value={deleteData.password} placeholder="Enter Password" onChange={handleChange} />
            <input type="password" name="confirmPassword" value={deleteData.confirmPassword} placeholder="Enter Password" onChange={handleChange} />

            <button className="btn btn-primary" onClick={handledelete}>deleteData</button>
        </div>
    )
}

export default DeleteUser