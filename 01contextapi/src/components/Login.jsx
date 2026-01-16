import React from 'react'
import { useState } from 'react'
import UserContext  from '../context/UserContext'
import { useContext } from 'react'


function Login() {
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const{user,setUser}=useContext(UserContext);
    const handlesubmit=(e)=>{
   e.preventDefault();
   setUser({username,password});

    }

  return (
    <>
    <h2>Welcome to website</h2>
    <h3>PLease proceed the login</h3>
    <input type="text" 
    value={username}
    onChange={(e)=>setUsername(e.target.value)} placeholder='username'/>
    <input type="text"
    value={password}
    onChange={(e)=>setPassword(e.target.value)} placeholder="password" />
    <button onClick={handlesubmit}>login</button>




    </>

  
    
  )
}

export default Login