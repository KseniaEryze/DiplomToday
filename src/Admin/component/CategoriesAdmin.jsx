import React from 'react'
import './styleCategories.css'

function CategoriesAdmin({adminCategories}) {

  return (
    <div className='category-block'>
      <h4>{adminCategories.nameCategory}</h4>
    </div>
  )
}

export default CategoriesAdmin
