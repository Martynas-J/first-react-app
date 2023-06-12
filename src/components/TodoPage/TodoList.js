import TodoItem from "./TodoItem"


const TodoList = ({ todoList, onAddDoneHandler, onAddDeleteHandler, onAddEditHandler }) => {
    return (
        todoList.length > 0 ?
            <div className="todo-Wrapper">
                <h2>To Do List:</h2>
                <div className="todo-content">
                    {todoList.map((item, index) => {
                        return (
                            <TodoItem
                                key={index}
                                todo={item}
                                onAddDoneHandler = {onAddDoneHandler} 
                                onAddDeleteHandler = {onAddDeleteHandler}
                                onAddEditHandler = {onAddEditHandler}
                                 />
                        )
                    })}
                </div>
            </div> : <h2>No To Do</h2> 

    )
}

export default TodoList