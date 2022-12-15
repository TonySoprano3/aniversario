import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Home, Story, NotFound, Dedication, End, Section } from './pages'
import { Navbar } from './components'


function App() {


  return (
    <>
     <Navbar/>
     <Routes >

      <Route path='/' element={<Home/>}/>
      <Route path='/historia' element={<Story/>}/>
      <Route path='/continuacion'  element={<Section/>}/>
      <Route path='/dedicatoria' element={<Dedication/>}/>
      <Route path='/final' element={<End/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
