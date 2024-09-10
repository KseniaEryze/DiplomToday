import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './img/logoBlack.png'
import './header.css'
import menu from './img/hamburger.png'

function Header() {
  const [accountAuth, setAccountAuth] = useState(false)
  const [isOpen, setIsOpen] = useState()
  return (
    <div className='header'>
        
      <div className='logo'>
          <img  src={logo}/>
      </div>
          
      <nav className={`header_nav ${isOpen ? `active` : ``}`}>    
          <ul className='header_nav-list'>
             <li className='header_nav-item'>
                 <Link to="/">Главная</Link>
             </li>

             <li className='header_nav-item'>
               <Link to="/about">О нас</Link>
             </li>
             
             <li className='header_nav-item'>
               <Link to="/contacts">Контакты</Link>
             </li>
              <li className='header_nav-item wrapper-login'>
                <Link to="/register" accountAuth={accountAuth}>Регистрация</Link>
              </li>              
              <li className='header_nav-item'>              
                <Link to="/login"> Авторизация </Link>
              </li>
            </ul> 
         </nav>
         <button className='header_menu-button' onClick={() => setIsOpen(!isOpen)}></button>
     </div>
   )
 }

 export default Header
