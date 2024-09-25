import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/main.css'

function Calculation() {
  const [cost, setCost] = useState(0);

  const items = [
    // Корж
    { name: 'Бархат', cost: 30, group: 'Корж' },
    { name: 'Белый', cost: 10, group: 'Корж' },
    { name: 'Шоколадный', cost: 25, group: 'Корж' },
    // Крем
    { name: 'Крем-чиз', cost: 15, group: 'Крем' },
    { name: 'Крем-Пломбир', cost: 20, group: 'Крем' },
    { name: 'Крем-Брюле', cost: 18, group: 'Крем' },
    // Украшения
    { name: 'Минимализм', cost: 5, group: 'Украшения' },
    { name: 'Декор-Кремовый', cost: 12, group: 'Украшения' },
    { name: 'Декор из сахара', cost: 28, group: 'Украшения' }
  ];

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    const item = items.find(i => i.name === e.target.name);

    if (isChecked) {
      setCost(cost + item.cost);
    } else {
      setCost(cost - item.cost);
    }
  };

  return (
    <div className='calculation'>
      <h3>Расчитай стоимость</h3>
      {items.reduce((acc, item) => {
        if (acc.some(a => a.group === item.group)) {
          // Если группа уже добавлена, добавить только checkbox
          acc[acc.findIndex(a => a.group === item.group)].checkboxes.push(
            <label key={item.name}>
              <input
                type='checkbox'
                name={item.name}
                onChange={e => handleChange(e)}
              />
              {item.name}
            </label>
          );
        } else {
          // Добавить группу и первый checkbox
          acc.push({
            group: item.group,
            checkboxes: [
              <label key={item.name}>
                <input
                  type='checkbox'
                  name={item.name}
                  onChange={e => handleChange(e)}
                />
                {item.name}
              </label>
            ]
          });
        }
        return acc;
      }, []).map((group, index) => (
        <div key={index}>
          <h4>{group.group}</h4>
          {group.checkboxes}
        </div>
      ))}

      <h3>Ориентировочная стоимость: {cost}</h3>
      <p>Окончательную стоимость можно узнать после того, как обговорите все нюансы с кондитером</p>
      <button ><Link to="/contacts" >Узнать итоговую стоимость</Link></button>
    </div>
  )
}

export default Calculation