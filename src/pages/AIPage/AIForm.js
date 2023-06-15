import { useState } from "react"


const AIForm = ({ allData }) => {
    const [name, setName] = useState("jonas")

    const getData = event => {
        event.preventDefault()
        Promise.all([
            fetch(`https://api.nationalize.io/?name=${name}`).then((res) => res.json()),
            fetch(`https://api.genderize.io?name=${name}`).then((res) => res.json()),
            fetch(`https://api.agify.io/?name=${name}`).then((res) => res.json())
        ])
            .then(([nationalizeData, genderizeData, agifyData]) => {
                allData(nationalizeData, genderizeData, agifyData, name);
            })
            .catch((error) => {
                console.log("Get DataAPI Error:", error);
            });
    }
    const addNameHandler = event => setName(event.target.value)
    return (
        <form onSubmit={getData}>
            <label htmlFor="name">Write Name:</label>
            <input id="name" type="text" value={name} onChange={addNameHandler}></input>
            <input type="submit" value="Get Name Info " ></input>
        </form>
    )
}

export default AIForm