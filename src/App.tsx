
import { useState } from 'react'
import './App.css'
import { Tasks } from './components/Tasks';


function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    title: "Estudar programação.",
    description: "Estudar para aprender dev full stack.",
    isCompleted: false,
  },{
    id: 2,
    title: "Estudar inglês.",
    description: "Estidar para se tornar fluente.",
    isCompleted: false,
  },{
    id: 3,
    title: "Estudar matemática.",
    description: "Estidar para se tornar bom em raciocínio lógico.",
    isCompleted: false,
  }]);

  return (
    <>
      <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      
        <div className='w-100'>
          <h1 className='text-3xl text-slate-100 font-bold text-center border-2 rounded-lg border-black p-3 bg-blue-300'>
          Gerenciador de Tarefas</h1>
        </div>
        
        <div>
           <Tasks tasks={tasks}/>
        </div>
        
      </div>
    </>
  )
}

export default App
