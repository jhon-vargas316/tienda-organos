import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seccion from '../components/Seccion'
import GaleriaProductos from '../components/GaleriaProductos'
import Formulario from '../components/Formulario'
import productos from '../data/productos'

function Home() {
  // en el inicio solo mostramos algunos productos
  const destacados = productos.slice(0, 3)

  return (
    <>
      <Header
        titulo="Venta de organos"
        subtitulo="ここでは密告者は嫌われる"
      />

      <Seccion id="inicio" titulo="Bienvenidos a la venta de organos mas legal">
        <p>
          Donde nuestros productos son de buena calidad, frescos y recolectados de manera "legal" aquí
          encontrarán órganos de diversos tamaños y calidad, a precios nunca antes vistos.
        </p>
        <p>
          Procuren no dar aviso de esta página a autoridades, ¡no nos hacemos cargo de lo que le hacen a los soplones!
        </p>
      </Seccion>

      <Seccion id="productos" titulo="Órganos destacados">
        <p>Estos son algunos de nuestros productos más pedidos:</p>
        <GaleriaProductos productos={destacados} />
        <p>
          <Link to="/productos" className="boton-enlace">Ver todos los órganos</Link>
        </p>
      </Seccion>

      <Seccion id="cuenta" titulo="¿Quieres comprar?">
        <p>Crea tu cuenta para hacer pedidos o inicia sesión si ya eres cliente.</p>
        <p>
          <Link to="/registro" className="boton-enlace">Registrarme</Link>
          {" "}
          <Link to="/login" className="boton-enlace">Iniciar sesión</Link>
        </p>
      </Seccion>

      <Seccion id="contacto" titulo="Contacto y Pedidos">
        <p>Si tienes dudas o comentarios, puedes escribirnos:</p>
        <p>No nos hacemos cargo de problemas legales.</p>

        <Formulario />
      </Seccion>

      <Footer titulo="Derechos reservados a Duoc UC." />
    </>
  )
}

export default Home
