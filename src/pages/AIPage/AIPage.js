import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import AIForm from "./AIForm"

const AIPage = () => {
    const [personData, setPersonData] = useState("")

    const allDataHandler = (data) => {
        setPersonData(data)
    }
    let output = ""
    if (personData) {
        const { nationalizeData, genderizeData, agifyData, name } = personData
        const personNameProbability = nationalizeData.country[0].probability
        const personCountry_id = nationalizeData.country[0].country_id

        const personGender = genderizeData.gender
        const personGenderProbability = genderizeData.probability
        const personGenderCount = genderizeData.count

        const personAge = agifyData.age

        output = `Name ${name} by nationality (highest percentage ${personNameProbability} %) is from  country ${personCountry_id} . ${name} according to gender is ${personGender} (${personGenderProbability}%). We count ${personGenderCount} ${personGender} ${name}. ${name} average by age is ${personAge} year`
    }

    return (
        <Container>
            <h1>AIPage</h1>
            <AIForm allData={allDataHandler} />
            <span>{output}</span>

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