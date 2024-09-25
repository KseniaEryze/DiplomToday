import React, { useState } from 'react'
import AdminHeader from './AdminHeader/AdminHeader'
import './adminMain.css'
import CategoriesAdmin from 'Admin/component/CategoriesAdmin'
import { v4 as uuidv4, v4 } from 'uuid';

console.log()
function AdminMain() {

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [cost, setCost] = useState('')
  const [category, setCategories] = useState('')  
  const [image, setImage] = useState('')

// console.log(name,description,cost,category,image)
  const adminCategories = [
    {id:1, nameCategory:'Категория 1'},
    {id:2, nameCategory:'Категория 2'},  
    {id:3, nameCategory:'Категория 3'}
  ]


const handleSubmit = (e) => {
    // e.preventDefault()

    const myObj = {id:v4(), title:e.target[0].value, derection:e.target[1].value, cost:e.target[2].value, category:e.target[3].value, img:e.target[4].value}
    var oldItems = JSON.parse(localStorage.getItem('info')) || [];
    oldItems.push(myObj); 
    localStorage.setItem('info', JSON.stringify(oldItems));
}



  return (

    <div className='wrapper-adminPage'>
      <AdminHeader></AdminHeader>
      <div className='wrapper-content'>
        <h1>Админ панель</h1>
        <div className='wrapper-adnin_categorisMenu'>
          {adminCategories.map(categoriesAdmin => <CategoriesAdmin key={categoriesAdmin.key} adminCategories={categoriesAdmin}></CategoriesAdmin> )}
        </div>
      <h3>Добавление десерта</h3>
     <form onSubmit={handleSubmit}>
        
       
        <input name="Название торта'" 
                 value={name}
                 onChange={(e) => setName(e.target.value)}
                 placeholder = 'Название торта'/>
     
      
          <input name="Описание" 
                 value={description}
                 onChange={(e) => setDescription(e.target.value)}
                 placeholder = 'Описание'/>
    
      
          <input name="Стоимость" 
                 value={cost}
                 onChange={(e) => setCost(e.target.value)}
                 placeholder = 'Стоимость'/>
     
          <input name="Категория" 
                 value={category}
                 onChange={(e) => setCategories(e.target.value)}
                 placeholder = 'Категории'/>
     
          <input type="file" 
                 value={image}
                 onChange={(e) => setImage(e.target.value)}
                 placeholder = 'Картинка'/>
          <button type="submit" >Добавить</button>
      
       </form>     
      </div>
    </div>
  )
}

export default AdminMain
