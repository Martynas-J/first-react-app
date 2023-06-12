

const TodoItem = ({ todo, onAddDoneHandler, onAddDeleteHandler, onAddEditHandler }) => {
    const { id, title, description, createdDate, isDone, finishTill } = todo
    let descriptionElement = ""
    if (description) {
        descriptionElement = <p> Description: {description}</p>
    }

    let finishTillDate = new Date(finishTill)
    const finishDay = finishTillDate.getDate();
    const finishMonth = finishTillDate.getMonth() + 1;
    const finishYear = finishTillDate.getFullYear();

    let createdDay = createdDate.getDate();
    let createdMonth = createdDate.getMonth() + 1;
    let createdYear = createdDate.getFullYear();

    let createdDateText = `${createdYear}-${createdMonth}-${createdDay}`
    let timeLeft = ""
    let isDoneText = "no"
    let doneButton = <button onClick={() => onAddDoneHandler(id)}>Done</button>
    let delButton = <button onClick={() => onAddDeleteHandler(id)}>Del</button>
    let editButton = <button onClick={() => onAddEditHandler(id)}>Edit</button>

    if (finishYear > createdYear) {
        timeLeft = ` ${finishYear - createdYear} Year`
    } else if (finishMonth > createdMonth) {
        timeLeft = `${finishMonth - createdMonth} Month`
    } else if (finishDay > createdDay) {
        timeLeft = `${finishDay - createdDay} Day`
    } else {
        timeLeft = `time is over`
    }

    if (isDone) {
        isDoneText = "Yes"
        // doneButton = ""
    }

    return (
        <ul className="todo-item">
            <span> Id: {id}</span>
            <h3> Title: {title}</h3>
            {descriptionElement}
            <div> Created Date: {createdDateText}</div>
            <div> Is Done: {isDoneText}</div>
            <div> Finish Till: {finishTill}</div>
            <div> Time Left: {timeLeft}</div>
            {doneButton}
            {delButton}
            {editButton}
        </ul>
    )
}

export default TodoItem

// 3. Atvaizduoti kiek liko laiko iki užduoties deadline.
// 4. Pridėti galimybę pažymėti užduotį kaip atliktą.

// 5. Pridėti galimybę ištrinti užduotį.
// 6. Pridėti galimybę redaguoti užduotį.