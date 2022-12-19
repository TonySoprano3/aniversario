import { motion } from 'framer-motion';
import { BreakLine } from '../components';
import '../styles/Story.scss';
import Decoration from '../assets/DecotartionBg.png'
const Story = () => {
  return (
    <>
   
    <motion.div className="story"
    
    initial={{ opacity: 0 }}
    animate= {{ opacity: 1 }}
    transition={{ duration: 1 }}
 
    >
       <picture className='dec'>
    <img src={Decoration} loading='lazy' alt='PhothoDec'/>
    </picture>
    <picture className='dec2'>
    <img src={Decoration} loading='lazy' alt='PhtoDec'/>
    </picture>
      <h1>Historia <hr/></h1>
      <p>
      Tengo demasiadas cosas para escribir. Podría estar todo el día, todos los días, hasta que llegue el 22. Pero se me haría el texto demasiado largo. Estoy escribiendo todo esto de una sola tirada e incluso así, creo que voy a dejar bastante texto. Pero siempre le doy importancia a lo primero que se me cruza por la cabeza, y con vos no tengo muchas cosas que pensar, las tengo bien claras; son todas palabras de amor.</p>
    </motion.div>
    <BreakLine/>
    <section className='cont'>
    <h1>Está historia va a continuar</h1>
    <hr/>
    <p>Podría contar toda la historia que tuvimos juntos. Pero creo que vos más que nadie ya la sabes. Puse unas cuantas fotos nuestras arriba, para que las fotos hablen por sí solas, aunque todavía eso no sea suficiente para poder describir todo lo que siento por vos, esate día y todos los 365 anteriores; más los que vendrán.<br/> Espero que pueda seguir haciendo esta página el año que viene, mejorandola y poniendo nuevas fotos, que siga el futuro, que parece muy bueno para nosotros.</p>
    <h1 className='hStory'>No puedo esperar más</h1>
    <p>A que sigamos por un mismo rumbo, pero con un camino diferente.
      Siempre te voy a apoyar y ayudar, como vos haces conmigo. 
      Somos una pareja, nos complementamos, aprendemos uno del otro y eso es lo mejoran de estar juntos. Hacemos de todo para seguir estando juntos y lo vamos a hacer. Es impresionante lo rápido que pasó este año.<br/>
      💕
     </p>
    
    </section>
    </>
  )
}

export default Story