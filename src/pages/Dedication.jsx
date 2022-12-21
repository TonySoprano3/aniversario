import React from 'react'
import '../styles/Dedication.scss'
import Kirbys from '../assets/Kirbys.png'
const Dedication = () => {
  return (
    <div className='dedication'>
    
      <img src={Kirbys} alt="Kirbys"  />
      <article className='dText'>
      <h1>Te dedico</h1><hr/>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, accusamus tempora explicabo dolorum unde culpa officiis. Sed iusto quidem enim ullam consequatur quae sint, qui harum facilis voluptatum magnam aliquam.</p>
      </article>
    </div>
  )
}

export default Dedication