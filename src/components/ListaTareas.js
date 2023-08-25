import React, {useState} from "react";
import Formulario from "./Formulario";
import Tarea from "./Tarea";
import '../styles/ListaTareas.css';


function ListaTareas(){

  //Vamos a usar un hook
  const [tareas, setTareas] = useState([]);//valor inicial de tareas: un array vacio

  const agregarTarea = tarea =>{//recibimos esa tarea como argumento
    
    if(tarea.texto.trim()){//si la cadena no esta vacia..
      tarea.texto = tarea.texto.trim();

      //asi la tarea que acabo de agregar se vera la primera, la agregamos al principio y luego tomamos todas las tareas posteriores
      //con el operador spread las estamos convirtiendo de un arreglo a objetos individuales
      const tareasActualizadas = [tarea, ...tareas]; 
      setTareas(tareasActualizadas);
    }
  } 

  const eliminarTarea = id =>{
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id); //guardo todas las tareas que no tienen ese id y actualizo el listado
    setTareas(tareasActualizadas);
  }

  //tendremos un condicional para verificar si ya se completo la tarea o no
  const completarTarea = id =>{

    const tareasActualizadas = tareas.map(tarea =>{
      if(tarea.id === id){
        tarea.completada = !tarea.completada; //si estaba completada lo cambio, y al reves
      }

      return tarea; 
      //esto generara un nuevo array de tareas que tienen que ser actualizadas
    });
    setTareas(tareasActualizadas);

  }

  //podemos usar etiquetas vacias <>, lo que se llama fragmentos, no aparecen reflejados cuando se crea la estructura de html
  //utiles cuando no queremos agregar un contenedor adicional
  return(


    <>
      <Formulario onSubmit1={agregarTarea}/> {/*le pasamos un prop */}
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) => //Para cada una de ellas vamos a crear un componente en react
            <Tarea 
              key={tarea.id} //obligatorio en react Key
              id={tarea.id}
              texto={tarea.texto}
              completada = {tarea.completada}
              eliminarTarea={eliminarTarea} //prop - funcion
              completarTarea={completarTarea}
            />
          )
        }
      </div>
      
    </>

  );

}

export default ListaTareas;