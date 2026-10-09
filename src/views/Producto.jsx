import { Link, useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seccion from '../components/Seccion'
import productos from '../data/productos'

function Producto() {
  const { id } = useParams()
  const producto = productos.find((p) => p.id === Number(id))

  return (
    <>
      <Header
        titulo="Venta de organos"
        subtitulo="ここでは密告者は嫌われる"
      />

      {producto ? (
        <Seccion id="detalle" titulo={producto.titulo}>
          <div className="detalle-producto">
            <img src={producto.imagen} alt={producto.titulo} />

            <div className="texto">
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio} CLP</p>
              <p>
                Producto fresco y de buena calidad. Para comprarlo necesitas una cuenta.
              </p>
              <p>
                <Link to="/registro" className="boton-enlace">Crear cuenta</Link>
                {" "}
                <Link to="/productos" className="boton-enlace">Volver a productos</Link>
              </p>
            </div>
          </div>
        </Seccion>
      ) : (
        <Seccion id="detalle" titulo="Producto no encontrado">
          <p>Este órgano no existe o ya se vendió.</p>
          <p>
            <Link to="/productos" className="boton-enlace">Volver a productos</Link>
          </p>
        </Seccion>
      )}

      <Footer titulo="Derechos reservados a Duoc UC." />
    </>
  )
}

export default Producto
