import TodoItem from "./TodoItem"


const TodoList = ({ todoList }) => {
    return (
        <div className="todo-content">
            {todoList.map((item, index) => {
                return (
                    <TodoItem
                        key={index}
                        todo={item} />
                )
            })}
        </div>
    )
}

export default TodoList