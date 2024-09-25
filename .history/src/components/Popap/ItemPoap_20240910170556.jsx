import React from 'react'
import { Link } from 'react-router-dom'
import './modal.css'
import PropTypes from 'prop-types';
import Basket from 'pages/Basket/Basket';


const ItemPoap = ({active, setPropsActive, popap}) => {
  
  const handlerClick = () => {
    let retBasket = localStorage.getItem("basketItem")
    let retArrayBasket = JSON.parse(retBasket)
    retArrayBasket.push(popap)
  }


  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setPropsActive(false)}>
       <div className='modal__content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-wrapper_content'>
          <img src={popap.img}></img>
          <div className='modal-wrapper_text'>
          <h3> {popap.title}</h3>
            <p>Ингридиенты: {popap.derection}</p>
            <p>Стоимость: {popap.cost}</p>
            <button>
              
              <Link to="/contacts">Заказать</Link>
            </button>
            {/* <button onClick={() => order()}>Заказать</button> */}
          </div>
          
        </div>
        
       
      </div>
    </div>
   
  )
}

ItemPoap.propTypes = {
  active: PropTypes.string,
  setPropsActive: PropTypes.func,
  popap:PropTypes.object
};

export default ItemPoap
