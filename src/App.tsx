
import './App.css'
import { AddTasks } from './components/AddTasks'
import { Tasks } from './components/Tasks'


function App() {
  

  return (
    <>
      <h1>Gerenciador de Tarefas</h1>
      <Tasks />
      <AddTasks />
    </>
  )
}

export default App
