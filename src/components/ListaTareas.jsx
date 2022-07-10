import React from 'react'
import { DetalleTarea } from './DetalleTarea'

function ListaTareas({tareas, setTarea, eliminarTarea}) {
  return (
    <div className='md:grid grid-cols-2 md:gap-2 mt-4 w-full h-full'>
       {
        tareas.map(tarea =>
          <DetalleTarea 
            key={tarea.id}
            tarea={tarea}
            setTarea={setTarea}
            eliminarTarea={eliminarTarea}
          />  
        )
       }        
    </div>
  )
}

export default ListaTareas