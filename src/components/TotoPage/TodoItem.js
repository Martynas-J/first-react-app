

const TodoItem = ({ todo, onAddDoneHandler }) => {
    const { id, title, description, createdDate, isDone, finishTill } = todo
    let descriptionElement = ""
    if (description) {
        descriptionElement = <p> Description: {description}</p>
    }
    const finishYear = Number(finishTill.split("-")[0])
    const finishMonth = Number(finishTill.split("-")[1])
    const finishDay = Number(finishTill.split("-")[2])

    const createdYear = Number(createdDate.split("-")[0])
    const createdMonth = Number(createdDate.split("-")[1])
    const createdDay = Number(createdDate.split("-")[2])

    let timeLeft = ""
    let isDoneText = "no"
    let doneButton = <button onClick={() => onAddDoneHandler(id)}>Done</button>

    if (finishYear > createdYear) {
        timeLeft = ` ${finishYear - createdYear} Year`
    } else if (finishMonth > createdMonth) {
        timeLeft = `${finishMonth - createdMonth} Month`
    } else if (finishDay > createdDay) {
        timeLeft = `${finishDay - createdDay} Day`
    } else {
        timeLeft = `time is over`
        doneButton = ""
    }

    if (isDone) {
        isDoneText = "Yes"
        doneButton = ""
    }

    return (
        <ul className="todo-item">
            <span> Id: {id}</span>
            <h3> Title: {title}</h3>
            {descriptionElement}
            <div> Created Date: {createdDate}</div>
            <div> Is Done: {isDoneText}</div>
            <div> Finish Till: {finishTill}</div>
            <div> Time Left: {timeLeft}</div>
            {doneButton}
        </ul>
    )
}

export default TodoItem

// 3. Atvaizduoti kiek liko laiko iki užduoties deadline.
// 4. Pridėti galimybę pažymėti užduotį kaip atliktą.