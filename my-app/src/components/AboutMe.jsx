import React from 'react';
import '../styles/AboutMe.scss';
import picture from '../images/BigSis.jpg'

const AboutMe = () => {
  return (
    <div className='AboutMe'>
        <h2>ABOUT ME</h2>
        <div>
            <img src={picture} alt="" />
            <h4>Nwadinigwe Glory</h4>
        </div>
        <p>
            Hi I'm a dedicated entrepreneur and hair enthusiast who specializes in 
            selling high-quality hair and hair products. With a deep understanding 
            of haircare and a passion for helping individuals feel confident and beautiful, 
            I offer a diverse range of hair extensions, wigs, and accessories to suit every 
            style and preference. I prioritize quality, authenticity, and ethical 
            sourcing, ensuring my customers receive genuine and reliable products. 
            With personalized recommendations and expert advice, I go beyond sales 
            by empowering customers with knowledge about proper haircare routines and maintenance. 
            My ultimate goal is to inspire self-expression and promote self-confidence through the 
            transformative power of hair. Discover a world of endless possibilities for your hair with Me.
        </p>
    </div>
  )
}

export default AboutMe
