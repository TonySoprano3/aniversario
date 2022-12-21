import React from 'react'
import '../styles/Dedication.scss'
import Kirbys from '../assets/Kirbys.png'
const Dedication = () => {
  return (
    <div className='dedication'>
    
      <img src={Kirbys} alt="Kirbys"  />
      <article className='dText'>
      <h1>Te dedico</h1><hr/>
      <p>Esta aplicación, que aprendí bastante cosas y me estrese bastante haciendola, porque siento que es insuficiente y no es digna de vos. Perdón por no ser tan bueno, pero créeme que lo intento. Por eso te la dedico, estas páginas que estuve haciendo estos días, pensnado en qué podría gustarte más o menos. Seguramente te hubiese gustado otra cosa pero, siempre te he regalado cosas materiales, nunca te di algo hecho con mis propias manos, y esto es lo que mejor sé hacer por ahora. Cada mejora que tenga vas a verla reflejada en nosotros.</p>
      </article>
    </div>
  )
}

export default Dedication