import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const direction = useNavigate()
    const change = ()=>{
        direction('/about')
    }
  return (
    <div>
      <h1>Login page</h1>
      <button onClick={change}>Submit</button>
    </div>
  )
}

export default Login
