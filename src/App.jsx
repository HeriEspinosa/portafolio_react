import './styles/App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Services from './pages/Services'
import Portfolio from './pages/Portfolio'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Skills from './pages/Skills'
import { useState } from 'react'

function App() {

  const [isShow, setIsShow] = useState(true)

  const handleClickShow = (() => {
    setIsShow(!isShow)
  })

  return (
    <div className="App">
      <NavBar
        isShow={isShow}
        handleClickShow={handleClickShow} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/contact' element={<Contact />} />

        <Route path='*' element={<h1>❌ Esta Ruta no Existe ❌</h1>} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
