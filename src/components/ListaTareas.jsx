import { TareasCreadas } from "./TareasCreadas"



export const ListaTareas = ({ tareas, onCompletada, onBorrarItem  }) => {
  return (
    <div>
        {
            tareas.map((tarea) => (
                <TareasCreadas key={tarea.id} tarea = {tarea}   onCompletada = { onCompletada }  onBorrarItem = { onBorrarItem }/>
            ))
        }
    </div>
  )
}
