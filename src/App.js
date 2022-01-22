import { useState } from 'react'
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTask from './components/AddTask'
import Modal from 'react-modal'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  //const [editTask, setEditTask] = useState(null)


  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))

  }



  const editTask = (id) => {
    console.log(id);

  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} />

      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks}
          onDelete={deleteTask}
          onEdit={editTask}
        />) :
        ("No notes to display. Click 'Add' to add new note.")}
    </div>
  );
}

export default App;
