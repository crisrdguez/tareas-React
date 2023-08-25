import React from "react";
import '../styles/Tarea.css';
import { AiOutlineCloseCircle } from "react-icons/ai";

//Le pasamos un segundo props completada

function Tarea({id, texto, completada, completarTarea, eliminarTarea}){ //necesitamos un id para identificar a cada tarea de forma unica
  return(

    //Queremos marcar una tarea como completada si se hace click sobre el div que contiene el texto
    <div className= {completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>{/**Si el valor de ese props completada es verdadero le asigno una clase, sino la otra */}
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div className="tarea-contenedor-icono" onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className="tarea-icono" />{/**Los tenemos que definir como componentes de React, y le pasamos un props */}
      </div>
    </div>

  );

}

export default Tarea;