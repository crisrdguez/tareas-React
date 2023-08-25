import './App.css';
//import Tarea from './components/Tarea';
//import Formulario from './components/Formulario';
import ListaTareas from './components/ListaTareas';

function App() {
  return (
    <div className="App">

    <div className='tareas-lista-principal'>
      <h1>Mis Tareas</h1>
      {/** <Tarea texto={'Aprender React'}/> {/**Debemos pasar el props */}
      <ListaTareas />

    </div>

      

    </div>
  );
}

export default App;
