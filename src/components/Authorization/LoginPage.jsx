import React from 'react'
import { Link } from 'react-router-dom'
import Login from '../signup/Login'
import './main.css'

function LoginPage() {
  return (
    <div className='wrapper-center'>
      <h1>Войти</h1>
      <Login></Login>
      <p>
        <Link to='/register'>Зарегистрироваться</Link>
      </p>
    </div>
  )
}

export default LoginPage
