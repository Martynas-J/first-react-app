import { useState } from "react"
import TodoForm from "../../components/TodoPage/TodoForm"
import TodoList from "../../components/TodoPage/TodoList"
import "./TodoPage.css"
import { Container } from "react-bootstrap"

const TodoPages = () => {

const [todo, setTodo] = useState([])
const [editData, setEditData] = useState("")

const addTodoHandler = (newDate) => {
  if (editData) {
    setTodo(todo.map(item => (item.id === newDate.id ? newDate : item)));
    setEditData("")
  } else {
    setTodo(prevState => [newDate, ...prevState])
  }
}
const addDoneHandler = (id) => {
  setTodo(todo.map(item => (item.id === id ? {...item, isDone: !item.isDone} : item)));
}
const addDeleteHandler = (id) => {
  setTodo(prevState => {
    const newState = prevState.filter(item => item.id !== id);
      return newState;
  })
}
  const addEditHandler = (id) => {
    const newState = [...todo];
    const data = newState.filter(item => item.id === id);
    setEditData( data)
  }

  return (
    <div>
      <Container>
       <h1 className='todo-title'>TodoPages</h1> 
            <TodoForm  
                onNewTodoHandler = {addTodoHandler} 
                editTodo={editData[0]}
             />      
            <TodoList  
                todoList = {todo} 
                onAddDoneHandler = {addDoneHandler}
                onAddDeleteHandler = {addDeleteHandler}
                onAddEditHandler = {addEditHandler}
             />
             </Container>
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

// 6.1. Redaguojant užduotį id ir sukūrimo data lieka tokie patys.
// 6.2. Redaguojant užduotį pridėti naują property, kuri nurodo kada buvo modifikuota užduotis. Redagavimo datą atvaizduoti ekrane.