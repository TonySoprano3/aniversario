import {motion } from 'framer-motion'
import { BreakLine } from '../components'
import '../styles/Home.scss'
import Hearth from '../assets/Hearth.png'
import FirtsPhoto from '../assets/Foto1.jpg'
const Home = () => {
  return (
    <>
    <motion.img className='hrt' loading='lazy'  src={Hearth}  alt="Hearth"
    transition={{ type: 'spring', bounce: 0.3 ,duration: 4}}
   
    animate={{scale: [1,2,2.5,3,0],
      rotate: 360,
      end: false ,opacity: 0
    }}
    
  
  
    />
    <motion.header className='home'

        initial={{ opacity: 0 }}
        animate= {{ opacity: 1 }}
        transition={{ duration: 3.5 }}
        >
      <section className='text'>
    <h1>Hola Amor, Feliz Aniversario<hr/></h1>
    
     <p> Espero que todo esté saliendo bien y cuando leas esté mensaje la página se vea decente. Estoy escribiendo esto el 2 de Diciembre, tendría que haber comenzado antes a hacerla, pero bueno. Recién ahora se me ocurrió esta idea, y por más que tenga la idea tengo que pensar en todo el diseño y lo demás. Esta página podría ser infinita y no terminarla más por todas las cosas que podría escribir y estilar, pero voy a hacerla hasta donde el tiempo me dé y me sienta más conforme, seguramente me dé verguenza el resultado final porque nunca estoy conforme y más con vos que te mereces mucho más que esto.</p>
     💕
     </section>
     <aside className='ph-as'
  
     >
    <img src={FirtsPhoto}  alt="Photo" loading='lazy' />
   Foto tomada el 9 de Octubre del 2022
   </aside>
  
    </motion.header>
    <BreakLine />
       <section className='thx'>
        <img src={Hearth} loading='lazy'/>
       <p> Me alegro tanto de que hayamos llegado a esta instancia. Yo sinceramente soy una persona con mucho miedo por dentro, impulsivo. Al principio no tenía fe, pero vos me llenaste las dudas con certezas; después de que en cada pelea me dabas lugar para que dialoguemos lo sucedido. Así pudimos mejorar día a día, tratarnos cada vez mejor y ser la pareja que somos hoy en día. Tenés mucho mérito, demasiado. Yo trato de equipararme en otras cosas, pero vos has sido el puente a esta relación.<br/>
       <hr/>
       <b>Me alegro de todo lo que aprendí con vos</b> 
         </p>
      </section>
      </>
  )
}

export default Home