import React from 'react'
import { useDispatch } from 'react-redux'
import Form from './Form'
import {setUser} from 'store/slices/userSlice'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate} from 'react-router-dom'

function Login() {
    const dispatch = useDispatch()
    let navigate = useNavigate()


    const handleLogin = (email, password) => { 
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
        .then(({user}) =>{
          if(email === 'maks1@gmail.com' && password === 'AUGwQQibRiMgZ0p6H8aLctnZjkG2'){
              navigate('/admin', { replace: true })
          }else{navigate('/', { replace: true })}
      
        
        }).catch(console.error) 
    }
    
  return (
    <div>
      <Form 
        title='Войти'
        handleClick={handleLogin}
      ></Form>
    </div>
  )
}

export default Login
