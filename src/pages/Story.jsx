import { motion } from 'framer-motion';
import { BreakLine } from '../components';
import '../styles/Story.scss';
motion
const Story = () => {
  return (
    <>
   
    <motion.div className="story"
    
    initial={{ opacity: 0 }}
    animate= {{ opacity: 1 }}
    transition={{ duration: 1 }}
 
    >
       <picture className='dec'>
    <img src="src\assets\DecotartionBg.png" alt="" />
    </picture>
    <picture className='dec2'>
    <img src="src\assets\DecotartionBg.png" alt="" />
    </picture>
      <h1>Historia <hr/></h1>
      Tengo demasiadas cosas para escribir. Podría estar todo el día, todos los días, hasta que llegue el 22. Pero se me haría el texto demasiado largo. Estoy escribiendo todo esto de una sola tirada e incluso así, creo que voy a dejar bastante texto. <br/> Pero siempre le doy importancia a lo primero que se me cruza por la cabeza, y con vos no tengo muchas cosas que pensar, las tengo bien claras; son todas palabras de amor.
    </motion.div>
    <BreakLine/>
    <section className='cont'>
    <h1>Está historia va a continuar</h1>
    <p>Podría contar toda la historia que tuvimos juntos. Pero creo que vos más que nadie ya la sabes. Puse unas cuantas fotos nuestras arriba, para que las fotos hablen por sí solas, aunque todavía eso no sea suficiente.</p>
    </section>
    </>
  )
}

export default Story