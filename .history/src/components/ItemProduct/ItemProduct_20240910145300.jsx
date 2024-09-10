
import React, { Component, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './item.css'
import PropTypes from 'prop-types';

function ItemProduct({items, popapItem, currentTableData}) {  

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

  MyComponent.propTypes = {
    items: PropTypes.array,
    popapItem: PropTypes.func,
    currentTableData: PropTypes.number
  };

export default ItemProduct
