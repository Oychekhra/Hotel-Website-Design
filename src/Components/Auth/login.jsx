import React from 'react'
import { LoginWrapper } from './style'
import Background from '../../Assets/background.jpg'


const LoginComponent = () => {
  return (
    <LoginWrapper style={{backgroundImage: `url(${Background})`}}>
        <h1>Login</h1>
        <form>
            <input type="text"  name="ID" placeholder='E-mail address'/>
            <input type="password"  name="password" placeholder='Password'/>
            <button>Login</button>
        </form>
    </LoginWrapper>
  )
}

export default LoginComponent
