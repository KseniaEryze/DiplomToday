import React, { useState, useEffec, useMemo } from 'react'

import categery_tort from './img/hazelnut layer cake w_ fig compote + (vegan) cream cheese frosting — dolly and oatmeal (1).jpg'
import categery_motty from './img/Private Site.jpg'
import Categories from 'components/Categories/Categories'
import Calculation from 'pages/Desserts/Calculation'
import './main.css'
import ItemPoap from 'components/Popap/ItemPoap'
import { Link } from 'react-router-dom'
import ItemProduct from 'components/ItemProduct/ItemProduct'
import Pagination from 'pagination/pagination'
import { v4 as uuidv4, v4 } from 'uuid';




let datas = [
  {id:1, title: 'Торт обычный', derection: 'из чего состоит', cost: 6, img:categery_tort, category:'cake'},
  {id:2, title: 'Торт обычный2', derection: 'из чего состоит2', cost: 6, img:categery_tort, category:'cake'},
  {id:3, title: 'Торт обычный3', derection: 'из чего состоит', cost: 6, img:categery_tort, category:'cupcake'},
  {id:4, title: 'Торт обычный4', derection: 'из чего состоит', cost: 6,  img:categery_tort, category:'mochi'},
  {id:5, title: 'Торт обычный5', derection: 'из чего состоит', cost: 6,  img:categery_motty, category:'mochi'},
  {id:6, title: 'Торт обычный', derection: 'из чего состоит', cost: 6, img:categery_tort, category:'cake'},
  {id:7, title: 'Торт обычный2', derection: 'из чего состоит2', cost: 6, img:categery_tort, category:'cake'},
  {id:8, title: 'Торт обычный3', derection: 'из чего состоит', cost: 6, img:categery_tort, category:'cupcake'},
  {id:9, title: 'Торт обычный4', derection: 'из чего состоит', cost: 6,  img:categery_tort, category:'mochi'},
  {id:10, title: 'Торт обычный5', derection: 'из чего состоит', cost: 6,  img:categery_motty, category:'mochi'},

]
const cartItems = [
  {id:1, title: 'Торт обычный5', derection: 'из чего состоит', cost: 6,  img:categery_motty, category:'mochi',quantity: 2},
  {id:2, title: 'Торт обычный5', derection: 'из чего состоит', cost: 6,  img:categery_motty, category:'mochi',quantity: 2},
  {id:3, title: 'Торт обычный5', derection: 'из чего состоит', cost: 6,  img:categery_motty, category:'mochi',quantity: 2},

]



function Home() {

  let retString = localStorage.getItem("info")
  let retBasket = localStorage.getItem("basketItem")
  let retArrayBasket = JSON.parse(retBasket)
  let retArray = JSON.parse(retString)
  
  const [modalActive, setPropsActive] = useState(false)
  const [popap, setPopap] = useState({title:'', derection:'', cost:0, img:'', category:''})
  const [chooseCategoryItem, setChooseCategoryItem] = useState(retArray)
  const [todos, setTodos] = useState(retArray)
  const [basket, setBasket] = useState(retArrayBasket)
   
  let dataLocal = JSON.stringify(todos)
  localStorage.setItem("info", dataLocal)
  let dataBasket = JSON.stringify(basket)
  localStorage.setItem("basketItem", dataBasket)
  let PageSize = 6;

const [currentPage, setCurrentPage] = useState(1);

  const currentTableData = useMemo(() => {
   
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return chooseCategoryItem.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, chooseCategoryItem]);

     

const chooseCategory = (category) =>{

  console.log(category)
  if(category === 'all'){
    setChooseCategoryItem(todos)
  }else if (category === undefined){
    setChooseCategoryItem(todos)  }
  else{
    setChooseCategoryItem(todos.filter((el) =>  el.category === category))
  }
}
const popapItem = (item) => {
  setPropsActive(true)
  setPopap({id:v4(), title:item.title, derection:item.derection, cost:item.cost, img:item.img, category:item.category})

}



  return (
    <div className='wrapper-home'>
    <section className='block_header'>
      <div className='block_header-info'> 
          <h1>Торты и другие <br></br>сладости</h1>
          <p>г. Гродно</p>
          
          
              <button><Link to="/contacts">Контакты</Link></button>
          
      </div>
    </section>
    <section className='category'>
          <h2>Каталог</h2>
          <p>пнаеквуыцужэл
          ддзлщошргнаеворпнекворпмасвчаспмролдзжх</p>
          
          <Categories chooseCategory={chooseCategory}></Categories>
        
          <div className='category_list'> 
          
            <div className='little-block'>
             
              <ItemProduct items = {chooseCategoryItem} popapItem = {popapItem} setPropsActive={setPropsActive} currentTableData={currentTableData} currentPage={currentPage}></ItemProduct>
              
            </div>
            <Calculation></Calculation>
         
          </div>
          <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={dataLocal.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)}
      />
         <ItemPoap active={modalActive} setPropsActive={setPropsActive} popap={popap}></ItemPoap>
    </section>
  
    
  </div>
  )
}

export default Home
