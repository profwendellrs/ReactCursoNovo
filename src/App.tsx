
import { useState } from 'react'
import './App.css'


function App() {
  const [tasks, setTasks] = useState([]);

  return (
    <>
      <div className='w-screen h-screen bg-slate-500 flex justify-center p-6'>
      
        <div className='w-100'>
          <h1 className='text-3xl text-slate-100 font-bold text-center border-2 rounded-lg border-black p-3 bg-blue-300'>Gerenciador de Tarefas</h1>
        </div>
        
      </div>
    </>
  )
}

export default App
