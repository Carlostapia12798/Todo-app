import './Tarea.css';
import imgEdit from './assets/edit.svg';
import imgDelete from './assets/delete.svg';

function Tarea() {

return (
    <div className='tarea'>
    <span className='texto'>Tarea 1</span>

    <div className='btns'>
        <button className='icon-btn' aria-label="Editar tarea">
            <img src={imgEdit} alt="Editar" />
        </button>
        <button className='icon-btn' aria-label="Eliminar tarea">
            <img src={imgDelete} alt="Eliminar" />
        </button>
    </div>
    </div>
);
}

export default Tarea;
