import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { NotFound, Dedication, End } from './pages'
import { Navbar } from './components'


const LazyAbout = React.lazy(() => import('../src/pages/Story'))
const LazyHome = React.lazy(() => import('../src/pages/Home'))
const LazySection = React.lazy(() => import('../src/pages/Section'))
function App() {


  return (
    <>
     <Navbar/>
     <Routes >

      <Route path='/' element={
        <React.Suspense fallback='Cargando...'>
      <LazyHome/>
      </React.Suspense>
      }/>
      <Route path='/historia' element={
          <React.Suspense fallback='Cargando...'>
          <LazyAbout/>  
          </React.Suspense>
    }/>
      <Route path='/continuacion'  element={
         <React.Suspense fallback='Cargando...'>
      <LazySection/>
      </React.Suspense>
      }/>
      <Route path='/dedicatoria' element={<Dedication/>}/>
      <Route path='/final' element={<End/>}/>
      <Route path='*' element={<NotFound/>}/>
     </Routes>
    </>
  )
}

export default App
