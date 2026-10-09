import susie from '../assets/img/susie-gangnam-style.gif'

function Footer({ titulo }) {
  return (
    <footer id="pie">
      <p><small>{titulo}</small></p>
      <a href="/#contacto" className="SusieBaka">
        <img src={susie} alt="Susie Gangnam Style" />
      </a>
    </footer>
  )
}

export default Footer
