import React from 'react'
import '../styles/End.scss'
import { motion } from 'framer-motion'

const End = () => {
  return (
  <>
      <motion.section className='end'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      >
        
      <h1>No hay final Amor</h1>
      <p>La verdad es que no hay ningún final, pienso en que sigamos juntos, por otros años más, hasta los que nos dé el cuerpo. <br/><b>Te amo y eso va a seguir</b> ahora, después y hasta lo que querramos. No te traje rosas, ni un ramo, pero si te pude traer esto que no se va a deteriorar jamás, que son mis palabras plasmadas en esto, que es una especie de carta, pero como no sé escribir, lo hago de esta manera. Así que te dedico esto y otras cositas más que están ocultas en la página.</p>
        <motion.div className='bgEnd'
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ duration: 1 }}
        >

        </motion.div>
      </motion.section>
 </>
  )
}

export default End