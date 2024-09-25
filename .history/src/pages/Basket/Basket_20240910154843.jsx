import React from 'react';
import './main.css'

const Basket = ({  popap, handleRemoveItem }) => {
    
    const cartItems = [
        {id:1, name:'Торт1', price:'20р', quantity: 1},
        {id:2, name:'Торт2', price:'40р', quantity: 3},
        {id:3, name:'Торт3', price:'20р', quantity: 2}
    ]
      return (
        <div className="cart">
          <h2>Корзина</h2>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.name}</p>
              <p>{item.price} руб.</p>
              <p>Количество: {item.quantity}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Удалить</button>
            </div>
          ))}
          <p className="total-price">Общая стоимость: {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)} руб.</p>
        </div>
      );
    };
    
    export default Basket;