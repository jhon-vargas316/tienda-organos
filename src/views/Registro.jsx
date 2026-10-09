import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seccion from '../components/Seccion'

function Registro() {
  // el formulario no se conecta a nada, solo evitamos que recargue la pagina
  const enviar = (e) => e.preventDefault()

  return (
    <>
      <Header
        titulo="Venta de organos"
        subtitulo="ここでは密告者は嫌われる"
      />

      <Seccion id="registro" titulo="Crear cuenta">
        <p>Regístrate para poder hacer pedidos en nuestra tienda.</p>

        <Form className="formulario" onSubmit={enviar}>
          <Form.Group className="mb-3" controlId="registroNombre">
            <Form.Label>Nombre:</Form.Label>
            <Form.Control type="text" placeholder="ingrese su nombre" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="registroEmail">
            <Form.Label>Correo electrónico:</Form.Label>
            <Form.Control type="email" placeholder="ingrese su correo electrónico" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="registroClave">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control type="password" placeholder="ingrese su contraseña" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="registroClave2">
            <Form.Label>Repetir contraseña:</Form.Label>
            <Form.Control type="password" placeholder="repita su contraseña" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="registroAcepto">
            <Form.Check type="checkbox" label="Acepto no avisar a las autoridades" />
          </Form.Group>

          <Button variant="danger" type="submit" className="me-2">
            Registrarme
          </Button>

          <Button variant="secondary" type="reset">
            Limpiar formulario
          </Button>
        </Form>

        <p>
          ¿Ya tienes cuenta? <Link to="/login">Inicia sesión aquí</Link>
        </p>
      </Seccion>

      <Footer titulo="Derechos reservados a Duoc UC." />
    </>
  )
}

export default Registro
