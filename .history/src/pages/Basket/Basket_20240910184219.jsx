import React, { useState } from 'react';
import './main.css'

const Basket = () => {
    
    const [basketItems, setBasketItems] = useState([]);
    
    // Загружаем данные из localStorage при монтировании компонента
    React.useEffect(() => {
        let retBasket = localStorage.getItem('basketItem');
        if (retBasket) {
            setBasketItems(JSON.parse(retBasket));
        }
    }, []); 
    
    // Функция для удаления элемента из корзины
    const handleRemoveItem = (itemId) => {
        const updatedBasket = basketItems.filter(item => item.id !== itemId);
        setBasketItems(updatedBasket);
        localStorage.setItem('basketItem', JSON.stringify(updatedBasket));
    };

    // Вычисляем общую стоимость (учтите, что стоимость может быть 0, если корзина пуста)
    const totalPrice = basketItems.reduce((total, item) => total + (item.cost || 0) * (item.quantity || 0), 0);

    return (
        <div className="cart">
          <h2>Корзина</h2>
          {basketItems.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.title}</p>
              <p>{(item.cost)} руб.</p>
              <p>Количество: {item.quantity}</p>
              <button onClick={() => handleRemoveItem(item.id)}>Удалить</button>
            </div>
          ))}
          <p className="total-price">Общая стоимость: {totalPrice} руб.</p>
        </div>
    );
};

export default Basket;