
export const TareasCreadas = ({tarea, onCompletada, onBorrarItem}) => {


    const checkTodo = () => {
        return {
            textDecoration:  tarea.completed ? 'line-through': ''
        }
    }

  return (
    <div className="tarea" style={ checkTodo() }>
        <input className="check" type='checkbox' checked = {tarea.completed} 
        onChange= {() => onCompletada(tarea.id)}/>
        { tarea.tarea }
        <button className="borrarTarea" onClick={() => onBorrarItem(tarea.id)}><i className="fa-solid fa-xmark"></i></button>
    </div>
  )
}
