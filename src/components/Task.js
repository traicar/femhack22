import { FaEdit, FaTimes } from 'react-icons/fa'


const Task = ({ task, onDelete, onEdit }) => {
  return (
    <div className='task'>
      <h3>
        {task.text}
        <FaTimes
          style={{ color: 'red', cursor: 'pointer' }}
          onClick={() => onDelete(task.id)} />
        < FaEdit
          style={{ color: 'black', cursor: 'pencil' }}
          onClick={() => onEdit(task.id)} />
      </h3 >
      <p>{task.description}</p>
    </div >
  )
}

export default Task
