import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'


function Formulario() {
  return (
    <Form className='formulario'>
      <Form.Group className='mb-3' controlId='formNombre'>
        <Form.Label>Nombre:</Form.Label>
        <Form.Control type='text' placeholder='ingrese su nombre' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formEmail'>
        <Form.Label>Correo electrónico:</Form.Label>
        <Form.Control type='email' placeholder='ingrese su correo electrónico' />
      </Form.Group>

      <Form.Group className='mb-3' controlId='formMensaje'>
        <Form.Label>Mensaje o Pedido:</Form.Label>
        <Form.Control 
          as='textarea' 
          rows={4} 
          placeholder='Deje su mensaje' 
        />
      </Form.Group>

      <Button variant='danger' type='submit' className='me-2'>
        Enviar Mensaje
      </Button>

      <Button variant='secondary' type='reset'>
        Limpiar formulario
      </Button>
    </Form>
  );
}

export default Formulario;