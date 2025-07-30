import { useState } from 'react';

import './App.css';
import Tarea from './Tareas.jsx';
import imgNota from './assets/note-task.svg';

function App() {
  const [tareas, setTareas] = useState([]);
  const [inputTexto, setInputTexto] = useState('');

  const agregarTarea = () => {
    if (inputTexto.trim() === '') return; // evitar tareas vacías

    const nuevaTarea = {
      id: Date.now(), // identificador único
      texto: inputTexto,
      completada: false,
    };

    setTareas([...tareas, nuevaTarea]); // agrega la nueva tarea al array
    setInputTexto(''); // limpia el input
  };

  const eliminarTarea = (id) => {
      const nuevasTareas = tareas.filter((t) => t.id !== id);
      setTareas(nuevasTareas);
    };

  const editarTarea = (id) => {
    const tareaAEditar = tareas.find((t) => t.id === id);
    const nuevoTexto = prompt("Edita la tarea:", tareaAEditar.texto);

    if (nuevoTexto !== null && nuevoTexto.trim() !== '') {
      const tareasActualizadas = tareas.map((t) =>
        t.id === id ? { ...t, texto: nuevoTexto } : t
      );
      setTareas(tareasActualizadas);
    }
  };

  // Renderiza la aplicación
  return (
    <div className="todo-container">
      <div className="header">
        <img src={imgNota} alt="icono de libreta" />
        <h1>To Do App</h1>
      </div>

      <input
        type="text"
        placeholder="Escribe una tarea"
        value={inputTexto}
        onChange={(e) => setInputTexto(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && agregarTarea()} // también permite agregar con Enter
      />
      <button className="btnAgregar" onClick={agregarTarea}>
        +
      </button>

      <div className="todo-list">
        {tareas.map((t) => (
          <Tarea key={t.id} id={t.id} texto={t.texto} eliminarTarea={eliminarTarea} editarTarea={editarTarea} />
        ))}
      </div>
    </div>
  );
}

export default App;
