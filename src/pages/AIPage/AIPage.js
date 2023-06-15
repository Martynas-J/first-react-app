import { useState } from "react"
import { Container } from "react-bootstrap"

const AIPage = () => {

    const [name, setName] = useState("jonas")
    const [nationalize, setNationalize] = useState("")
    const [genderize, setGenderize] = useState("")
    const [agify, setAgify] = useState("")

    let outputText = ""

    const addNameHandler = event => setName(event.target.value)
    
    const getData = (event) => {
        event.preventDefault()
        fetch(`https://api.nationalize.io/?name=${name}`)
            .then(res => res.json())
            .then(data => setNationalize(data))

        fetch(`https://api.genderize.io?name=${name}`)
            .then(res => res.json())
            .then(data => setGenderize(data))

        fetch(`https://api.agify.io/?name=${name}`)
            .then(res => res.json())
            .then(data => setAgify(data))
    }
    if (nationalize, genderize, agify) {

        const personNameProbability = nationalize.country[0].probability
        const personCountry_id = nationalize.country[0].country_id

        const personGender = genderize.gender
        const personGenderProbability = genderize.probability
        const personGenderCount = genderize.count

        const personAge = agify.age

        outputText = `Name ${name} by nationality (highest percentage ${personNameProbability} %) is from  country ${personCountry_id} . ${name} according to gender is ${personGender} (${personGenderProbability}%). We count ${personGenderCount} ${personGender} ${name}. ${name} average by age is ${personAge} year`
    }

    return (
        <Container>
            <h1>AIPage</h1>
            <form onSubmit={getData}>
                <label htmlFor="name">Write Name:</label>
                <input id="name" type="text" value={name} onChange={addNameHandler}></input>
                <input type="submit" value="Get Name Info " ></input>
            </form>
            <span>{outputText}</span>

        </Container>

    )
}

export default AIPage




// DIRBTINIO INTELEKTO API UŽDUOTIS:
// 1. Sukurti formą, kurioje galima įrašyti asmens vardą.
// 2. Formos submit metu, pagal įrašytą vardą, ekrane atvaizduoti tikėtiną asmens lyti, amžių ir tautybę. Naudoti šiuos API:
// Amžiui - https://agify.io/
// Tautybei - https://nationalize.io/
// Lyčiai - https://genderize.io/

// https://apipheny.io/free-api/