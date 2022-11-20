import { useState } from "react"
import { TareaNueva } from "./components/TareaNueva";
import { ListaTareas } from "./components/ListaTareas";
import { useEffect } from 'react'



function App() {

  const [tareas, setTareas] = useState(() => {
    const todosGuardados = localStorage.getItem('todos');
      if(todosGuardados) {
        return JSON.parse(todosGuardados);
      } else {
        return []
      }
  })

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(tareas));
 }, [tareas]);



  const onCompletada = (id) => {
    console.log('task', id)
    setTareas(tareas.map((tarea) => {
      return  tarea.id === id ? {...tarea, completed: !tarea.completed } : {...tarea};  
    }))
  }

  const agregarTarea = (nuevaTarea) => {
    const nueva = {id :  Date.now(), tarea: nuevaTarea, completed: false};
    setTareas([...tareas, nueva])
  }


  const onBorrarItem = (id) => {
    setTareas([...tareas].filter(tarea => tarea.id !== id))
  }

  return (
    <div className="contenedor">
      <h1 className="title"> Lista de Tareas</h1>
      <ListaTareas tareas = {tareas} onCompletada = {onCompletada} onBorrarItem = {onBorrarItem } />
      <TareaNueva agregarTarea = {agregarTarea} />
      <p className="text"> Santiago Llovera 2022  </p>
    </div>
  )
}

export default App
