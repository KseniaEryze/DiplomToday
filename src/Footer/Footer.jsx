import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

function Footer() {
  return (
    
    <footer>
      <div className='footer'>
      <div> <h4>Контакты</h4>
        <div>
          <p>тел.   +376553985647</p>
          
          <ul class="social-icons">
            <li><a class="twitter" href="#"><i class="fab fa-twitter"></i></a></li>
            <li><a class="dribbble" href="#"><i class="fab fa-dribbble"></i></a></li>
            <li><a class="linkedin" href="#"><i class="fab fa-linkedin-in"></i></a></li>
          </ul>
        </div>
      </div>
       
     
      <div>
        <h3>Tort`el</h3>
      </div>
      <div> 
        <h4>Меню</h4>
        <ul>
             <li>
                 <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/about">About</Link>
             </li>
             <li>
                 <Link to="/desserts">Desserts</Link>
             </li>
            
         </ul> 
       
      </div>
       </div>
    </footer>
    
  )
}

export default Footer
