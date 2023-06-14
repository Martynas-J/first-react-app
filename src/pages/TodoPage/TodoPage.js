import {useEffect, useState } from "react"
import TodoForm from "../../components/TodoPage/TodoForm"
import TodoList from "../../components/TodoPage/TodoList"
import "./TodoPage.css"
import { Container } from "react-bootstrap"
import { getTodayDateHandler } from "../../components/functions/DataFunctions"

const TodoPages = () => {

const [todo, setTodo] = useState([])
const [editData, setEditData] = useState("")

const filteredList = (data) => {
  const filteredDone = data.filter(item =>  item.isDone === true)
  const filteredNotDone = data.filter(item =>  item.isDone !== true)

  const filteredOverTime = filteredNotDone.filter(item =>  item.finishTill === getTodayDateHandler())
  const filteredTimeLeft = filteredNotDone.filter(item =>  item.finishTill !== getTodayDateHandler())

  const sortedTimeLeft = filteredTimeLeft.sort(function(a, b) {
    let dateA = new Date(a.finishTill);
    let dateB = new Date(b.finishTill);
    return dateA - dateB;
  });

  const sortedIsDone = filteredDone.sort(function(a, b) {
    let dateA = new Date(a.finishTill);
    let dateB = new Date(b.finishTill);
    return dateA - dateB;
  });
  const sortedOverTime = filteredOverTime.sort(function(a, b) {
    let dateA = new Date(a.editDate);
    let dateB = new Date(b.editDate);
    return dateA - dateB;
  });

  return [...sortedTimeLeft, ...sortedIsDone, ...sortedOverTime]
}

const addTodoHandler = (newData) => {
  if (editData) {
    const index = todo.findIndex(item => item.id === newData.id )
    setTodo(prevState => {
      let newState = [...prevState]
      newState[index] = newData
      return filteredList(newState)          
      })
    setEditData("")
  } else {
    setTodo(prevState => filteredList([newData, ...prevState]))
  }
}
const addDoneHandler = (id) => {
  const index = todo.findIndex(item => item.id === id)
  setTodo(prevState =>{
    let newState = [...prevState]
    newState[index] = {...newState[index], isDone: !newState[index].isDone}
    return filteredList(newState)    
  })
}
const addEditHandler = (id) => {
  const newState = [...todo];
  const data = newState.find(item => item.id === id);
  setEditData(data)
}

const addDeleteHandler = (id) => {
  setTodo(prevState => {
    const newState = prevState.filter(item => item.id !== id);
      return newState;
  })
}
  return (
    <div>
      <Container>
       <h1 className='todo-title'>TodoPages</h1> 
            <TodoForm  
                onNewTodoHandler = {addTodoHandler} 
                editTodo={editData}
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

// 7. Padaryti jog atliktos užduotys būtų atvaizduojamos pabaigoje, o dar neatliktos - pradžioje.