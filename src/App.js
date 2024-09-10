import { Route, Routes} from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Header from './Header/Header.jsx'
import Home from './pages/Home/Home';
import Registracion from './components/Authorization/Registracion';
import LoginPage from './components/Authorization/LoginPage';
import AdminMain from 'Admin/page/AdminMain';
import Contact from 'pages/Contact/Contact';
import Footer from 'Footer/Footer';

function App() {
  return (
     <>
        <Header></Header>
          <Routes> 
            <Route path = '/login' element = {<LoginPage/>}></Route>
            <Route path = '/register' element = {<Registracion/>}></Route>
            <Route path = '/contacts' element = {<Contact/>}></Route>
           
          

            <Route path='/' element={<Home/>}></Route>            
            <Route path = '/admin' element = {<AdminMain/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            
            <Route path = '*' element = {<div>404 Not Found</div>}></Route>
         
          </Routes>
         
       
      </>
 
 
  );
}

export default App;
