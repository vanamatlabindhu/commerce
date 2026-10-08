import React, { useState } from 'react'
import './Login.css'

function Login() {
  let [email,setEmail]=useState();
  let [password,setPassword]=useState();
}
  function submit(){
    fetch("API",{
      method:"POST",
      body:JSON.stingify({
        email:email,
        password:password
      })
    })
    .then(res=>{
      return res.json()
    })
  return (
    <div className="login">
      <h1>Login</h1>

      <input type="email" placeholder="Enter Email" />
      <br />

      <input type="password" placeholder="Enter Password" />
      <br />

      <button>Login</button>
    </div>
  )
}

export default Login