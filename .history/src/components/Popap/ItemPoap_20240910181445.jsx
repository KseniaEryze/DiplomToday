import React from 'react'
import './modal.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const ItemPoap = ({active, setPropsActive, popap}) => {
 
  function handlerClick() {
  
    // Получить текущее содержимое корзины из localStorage
    let retBasket = JSON.parse(localStorage.getItem('basketItem')) || []; 
    
    // Добавить новый товар
    retBasket.push(popap);
    
    // Сохранить обновленную корзину в localStorage
    localStorage.setItem('basketItem', JSON.stringify(retBasket));
    <Link to="/basket">Корзина</Link>
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
