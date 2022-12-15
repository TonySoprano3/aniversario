import { motion } from 'framer-motion';
import React from 'react';
import { NavLink } from 'react-router-dom';

import '../styles/Navbar.scss';

 
const Navbar = () => {

  return (
    <motion.nav
    initial={{ opacity: 0 }}
    animate= {{ opacity: [0,0,0,0,0,0,1] }}
    transition={{ duration: 2 }}

    >
        <audio autoPlay loop={true}>
            <source src='src\assets\Howl.mp4' />
        </audio>
        <label for="menu" className='navLabel'>
            <img src="src\assets\svg-menu.svg" />
        </label>
        <input type="checkbox" id='menu' className='navInput' />
        
        <ul >
            <li>
                <NavLink to ="/">Principio</NavLink>
            </li>
            <li>
                <NavLink to ="/historia">Historia</NavLink>
            </li>
            <li>
                <NavLink to ="/continuacion">Continuación </NavLink>
            </li>
            <li>
                <NavLink to ="/dedicatoria">Dedicatoria</NavLink>
            </li>
            <li>
                <NavLink to ="/final">Final</NavLink>
            </li>
            
        </ul>
      
    </motion.nav>
  )
}

export default Navbar