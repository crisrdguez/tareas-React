import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import '../styles/Formulario.css';

function Formulario(props){

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value); //cada vez que hago un cambio en el input
    

  };

  //se llamara a esta funcion cuando se haga clic sobre el boton
  //Se recibe como argumento un evento (e) que se manda automaticamente
  //este valor va a ser muy util xq nos va a permitir evitar que la pagina se vuelva a cargar cuando se envie el formulario
  const manejarEnvio = e => {

    e.preventDefault(); //evita que se vuelva a cargar toda la pagina cuando mandamos el formulario
    
    const nuevaTarea = {
      id:uuidv4(), //id aleatorio y unico
      texto:input,
      completada:false

    };

    props.onSubmit1(nuevaTarea);//esto es lo que va a ocurrir cuando el formulario se intente enviar - ahora voy a listado de tareas, a la funcion agregartarea

    //Reseteamos en campo input
    setInput('');

  };

  return(

    <form className="tarea-formulario" onSubmit={manejarEnvio}>
      <input className="tarea-input" type="text" placeholder="Escribe una tarea" name="texto" value={input} onChange={manejarCambio}/>

      <button className="tarea-boton">
        Agregar Tarea
      </button>
      

    </form>

  );

}

export default Formulario;