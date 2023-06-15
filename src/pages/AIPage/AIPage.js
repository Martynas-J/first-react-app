import { useState } from "react"
import { Container } from "react-bootstrap"
import AIForm from "./AIForm"

const AIPage = () => {
    const [outputText, setOutputText] = useState(null)


    const allDataHandler = (nationalize, genderize, agify, name) => {
        const personNameProbability = nationalize.country[0].probability
        const personCountry_id = nationalize.country[0].country_id

        const personGender = genderize.gender
        const personGenderProbability = genderize.probability
        const personGenderCount = genderize.count

        const personAge = agify.age

        const output = <>{`Name ${name} by nationality (highest percentage ${personNameProbability} %) is from  country ${personCountry_id} . ${name} according to gender is ${personGender} (${personGenderProbability}%). We count ${personGenderCount} ${personGender} ${name}. ${name} average by age is ${personAge} year`}</>
        setOutputText(output)
    }
    return (
        <Container>
            <h1>AIPage</h1>
            <AIForm allData={allDataHandler} />
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