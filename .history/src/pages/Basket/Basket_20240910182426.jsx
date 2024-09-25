import React from 'react';
import './main.css'

const Basket = ({ handleRemoveItem }) => {
    
    let retBasket = localStorage.getItem('basketItem')
    let retArrayBasket = JSON.parse(retBasket)
    // let totalPrice = retArrayBasket.map((acc, item) =>  acc.cost)
    function  handleRemoveItem(item) {
        retArrayBasket = retArrayBasket.filter(spy => spy.id !== item);
    }
    console.log(retBasket)
      return (
        <div className="cart">
          <h2>Корзина</h2>
          {retArrayBasket.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.title}</p>
              <p>{item.cost} руб.</p>
              <p>Количество: {item.quantity}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Удалить</button>
            </div>
          ))}
          <p className="total-price">Общая стоимость: 36 руб.</p>
        </div>
      );
    };
    
    export default Basket;