import React from 'react'
import { useState } from 'react'

export const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [description, setDescription] = useState('')


  const onSubmit = (e) => {
    e.preventDefault()
    if (!text) {
      alert('Please add a note')
      return
    }
    onAdd({ text, description })

    setText('')
    setDescription('')

  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Title</label>
        <input type='text'
          placeholder='Add Title'
          value={text}
          onChange={(e) => setText(e.target.value)} />
      </div>
      <div className='form-control'>
        <label>Description</label>
        <input type='textarea'
          placeholder='Describe the task'
          value={description}
          onChange={(e) => setDescription(e.target.value)} />
      </div>

      <input className='btn btn-block' type='submit' value='Save' />
    </form>

  )
}

export default AddTask