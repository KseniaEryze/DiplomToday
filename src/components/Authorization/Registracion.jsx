import React from 'react'
import { Link } from 'react-router-dom'
import SignUp from '../signup/SignUp'

function Registracion() {
  return (
    <div className='wrapper-center'>
      <h1>Регистарция</h1>
      <SignUp></SignUp> 
      <p> 
        Вы уже зарегистрированы? <Link to='/login'>Войти</Link>
      </p>
    </div>
  )
}

export default Registracion
