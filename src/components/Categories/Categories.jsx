import React, { Component } from 'react'
import '../../components/Categories/categories.css'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state={
            categories:[
                {
                    key: 'all', 
                    name: 'Все', 
                    
                },
                {   
                    key: 'cake',
                    name: 'Торт',  
                    
                },
                {
                    key: 'cupcake', 
                    name: 'миниторт',  
                   
                },
                {
                    key: 'mochi', 
                    name: 'Моти', 
    
                }
              ]
        }
        console.log(props)
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => 
            <div className='categoriesItem' key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        )}
      </div>
    )
  }
}

export default Categories
