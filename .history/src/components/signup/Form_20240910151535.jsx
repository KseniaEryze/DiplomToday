import React, { useState } from 'react'
import PropTypes from 'prop-types';


function Form({title, handleClick}) {
  const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

  return (

    <div className='authorization-form'>
    <label>Email</label>
      <input 
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder = 'email'
      />
       <label>Пароль</label>
      <input 
            type='password'
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder ='password'
        />
        <button onClick={() => handleClick(email,pass)}>
            {title}
        </button>
    </div>
  )
}

Form.propTypes = {
  title: PropTypes.string,
  handleClick: PropTypes
};

export default Form
