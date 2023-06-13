import { useEffect, useState } from "react";
import { v4 as todoId } from 'uuid';

const TodoForm = ({ onNewTodoHandler, editTodo }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isDone, setIsDone] = useState(false)
  const [finishTill, setFinishTill] = useState("")
  const [id, setId] = useState("")
  const [createdDate, setCreatedDate] = useState("")
  const [editDate, setEditDate] = useState("")

  const addTitleHandler = event => setTitle(event.target.value)
  const addDescriptionHandler = event => setDescription(event.target.value)
  const addIsDoneHandler = event => setIsDone(event.target.checked)
  const addFinishTillHandler = event => setFinishTill(event.target.value)


  useEffect(() => {
    if (editTodo) {
      setEditDate(new Date())
      editTodoHandler(editTodo)
    }
  }, [editTodo])
  const editTodoHandler = (editTodo) => {
    let { title, description, isDone, finishTill, id, createdDate } = editTodo
    setTitle(title);
    setDescription(description);
    setIsDone(isDone);
    setFinishTill(finishTill);
    setId(id);
    setCreatedDate(createdDate);
  }

  const addTodoHandler = (event) => {
    event.preventDefault();
    let newId = id
    let newCreatedDate = createdDate
    if (!id) {
      newId = todoId()
    }
    if (!createdDate) {
      newCreatedDate = new Date()
    }
    const newData = { id: newId, title, description, createdDate: newCreatedDate, isDone, finishTill, editDate }
    onNewTodoHandler(newData)
    setTitle("");
    setDescription("");
    setIsDone(false)
    setFinishTill("")
    setId("")
    setCreatedDate("");
    setEditDate("")
  }
  return (
    <form onSubmit={addTodoHandler}>
      <div>To Do Form:</div>
      <div className='todo-input'>
        <label htmlFor={'title'}>Title:</label>
        <input type='text' id={'title'} value={title} onChange={addTitleHandler}></input>
      </div>
      <div className='todo-input'>
        <label htmlFor='description'>Description:</label>
        <textarea id='description' value={description} onChange={addDescriptionHandler}></textarea>
      </div>
      <div className='todo-input'>
        <label htmlFor='is-done'>Is Done:</label>
        <input type='checkbox' id='is-done' checked={isDone} onChange={addIsDoneHandler}></input>
      </div>
      <div className='todo-input'>
        <label htmlFor='finish-till'>Finish till:</label>
        <input type='date' id='finish-till' value={finishTill} onChange={addFinishTillHandler}></input>
      </div>

      <div className="save-button">
        <input type="submit" value="Save"></input>
      </div>
    </form>
  )
}

export default TodoForm