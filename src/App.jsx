import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Analytics from './components/Analytics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Hero/>
  <Analytics/>
    </>
  )
}

export default App
