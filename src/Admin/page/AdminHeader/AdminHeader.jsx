import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

function AdminHeader() {
  return (
    <div className='admin-wrapper_menu'>
    <h3>Меню</h3>
    
    <ul>
            <li className='admin-menu'>
                 <Link to="/admin">Home</Link>
                 <hr></hr>
             </li>
              <li className='admin-menu'>
               <Link to="/admin">About</Link>
               <hr></hr>
             </li>
             
             <li className='admin-menu'>
                 <Link to="/admin">Admin</Link>
                 <hr></hr>
             </li>
        </ul>
    </div>
  )
}

export default AdminHeader
