import './App.css'
import Tarea from'./Tareas.jsx'
import imgNota from './assets/note-task.svg'

function App() {


  return (
    <div className='todo-container'>
      <h1>Todo App <img src={imgNota} alt="imagen de libreta" /></h1>
      
      <input type="text" placeholder="Escribe una tarea"/>
      <button className='btnAgregar'>+</button>
      <div className='todo-list'>
        <Tarea />
      </div>
    </div>
  )
}

export default App
