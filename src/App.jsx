import { useState } from 'react'

import './App.css'
import NavBar from './components/NavBar'
import Introduction from './components/Introduction';
import Aboutme from './components/Aboutme';
import Services from './components/Services';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
      <Introduction/>
      <Aboutme/>
      <Services/>  
    </>
  )
}

export default App
