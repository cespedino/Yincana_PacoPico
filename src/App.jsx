import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Escape Room Paco Pico</h1>
      <p className="read-the-docs">
        Abre la barra de navegación para seguir adelante
      </p>
    </>
  )
}

export default App
