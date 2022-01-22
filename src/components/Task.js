import { FaEdit, FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onEdit, onToggle }) => {
  return (
    <div className='task' onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)} />
        <FaEdit
          style={{ color: 'black', cursor: 'pencil' }}
          onClick={() => onDelete(task.id)} />
      </h3>
      <p>{task.description}</p>
    </div>
  )
}

export default Task
