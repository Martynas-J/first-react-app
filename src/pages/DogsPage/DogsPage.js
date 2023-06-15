import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import { DogsForm } from "./DogsForm";

const DogsPage = () => {

    const [category, setCategory] = useState("")
    const [dogPictures, setDogPictures] = useState([])
    const [howMuchPictures, setHowMuchPictures] = useState(1)

    useEffect(() => {
        let isCategory = category ? `/breed/${category}/images/random/${howMuchPictures}` : "/breeds/image/random"
        fetch(`https://dog.ceo/api${isCategory}`)
            .then(res => res.json())
            .then(data => setDogPictures(data.message))
    }, [category, howMuchPictures])

    const addCategoryHandler = (event) => setCategory(event.target.value)
    const addHowMuchHandler = (event) => setHowMuchPictures(event.target.value)


    return (
        <Container>
            <h1>DogsPage</h1>
            <>
                <DogsForm addCategoryHandler={addCategoryHandler}
                    addHowMuchHandler={addHowMuchHandler} howMuchPictures={howMuchPictures} />
                {(Array.isArray(dogPictures)) ?
                    dogPictures.map((dogPicture, index) => <img key={index} src={dogPicture} alt="Dog" />)
                    : ""}
            </>
        </Container>
    )
}

export default DogsPage

// 1. Sukurti formą, kuri leidžia pasirinkti šuns veislę ir grąžina atsitiktinę tos veislės nuotrauką.

// 2. Jeigu šuns veislė yra išvestinė (sub-breed), tai šalia ji turėtų būti atvaizduojama parašant pagrindinės veislės pavadinimą (breed) ir šalia išvestinės veislės pavainimą (sub-breed).
// viena kategorija
// antra kategorija
// Bulldog (French)
// Bulldog (English)
// Bulldog (Boston)
// ketvirta kategorija

