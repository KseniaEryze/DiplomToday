import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux';
import {store}  from 'store';
import './firebase';
import Footer from 'Footer/Footer';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Provider store = {store}>
     
          <App />
          <Footer></Footer>
          
    </Provider>
   </BrowserRouter>
</React.StrictMode>
     
 
);

