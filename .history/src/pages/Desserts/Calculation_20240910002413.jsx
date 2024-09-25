import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './css/main.css'

 
function Calculation() {
 let arr = [{name:'barxat', cost:30},
              {name:'white', cost:10},
              {name:'chokolate', cost:25},
              
             ]



  const [cost, setCost] = useState(0)
  const handleChange = (e) => {
    for (var key in arr) {
      console.log(arr[key].name);
     if(e.target.name === arr[key].name){
     if(e.target.checked){
          setCost(cost + arr[key].cost)
        }else{
          setCost(cost - arr[key].cost)
        }
    }
  }

       
    console.log(e.target.checked);
    console.log(cost);
  }
  return (
    <div className='calculation'>
      <h3>Расчитай стоимость</h3>
      <div>
      <h4>Корж</h4>
        <label><input type='checkbox' name='barxat' onChange={e => handleChange(e)}/>Бархат</label>
        <label><input type='checkbox' name='white' onChange={e => handleChange(e)}/>Белый</label>
        <label><input type='checkbox' name='chokolate' onChange={e => handleChange(e)}/>Шоколадный</label>
      </div>

      <div>
      <h4>Крем</h4>
        <label><input type='checkbox' name='krem-chiz' onChange={e => handleChange(e)}/>Крем-чиз</label>
        <label><input type='checkbox' name='krem-plombir' onChange={e => handleChange(e)}/>Пломбир</label>
        <label><input type='checkbox' name='krem-jelly' onChange={e => handleChange(e)}/>Желе</label>
      </div>

      <div>
      <h4>Украшения</h4>
        <label><input type='checkbox' name='decor-minimalizm' onChange={e => handleChange(e)}/>Минимализм</label>
        <label><input type='checkbox' name='decor-cream' onChange={e => handleChange(e)}/>Украшение кремом</label>
        <label><input type='checkbox' name='decor-sugar' onChange={e => handleChange(e)}/>Сахарные фигурки</label>
      </div>

      <h3>Ориентировочная стоимость:{cost}</h3>
      <p>Окончательную стоимость можно узнать после того, как обговорите все нюансы с кондитером</p>
      <button ><Link to="/contacts" >Узнать итоговую стоимость</Link></button>
     
    </div>
  )
}

export default Calculation
