import { useState } from "react";
import { Link } from "react-router-dom";


function TarjetaProducto({ id, imagen, titulo, descripcion, precio }) {

  const [meGusta, setMeGusta] = useState(false);

  const alternar = () => {

    if(meGusta ==false)
      setMeGusta(true)
    else 
      setMeGusta(false);
  }

  return (
    
    <article className="tarjeta">
      <div className="espacio-imagen">
        <img src={imagen} alt={titulo} />
      </div>
      <h3>{titulo}</h3>
      <p className="descripcion">{descripcion}</p>
      <p className="precio">${precio} CLP</p>

      <Link to={`/producto/${id}`} className="boton-enlace">Ver detalle</Link>
      {" "}
      <button
        onClick={alternar}
        className={meGusta ? 'btn-tarjeta guardado' : 'btn-tarjeta'}
      >
        {meGusta ? 'Guardado' : 'Agregar'}
      </button>

    </article>
  );
}

export default TarjetaProducto;