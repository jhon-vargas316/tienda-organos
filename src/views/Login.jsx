import { Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Seccion from '../components/Seccion'

function Login() {
  // el formulario no se conecta a nada, solo evitamos que recargue la pagina
  const enviar = (e) => e.preventDefault()

  return (
    <>
      <Header
        titulo="Venta de organos"
        subtitulo="ここでは密告者は嫌われる"
      />

      <Seccion id="login" titulo="Iniciar sesión">
        <p>Ingresa con tu cuenta para ver tus pedidos.</p>

        <Form className="formulario" onSubmit={enviar}>
          <Form.Group className="mb-3" controlId="loginEmail">
            <Form.Label>Correo electrónico:</Form.Label>
            <Form.Control type="email" placeholder="ingrese su correo electrónico" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="loginClave">
            <Form.Label>Contraseña:</Form.Label>
            <Form.Control type="password" placeholder="ingrese su contraseña" />
          </Form.Group>

          <Button variant="danger" type="submit">
            Entrar
          </Button>
        </Form>

        <p>
          ¿Aún no tienes cuenta? <Link to="/registro">Regístrate aquí</Link>
        </p>
      </Seccion>

      <Footer titulo="Derechos reservados a Duoc UC." />
    </>
  )
}

export default Login
