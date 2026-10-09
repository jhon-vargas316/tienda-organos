import gifHigado from '../assets/img/higao.gif'
import gifOjos from '../assets/img/OJOSBIENMANIACOTES.gif'
import gifDientes from '../assets/img/dientao.gif'
import gifPulmones from '../assets/img/Pulmonao.gif'
import gifCorazon from '../assets/img/coragif.gif'

// Lista unica de productos, la usan Home, Productos y Producto
const productos = [
  {
    id: 1,
    imagen: gifHigado,
    titulo: 'Hígado',
    descripcion: 'El hígado es un órgano de gran tamaño que realiza funciones metabólicas esenciales, como filtrar la sangre y procesar nutrientes.',
    precio: '12.000.000'
  },
  {
    id: 2,
    imagen: gifCorazon,
    titulo: 'Corazón',
    descripcion: 'El corazón es un órgano muscular hueco que actúa como una bomba para impulsar y distribuir la sangre por todo el cuerpo a través de los vasos sanguíneos.',
    precio: '99.000.000'
  },
  {
    id: 3,
    imagen: gifPulmones,
    titulo: 'Pulmones',
    descripcion: 'Los pulmones son dos órganos esponjosos de color gris rosáceo ubicados en el tórax, que constituyen la parte principal del aparato respiratorio.',
    precio: '98.000.000'
  },
  {
    id: 4,
    imagen: gifOjos,
    titulo: 'Ojos',
    descripcion: 'Los ojos son los órganos del sistema visual que detectan la luz y la convierten en impulsos electroquímicos para procesar las imágenes.',
    precio: '67.000.000'
  },
  {
    id: 5,
    imagen: gifDientes,
    titulo: 'Dientes',
    descripcion: 'Un diente es un órgano anatómico duro y blanquecino incrustado en los huesos maxilares de los seres humanos y muchos animales.',
    precio: '67.000.000'
  }
]

export default productos
