import { useEffect, useState } from "react"
import Folrmulario from "./components/Folrmulario"
import Header from "./components/Header"
import ListaTareas from "./components/ListaTareas"

function App() {
  const localStorageInicial = JSON.parse(localStorage.getItem('tareas')) ?? [];
  
  const [tareas, setTareas] = useState(localStorageInicial);
  const [tarea, setTarea] = useState({});
  
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const eliminarTarea = (id) => {
    const tareasActuales = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActuales);
  }

  return (
    <>
      <Header />
      <h1 className="text-center uppercase font-bold mt-3 text-blue-700 text-xl md:text-3xl">Administracion de mis tareas</h1>
      <div className="md:flex mt-6 mx-10">
        <Folrmulario 
            tareas = {tareas}
            setTareas = {setTareas}
            tarea={tarea}
            setTarea={setTarea}
        />
        <ListaTareas 
          tareas={tareas}
          setTarea={setTarea}
          eliminarTarea={eliminarTarea}
        />
      </div>
    </>
  )
}

export default App
