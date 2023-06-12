import { useState } from "react"
import TodoForm from "../../components/TotoPage/TodoForm"
import TodoList from "../../components/TotoPage/TodoList"
import "./TodoPage.css"

const TodoPages = () => {

const [todo, setTodo] = useState([])
const addTodoHandler = (newDate) => {
    setTodo(prevState => [newDate, ...prevState])
}
const addDoneHandler = (id) => {
  setTodo(prevState => {
    const newState = [...prevState];
    const newDate = newState.map(item => {
      if (item.id === id) {
        return {...item, isDone : true}
      }
      return item
      })
      return newDate;
  })
}

  return (
    <div>
       <h1 className='todo-title'>TodoPages</h1> 
            <TodoForm  onNewTodoHandler = {addTodoHandler} />      
            <TodoList  todoList = {todo}  onAddDoneHandler = {addDoneHandler}/>
    </div>
  )
}

export default TodoPages

// TODO UŽDUOTIS:
// 1. Sukurti 4 komponentus:
// 1.1. TodoPage (pradinis komponentas)
// 1.2. TodoForm (forma)
// 1.3. TodoList (visų todo užduočių sąrašas)
// 1.4. TodoItem (vienos todo užduoties komponentas)

 

// 2. Kiekviena sukurta užduotis turi turėti:
// 2.1. Unikalų id (prisideda automatiškai)
// 2.2. Pavadinimą
// 2.3. Aprašymą
// 2.4. Sukūrimo datą (prisideda automatiškai)
// 2.5. Done (nurodo ar užduotis jau atlikta)
// 2.6. Data iki kada užduotį reikia atlikti