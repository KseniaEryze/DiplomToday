import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Form from './Form'
import {setUser} from 'store/slices/userSlice'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUp() {
    const dispatch = useDispatch()
    let navigate = useNavigate()
   
    const handleRegister = (email, password) => { 
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((user) => {
          console.log(user)
          dispatch(setUser({
            email:user.email,
            id: user.id,
            token: user.accessToken,
          }));
          navigate('/', { replace: true })

        }).catch(console.error)
    }
  return (
    <Form
        title='Регистарция'
        handleClick={handleRegister}
    />
  )
}

export default SignUp
