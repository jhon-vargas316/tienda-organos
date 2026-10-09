import { Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Home from './views/Home'
import Productos from './views/Productos'
import Producto from './views/Producto'
import Registro from './views/Registro'
import Login from './views/Login'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/productos' element={<Productos />} />
      <Route path='/producto/:id' element={<Producto />} />
      <Route path='/registro' element={<Registro />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default App
