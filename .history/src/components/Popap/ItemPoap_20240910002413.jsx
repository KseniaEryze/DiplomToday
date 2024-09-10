import React from 'react'
import './modal.css'

const ItemPoap = ({active, setPropsActive, popap}) => {
     
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setPropsActive(false)}>
       <div className='modal__content' onClick={(e) => e.stopPropagation()}>
        <div className='modal-wrapper_content'>
          <img src={popap.img}></img>
          <div className='modal-wrapper_text'>
          <h3> {popap.title}</h3>
            <p>Ингридиенты: {popap.derection}</p>
            <p>Стоимость: {popap.cost}</p>
            <button onClick={() => setPropsActive(false)}>Заказать</button>
          </div>
          
        </div>
        
       
      </div>
    </div>
   
  )
}

export default ItemPoap
