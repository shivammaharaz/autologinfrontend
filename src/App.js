import React, { useContext, useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import DeleteUser from './components/DeleteUser';
import { Routes, Route } from 'react-router-dom';
import { Data } from './context'
import axios from 'axios';

function App() {
  const { user, setUser, isLoggedin } = useContext(Data)
  console.info(isLoggedin)


  useEffect(() => {
    if (!isLoggedin === false) {
      const token = localStorage.getItem('token')
      axios.post('https://auto-login-zi43.vercel.app/authLogin', { token: token }).then(resp => {
        console.log(resp.data)
        setUser(resp.data.user)
        console.log(user)
        // setIsLoggedin(false)

      })
    }
  }, [isLoggedin])




  console.warn(user)
  return (
    <div className='App'>
      <Routes>
        <Route exact path='/' element={user && user._id ? <Home /> : <Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/delete' element={<DeleteUser />} />

      </Routes>

    </div>
  );
}

export default App;
