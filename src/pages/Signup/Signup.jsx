import React from 'react'
import './Signup.css'

function Signup() {
  return (
    <div className="signup">
      <h1>Signup</h1>

      <input type="text" placeholder="Enter Name" />
      <br />

      <input type="email" placeholder="Enter Email" />
      <br />

      <input type="password" placeholder="Enter Password" />
      <br />

      <input type="password" placeholder="Confirm Password" />
      <br />

      <button>Signup</button>
    </div>
  )
}

export default Signup
