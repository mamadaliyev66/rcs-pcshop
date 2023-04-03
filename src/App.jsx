import React from 'react'
import Pages from './pages/Pages'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer  from './components/Footer'
import { useParams,Routes,Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Pages/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App