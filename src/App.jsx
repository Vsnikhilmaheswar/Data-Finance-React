import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Hero/>
  <Analytics/>
  <Newsletter/>
  <Cards/>
  <Footer/>
    </>
  )
}

export default App
