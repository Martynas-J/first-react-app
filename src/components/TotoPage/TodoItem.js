

const TodoItem = ({ todo }) => {
    const { id, title, description, currentDate, isDone, finishTill } = todo
    return (
        <ul className="todo-item">
            <li> Id: {id}</li>
            <li> Title: {title}</li>
            <li> Description: {description}</li>
            <li> Create Date: {currentDate}</li>
            <li> Is Done: {isDone ? "Yes":"Not" }</li>
            <li> Finish Till: {finishTill}</li>
        </ul>
    )
}

export default TodoItem