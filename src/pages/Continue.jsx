import React from 'react'
import '../styles/Continue.scss'
import Kirby from '../assets/Kirby.webp'
import BgKirby from '../assets/anniversary-bg.webp'
import { motion } from 'framer-motion'

const Section = () => {
  return (
    <motion.section className='section'
    initial={{opacity:0}}
    animate={{opacity:1}}
    transition={{ duration:1 }}
    >
      <motion.img src={Kirby} alt="Kirby" 
      initial={{ translateX: -1000 }}
      animate={{ translateX: 0, rotate: 360 }}
      transition={{ duration: 1.5 }}
      />
   <motion.p
   initial={{ translateX: 1000 }}
   animate={{ translateX: 0 }}
   transition={{ duration: 1.5 }}
   >
    Nadie sabe que va a pasar después. Así que te dejo una página llena de Kirby's. Esperemos que sea otro año bueno, con vos eso es seguro. Nunca están de más unos Kirby's
    </motion.p>
    </motion.section>
   

  )
}

export default Section