import { useState } from 'react'
import Saludo from './Encabezado.jsx'
import './App.css'
import Eleccion from './Tarjetadeproducto.jsx'

function App() {
  const [Producto, setProducto] = useState("")

  return (
    <>
      <Saludo/>
      <Eleccion onCambio={(v) => setProducto(v)}/>
    </>
  )
}

export default App
