import { useEffect, useState } from "react"


const RandomUserForm = ({ onGetDat }) => {

    const extentsList = ["location", "email", "dob", "registered", "phone", "cell", "login"]

    const [quantity, setQuantity] = useState("")
    const [gender, setGender] = useState("")
    const [extents, setExtents] = useState(extentsList)
    const [extent, setExtent] = useState("")

    let extentOption = ""

    const getDataHandler = (event) => {
        event.preventDefault()
        const userResults = quantity ? `&results=${quantity}` : ""
        const userGender = gender ? `&gender=${gender}` : ""
        const userExtent = extent ? `&inc=name, picture, ${extent}` : "&inc=name, picture"
        onGetDat(`https://randomuser.me/api/?${userResults}${userGender}${userExtent}`)
    }

    const addQuantityHandler = event => setQuantity(event.target.value)
    const addGenderHandler = event => setGender(event.target.value)
    const getExtentHandler = event => setExtent(event.target.value)
    if (extents.length > 0) {
        extentOption = extents.map((item, index) => <option key={index} value={item}>{item}</option>)
    }
    return (
        <form onSubmit={getDataHandler}>
            <div className="input-content">
                <label htmlFor="input-quantity">Write Quantity</label>
                <input id="input-quantity" min="1" max="500" type="number" value={quantity} onChange={addQuantityHandler}></input>
            </div>
            <div className="input-content">
                <fieldset onChange={addGenderHandler}>
                    <legend>Gender</legend>
                    <input id="male" value="male" type="radio" name="gender"></input>
                    <label htmlFor="male">Male</label>
                    <input id="female" value="female" type="radio" name="gender"></input>
                    <label htmlFor="female">Female</label>
                </fieldset>
            </div>
            {extents.length > 0 ?
                <div className="input-content">
                    <select value={extent} onChange={getExtentHandler}>
                        <option value="" disabled>--Including--</option>
                        {extentOption}
                    </select>
                </div> : ""}
            <button type="submit">Get</button>
        </form>
    )
}

export default RandomUserForm