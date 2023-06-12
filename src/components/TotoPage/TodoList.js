import TodoItem from "./TodoItem"


const TodoList = ({ todoList, onAddDoneHandler }) => {
    return (
        todoList ?
            <div className="todo-Wrapper">
                <h2>To Do List:</h2>
                <div className="todo-content">
                    {todoList.map((item, index) => {
                        return (
                            <TodoItem
                                key={index}
                                todo={item}
                                onAddDoneHandler={onAddDoneHandler} />
                        )
                    })}
                </div>
            </div> : " No To Do"

    )
}

export default TodoList