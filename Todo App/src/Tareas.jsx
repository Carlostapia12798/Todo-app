import './Tarea.css';

import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

function Tarea({ id, texto, eliminarTarea, editarTarea,completada, toggleCompletada }) {

return (
    <div className={`tarea ${completada ? 'tarea-completada' : ''}`}>
        <div className='contenido'>
            <input
            type="checkbox"
            checked={completada}
            onChange={() => toggleCompletada(id)}
            className='check'
            />
            <p className='texto'>{texto}</p>
        </div>
        <div className='btns'>
            <button className='icon-btn' aria-label="Editar tarea" onClick={() => editarTarea(id)}>
                <FaEdit />
            </button>
            <button className='icon-btn' aria-label="Eliminar tarea" onClick={() => eliminarTarea(id)}>
                <FaTrashAlt />
            </button>
        </div>
    </div>
);
}

export default Tarea;
