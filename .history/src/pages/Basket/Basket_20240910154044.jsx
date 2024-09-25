import React from 'react';

const Basket = ({  popap, handleRemoveItem }) => {
    
    const cartItems = [
        {id:1, name:Торт1, price:'20р',quantity}]
  return (
    <div>
      <h2>Корзина</h2>
      {cartItems.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.price} руб.</p>
          <p>Количество: {item.quantity}</p>
          <button onClick={() => handleRemoveItem(item.id)}>Удалить</button>
        </div>
      ))}
      <p>Общая стоимость: {cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)} руб.</p>
    </div>
  );
};

export default Basket;
