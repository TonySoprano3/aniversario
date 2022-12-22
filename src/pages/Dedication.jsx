import React from 'react'
import '../styles/Dedication.scss'
import Kirbys from '../assets/Kirbys.png'
import { motion } from 'framer-motion'

const Dedication = () => {
  return (
    <motion.div className='dedication'
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
    
      <motion.img src={Kirbys} alt="Kirbys"
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotate: -360}}
      transition={{ duration: 1.5 }}
      />
      <motion.article className='dText'
          initial={{ translateY: 1000}}
          animate={{ translateY: 0 }}
          transition={{ duration: 1.5 }}
      >
 
   

      <h1>Te dedico</h1>
      <p>Esta aplicación, que aprendí bastante cosas y me estrese bastante haciendola, pero incluso así siento que es insuficiente y no es digna de vos. Perdón por no ser tan bueno, pero créeme que lo intento. Por eso te la dedico, estas páginas que estuve haciendo estos días, pensnado en qué podría gustarte más o menos. Seguramente te hubiese gustado otra cosa pero, siempre te he regalado cosas materiales, nunca te di algo hecho con mis propias manos, y esto es lo que mejor sé hacer por ahora. Cada mejora que tenga vas a verla reflejada en nosotros.</p>
      </motion.article>
    </motion.div>
  )
}

export default Dedication