import React from 'react'
import './styleCategories.css'
import PropTypes from 'prop-types';


function CategoriesAdmin({adminCategories}) {

  return (
    <div className='category-block'>
      <h4>{adminCategories.nameCategory}</h4>
    </div>
  )
}

MyComponent.propTypes = {
  adminCategories: PropTypes.object,
};

export default CategoriesAdmin
