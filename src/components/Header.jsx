import { Link } from 'react-router-dom'

function Header({ titulo, subtitulo }) {
  return (
    <header id="encabezado">
      <h1>{titulo}</h1>
      <p>{subtitulo}</p>

      <nav id="menu-principal">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/productos">Productos</Link></li>
          <li><a href="/#contacto">Contacto</a></li>
          <li><Link to="/registro">Registro</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
