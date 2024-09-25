import React from 'react';
import './main.css'

const Basket = ({ handleRemoveItem }) => {
    let retBasket = localStorage.getItem("basketItem")
    let retArrayBasket = JSON.parse(retBasket)
 
      return (
        <div className="cart">
          <h2>Корзина</h2>
          {retArrayBasket.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.title}</p>
              <p>{item.price} руб.</p>
              <p>Количество: {item.quantity}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Удалить</button>
            </div>
          ))}
          <p className="total-price">Общая стоимость: {retArrayBasket.reduce((acc, item) => acc + item.price * item.quantity, 0)} руб.</p>
        </div>
      );
    };
    
    export default Basket;