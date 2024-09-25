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
  function handlerClick() {
    // Получить текущее содержимое корзины из localStorage
    let currentCart = JSON.parse(localStorage.getItem('basketItem')) || []; 
    
    // Добавить новый товар
    currentCart.push(newItem);
  
    // Сохранить обновленную корзину в localStorage
    localStorage.setItem('cart', JSON.stringify(currentCart));
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
            {/* <button>
              
              <Link to="/contacts">Заказать</Link>
            </button> */}
            <button onClick={() => handlerClick()}>Заказать</button>
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
