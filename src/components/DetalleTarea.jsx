import React from 'react'

export const DetalleTarea = ({tarea, setTarea, eliminarTarea}) => {
    const {id, titulo, responsable, descripcion, prioridad} = tarea;
    const handleEliminar = () => {
      Swal.fire({
        title: 'Estas seguro?',
        text: "Eliminar esta tarea!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
          eliminarTarea(id);
          Swal.fire(
            'Eliminado!',
            'La tarea ha sido eliminada.',
            'success'
          )
        }
      });

    }
  return (
    <div className='bg-white p-3 rounded-sm mb-2 w-full md:h-full'>
          <div className='flex justify-between'>
            <button 
                onClick={() => setTarea(tarea)}
                className='bg-indigo-100 p-1 rounded-lg'
            >Editar <i className="fas fa-edit"></i></button>
            <button 
                onClick={handleEliminar}
                className='bg-red-500 text-white p-1 rounded-lg'            
            >Eliminar <i className="fas fa-backspace"></i></button>
          </div>
          <h1 className='text-center font-bold mb-3'> {titulo} </h1>          
          <p className='text-center mb-3'> {descripcion} </p>
          <h2 className='text-center mb-3 bg-indigo-100'> {responsable} </h2>
          { prioridad == 'Alta' && (<h3 className='text-center bg-red-600 rounded-md text-white font-bold'> {prioridad} </h3>)}
          { prioridad == 'Media' && (<h3 className='text-center bg-green-600 rounded-md text-white font-bold'> {prioridad} </h3>)}
          { prioridad == 'Baja' && (<h3 className='text-center bg-blue-400 rounded-md text-white font-bold'> {prioridad} </h3>)}
    </div>
  )
}
