import { useState } from "react"


const TodoFilter = ({ onFilterByCategoryHandler }) => {
    const [category, setCategory] = useState("")
    const [findText, setFindText] = useState("")

    const addCategoryHandler = (event) => setCategory(event.target.value)
    const addFindTextHandler = (event) => setFindText(event.target.value)

    return (
        <div className="filter">
            <label htmlFor="find-text">Find By Category</label>
            <input type="text" id="find-text" value={findText} onChange={addFindTextHandler}></input>
            <select onChange={addCategoryHandler}>
                <option value="title">Title</option>
                <option value="description">Description</option>
                <option value="createdDate">Created Date</option>
                <option value="finishTill">End date</option>
            </select>
            <input type="button" value="Filter" onClick={() => onFilterByCategoryHandler(category, findText)}></input>
        </div>
    )
}

export default TodoFilter