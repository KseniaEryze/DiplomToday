
import React, { Component, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './item.css'



interface Item {
  id: number;
  name: string;
  price: number;
}

interface Props {
  items: Item[];
  popapItem: Item | null;
  currentTableData: Item[];
}

const ItemProduct: React.FC<Props> = ({ items, popapItem, currentTableData }) => {
  // Ваш код компонента здесь

// function ItemProduct({items, popapItem, currentTableData}) {  

    if(items.length === 0){
     console.log('dwelkelkndewlknl')
    }
  
    return (
      <div>
        <div className='wrapper_item'>
       { 
        
        currentTableData.map(el => 
      <div className='item' key={el.key}>
          <img src={el.img}></img>
          <h3>{el.title}</h3>
          <p>{el.derection}</p>
          <div className='cost'> 
               <p>Стоимость: {el.cost}</p>
                 </div> 
          <button  key={el.key} onClick={() => popapItem(el)}>Подробнее</button>
       
     
      </div>)
    }
      </div>
      </div>
    )
  }


export default ItemProduct
