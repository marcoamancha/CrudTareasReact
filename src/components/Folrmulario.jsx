import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import Alerta from './Alerta';

const Folrmulario = ({tareas, setTareas, tarea, setTarea}) => {
    const [titulo, setTitulo] = useState('');
    const [responsable, setResponsable] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [prioridad, setPrioridad] = useState('Alta');

    const [alerta, setAlerta] = useState(false);

    //Llenar campos cuando el usuario de click en editar
    useEffect(() => {
        if(Object.keys(tarea).length > 0){
            setTitulo(tarea.titulo);
            setResponsable(tarea.responsable);
            setDescripcion(tarea.descripcion);
            setPrioridad(tarea.prioridad);
        }
    }, [tarea]);

    const generarId = () => {
        const fecha = new Date();
        const random = Math.random();
        return random + fecha.toLocaleTimeString();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if([titulo, responsable, descripcion].includes('')){
            setAlerta(true);
            return;
        }
        setAlerta(false);
        const tareasObj = {
            id:generarId(),
            titulo,
            responsable,
            descripcion,
            prioridad
        }
        if(tarea.id){
            const tareaActualizada = tareas.map(tareasLista => tareasLista.id === tarea.id ? tareasObj : tareasLista);           
            setTareas(tareaActualizada);
            setTarea({});
        }else{
            setTareas([...tareas, tareasObj]);
        }
        setTitulo('');
        setResponsable('');
        setDescripcion('');
        
    }
  return (
    <>       
        <div className='bg-white shadow-sm rounded-sm md:w-1/2 h-full md:mr-10 mt-4'>            
            <form className='p-4'
                  onSubmit={handleSubmit}
            >
            <div className='mb-3'>
                <label htmlFor="titulo" className='block font-bold'>Título</label>
                <input 
                    id='titulo'
                    type="text"
                    className='bg-indigo-100 p-2 w-full'
                    placeholder='El título'
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}                                    
                    />
            </div>
            <div  className='mb-3'>
                <label htmlFor="responsable" className='block font-bold'>Responsable</label>
                <input 
                    id='responsable'
                    type="text"
                    className='bg-indigo-100 p-2 w-full'
                    placeholder='El responsable'
                    value={responsable}
                    onChange={(e) => setResponsable(e.target.value)} 
                    />
            </div>
            <div  className='mb-3'>
                <label htmlFor="descripcion" className='block font-bold'>Descripción</label>
                <textarea 
                    id='descripcion'
                    type="text"
                    className='bg-indigo-100 p-2 w-full'
                    placeholder='Una descripción'
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)} 
                    />
            </div>
            <div  className='mb-3'>
                <label htmlFor="pripridad" className="block mb-2 text-sm font-bold">Prioridad de la tarea</label>
                <select 
                        id="prioridad" 
                        className="bg-indigo-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        value={prioridad}
                        onChange={(e) => setPrioridad(e.target.value)} 
                >                
                    <option value="Alta">Alta</option>
                    <option value="Media">Media</option>
                    <option value="Baja">Baja</option>                                 
                </select>
            </div>
            <input 
                type="submit"                 
                className='text-center bg-blue-600 text-white font-bold p-2 w-full cursor-pointer'
                value={(Object.keys(tarea).length > 0) ? 'Gaurdar Cambios' : 'Añadir Tarea'}
                />
        </form>
        {alerta && <Alerta setAlerta={setAlerta} />}
        </div>        
    </>        
  )
}

export default Folrmulario