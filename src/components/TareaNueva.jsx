import { useState } from "react"

export const TareaNueva = ({agregarTarea}) => {


    const [info, setInfo] = useState('')

    const handleOnChange = (event) => {
        setInfo(event.currentTarget.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(info !== '') {
            agregarTarea(info);
            setInfo('');

            
        }
    }




  return (
    <div className="TodoInput">
        <form onSubmit={handleSubmit}>
            <input className="form-control form-control-lg" type="text" placeholder={'Ingrese su nueva tarea'}value={info} onChange={handleOnChange}/>
            <button className="btn-agregar">Agregar Tarea</button>
        </form>
        </div>
  )
}
