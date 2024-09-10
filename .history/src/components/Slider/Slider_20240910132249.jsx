import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './main.css'

function Slider() {
    // const [people, setPeople] = useState(props)
    // const [index, setIndex] = useState(0)
const fadeImages = [
  {
    url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Отзыв',
    namePeople:'Ksenia',
    quole: "Я заказывала торт на день рождения у этого кондитера и осталась очень довольна! Торт был не только красиво оформлен, но и вкусный до последней крошки. Спасибо за отличное качество и профессиональный подход!"
  },
  {
    url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
    caption: 'Отзыв',
    namePeople:'Tatiana',
    quole: "dn;skjnwe;kjfwekj;kfjwbk;jebfkjwbewkjbwkjfbewkjbwf;bwe;kjbfewk;bewkjbfw;kjfbkfjbwekfbwkfbwe;kjbewk;fjbewkjfbwk;fke"
 
  },
  {
    url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    caption: 'Maks',
    namePeople:'Отзыв',
    quole: "dn;skjnwe;kjfwekj;kfjwbk;jebfkjwbewkjbwkjfbewkjbwf;bwe;kjbfewk;bewkjbfw;kjfbkfjbwekfbwkfbwe;kjbewk;fjbewkjfbwk;fke"
 
  },
];

  return (
    <div className="slide-container">
        <h2>Отзывы</h2>
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className='wrapper-slide' key={index}>
            <img className='slide-imade' src={fadeImage.url} />
            <h2>{fadeImage.caption}</h2>
            <p>{fadeImage.namePeople}</p>
            <p>{fadeImage.quole}</p>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default Slider



