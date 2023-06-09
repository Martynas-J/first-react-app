import {useEffect, useState } from "react"
import TodoForm from "../../components/TodoPage/TodoForm"
import TodoList from "../../components/TodoPage/TodoList"
import "./TodoPage.css"
import { Container } from "react-bootstrap"
import { getFormedDate } from "../../components/functions/DataFunctions"
import TodoFilter from "../../components/TodoPage/TodoFilter"

const defaultList = [
  {
    id: 1,
    title: "aaaaa",
    description: "bbbbb",
    createdDate: "2021-10-15",
    isDone: false,
    finishTill: "2023-12-01",
    editDate: "2021-10-15"
  },
  {
    id: 1,
    title: "eeeeee",
    description: "bbbbb",
    createdDate: "2021-11-10",
    isDone: false,
    finishTill: "2023-01-01",
    editDate: "2021-11-10"
  },
  {
    id: 1,
    title: "fffff",
    description: "ccccccccc",
    createdDate: "2021-05-15",
    isDone: false,
    finishTill: "2023-10-01",
    editDate: "2021-05-15"
  },
]



const TodoPages = () => {

const [todo, setTodo] = useState(defaultList)
const [editData, setEditData] = useState("")
const [filteredData, setFilteredData] = useState([])
const [reverseList, setReverseList] = useState(false)

const filteredList = (data) => {
  const filteredDone = data.filter(item =>  item.isDone === true)
  const filteredNotDone = data.filter(item =>  item.isDone !== true)

  const filteredOverTime = filteredNotDone.filter(item =>  item.finishTill === getFormedDate())
  const filteredTimeLeft = filteredNotDone.filter(item =>  item.finishTill !== getFormedDate())

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

const filterByCategoryHandler = (category, findInputData) => {
  setReverseList(prevState => !prevState)
  let output
  if (findInputData === "") {
    setFilteredData([])
    setTodo(prevState => {
    const newState = [... prevState]
    const newList =  newState.sort(function(a, b) {
    if (category === "title") {
      output = a.title.localeCompare(b.title)

    }else if (category === "description") {
        output = a.description.localeCompare(b.description)

    }else if (category === "createdDate") {
        let dateA = new Date(a.createdDate);
        let dateB = new Date(b.createdDate);    
        output = dateA - dateB;
        
    }else if (category === "finishTill") {
      let dateA = new Date(a.finishTill);
      let dateB = new Date(b.finishTill);
      output = dateA - dateB;
  }
  return output
  })
  if (reverseList) {
    return newList.reverse()
  }else {
    return newList
  }
})
  }else {
    setFilteredData(() => {
      const newState = [...todo]
      if (category === "title") { 
        output = newState.filter(item => item.title.includes(findInputData))
      }
      if (category === "description") {
        output = newState.filter(item => item.description.includes(findInputData))
      }
      if (category === "createdDate") {
        output = newState.filter(item => getFormedDate(item.createdDate).includes(findInputData))
      }
      if (category === "finishTill") {
        output = newState.filter(item => getFormedDate(item.finishTill).includes(findInputData))
      } 
      return filteredList(output)
    })
    
  }
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
            <TodoFilter onFilterByCategoryHandler={filterByCategoryHandler}/>
            <TodoList  
                todoList = {filteredData.length > 0 ? filteredData : todo} 
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

// 8. Pridėti galimybė filtruoti pagal užduočių pavadinimas ar aprašymus.