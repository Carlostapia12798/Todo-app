import './App.css'
import imgNota from './assets/note-task.svg'

function App() {



  return (
    <div>
      <h1>Todo App <img src={imgNota} alt="imagen de libreta" /></h1>
      
      <input type="text" placeholder="Escribe una tarea"/>
      <button className='btnAgregar'>+</button>
      <div className='todo-list'></div>
    </div>
  )
}

export default App
