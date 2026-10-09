import Header from '../components/Header'
import Footer from '../components/Footer'
import Seccion from '../components/Seccion'
import GaleriaProductos from '../components/GaleriaProductos'
import productos from '../data/productos'

function Productos() {
  return (
    <>
      <Header
        titulo="Venta de organos"
        subtitulo="ここでは密告者は嫌われる"
      />

      <Seccion id="catalogo" titulo="Todos nuestros órganos">
        <p>
          Aquí está todo nuestro catálogo. Entra a "Ver detalle" para conocer mejor cada producto.
        </p>
        <p>Todos los precios están en pesos chilenos (CLP).</p>
        <GaleriaProductos productos={productos} />
      </Seccion>

      <Footer titulo="Derechos reservados a Duoc UC." />
    </>
  )
}

export default Productos
