import React from 'react'
import photo from '../About/img/photo.png'
import Slider from 'components/Slider/Slider';
import '../../components/Slider/main.css'

import Footer from 'Footer/Footer';
import './about.css'
import Gallery from 'components/Galery/Gallery';
function About() {
  
      
  return (

    <div className='wrapper-about'>
        <div className='about-header'>
            <h1>О нас</h1>
            <p>Описаие нас и наших преимуществ</p>
        </div>

        <section className='wrapper-about_info'>
            <img src={photo}></img>
            <div>
                <h3>Немного обо мне</h3>
                <p> Меня зовут Татьяна, я являюсь опытным кондитером с более чем десятью годами успешной практики в этой замечательной профессии. Моя страсть к кондитерскому искусству началась еще в детстве и позволяет мне постоянно совершенствоваться и радовать вас вкуснейшими десертами.
                    Я работаю над разработкой новых и нестандартных рецептов, училась мастерству создания уникальных декораций и структур, совершенствовуюсь в искусстве работы с мастикой и другими кондитерскими составляющими. Всю свою карьеру я продолжаю максимально улучшать свои навыки.
                    Я всегда стремлюсь к тому, чтобы каждая моя выпечка была не только восхитительно вкусной, но и красивой. Я уделяю особое внимание декорированию, используя различные кремы, глазури, фрукты, ягоды и другие украшения, чтобы сделать каждое блюдо незабываемым. Сейчас я занимаюсь домашней выпечкой и готова наполнить вашу жизнь сладкими моментами.
                </p>
            </div>
            
        </section>
            
        <section> 
        <div className='wrapper-center'>
             <Slider></Slider>
        </div>
           

        </section>
        
        <section>
        
            <div className='wrapper-center'>
                <Gallery></Gallery>
            </div>
        </section>
       
       
          
         
      
    </div>
   
  )
}

export default About
