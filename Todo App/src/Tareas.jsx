import './Tarea.css';

import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

function Tarea({ texto }) {

return (
    <div className='tarea'>
    <p className='texto'>{texto}</p>

    <div className='btns'>
        <button className='icon-btn' aria-label="Editar tarea">
            <FaEdit />
        </button>
        <button className='icon-btn' aria-label="Eliminar tarea">
            <FaTrashAlt />
        </button>
    </div>
    </div>
);
}

export default Tarea;
