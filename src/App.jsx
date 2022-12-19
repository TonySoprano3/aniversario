import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { Home, NotFound, Dedication, End, Section } from './pages'
import { Navbar } from './components'
const LazyAbout = React.lazy(() => import('../src/pages/Story'))

function App() {


  return (
    <>
     <Navbar/>
     <Routes >

      <Route path='/' element={<Home/>}/>
      <Route path='/historia' element={
          <React.Suspense fallback='Loading...'>
          <LazyAbout/>  
          </React.Suspense>
    }/>
      <Route path='/continuacion'  element={
      <Section/>}/>
      <Route path='/dedicatoria' element={<Dedication/>}/>
      <Route path='/final' element={<End/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
