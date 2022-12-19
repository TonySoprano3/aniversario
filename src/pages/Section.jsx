import React from 'react'
import '../styles/Section.scss'
import Kirby from '../assets/Kirby.jpg'
const Section = () => {
  return (
    <section className='section'>
      <img src={Kirby} alt="Kirby" />
   <p>
    Nadie sabe que va a pasar después. Así que te dejo una página llena de Kirby's. Esperemos que sea otro año bueno, con vos eso es seguro, pero bueno, nunca están de más unos Kirby's
    </p>
    </section>
   

  )
}

export default Section