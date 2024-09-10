
import SignUp from 'components/signup/SignUp'
import React from 'react'
import { Link } from 'react-router-dom'
import './contactStyle.css'

function Contact() {

  return (
    <div className='wrapper-contact'>
    <div className='wrapper-contact_title'>
      <h1>Контакты</h1>
       <p> 
        Оставьте свои контакты и мы с вами свяжемся
      </p>
    </div>
      
      <form action='submit'>
        
        <input placeholder='Имя'></input>
        <input placeholder='Email'></input>
        <button type='submit'>Отправить</button>
      </form>
     
    </div>
  )
}


export default Contact
