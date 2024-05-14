import { useState } from "react"
import { ListTask } from "./ListTask"

export const TodoApp = () => {

    const [newTask, setNewTask] = useState<string>('')
    const [listTask, setListTask] = useState<string[]>([])

    const handleAddTask = () => {
        if(newTask.trim() === '') return
        setListTask(prevTasks => [...prevTasks, newTask])
        setNewTask('')
    }

    const handleDeleteTask = (index: number) => {
        setListTask(task => task.filter((_,i) => i !== index))
    }

  return (
    <div className="app-container">
        <h1>Lista de Tareas</h1>
        <div  className='flex'>
            <input 
                type="text" 
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Nueva Tarea"
            />
            <button onClick={handleAddTask}>Agregar tarea</button>
        </div>
        <ListTask listTasks={listTask} deleteTask={handleDeleteTask}/>
    </div>
  )
}