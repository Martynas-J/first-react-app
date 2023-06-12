import { useState } from "react";
import { v4 as todoId } from 'uuid';

const TodoForm = ({ onNewTodoHandler }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isDone, setIsDone] = useState(false)
  const [finishTill, setFinishTill] = useState("")

  const addTitleHandle = (event) => setTitle(event.target.value)
  const addDescriptionHandle = (event) => setDescription(event.target.value)
  const addIsDoneHandle = (event) => setIsDone(event.target.checked)
  const addFinishTillHandle = (event) => setFinishTill(event.target.value)

  const addTodoHandler = (event) => {
    event.preventDefault();

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const currentDate = `${year}-${month}-${date}`
    const id = todoId()
    const newData = { id, title, description, currentDate, isDone, finishTill }
    setTitle("");
    setDescription("");
    setIsDone(false)
    setFinishTill("")
    onNewTodoHandler(newData)
  }

  return (
    <form onSubmit={addTodoHandler}>
      <div className='todo-input'>
        <label htmlFor={todoId + '-title'}>Title:</label>
        <input type='text' id={todoId + '-title'} value={title} onChange={addTitleHandle}></input>
      </div>
      <div className='todo-input'>
        <label htmlFor='description'>Description:</label>
        <textarea id='description' value={description} onChange={addDescriptionHandle}></textarea>
      </div>
      <div className='todo-input'>
        <label htmlFor='is-done'>Is Done:</label>
        <input type='checkbox' id='is-done' checked={isDone} onChange={addIsDoneHandle}></input>
      </div>
      <div className='todo-input'>
        <label htmlFor='finish-till'>Finish till:</label>
        <input type='date' id='finish-till' value={finishTill} onChange={addFinishTillHandle}></input>
      </div>

      <div className="save-button">
        <input type="submit" value="Save"></input>
      </div>
    </form>
  )
}

export default TodoForm