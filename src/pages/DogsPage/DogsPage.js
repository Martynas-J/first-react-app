import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"


const DogsPage = () => {

    const [breeds, setBreeds] = useState({})
    const [category, setCategory] = useState("")
    const [dogPictures, setDogPictures] = useState([])
    const [howMuchPictures, setHowMuchPictures] = useState(1)
    

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(response => response.json())
            .then(data => setBreeds(data.message))
    }, [])

    useEffect(() => {
        fetch(`https://dog.ceo/api/breed/${category}/images/random/${howMuchPictures}`)
            .then(res => res.json())
            .then(data => setDogPictures(data.message))
    }, [category, howMuchPictures])

    const addCategoryHandler = (event) => setCategory(event.target.value)
    const addHowMuchHandler = (event) => setHowMuchPictures(event.target.value)

    const addDogPictureHandler = () => {

    }

    return (
        <Container>
            <h1>DogsPage</h1>
            {Object.keys(breeds).length > 0 ?
                <>
                    <form>
                        <select onChange={addCategoryHandler} >
                            <option>Breeds</option>
                            {Object.entries(breeds).map(([mainBreed, subBreeds], index) => {
                                if (subBreeds.length > 0) {
                                    return subBreeds.map((subBreed, index )=> {
                                        const mainBreedText = mainBreed.at(0).toUpperCase() + mainBreed.slice(1)
                                        const optionText = `${mainBreedText} (${subBreed})`
                                        const optionValue = mainBreed + '/' + subBreed
                                        return <option key={index} value={optionValue}>{optionText}</option>
                                    })

                                } else {
                                    const optionText = mainBreed.at(0).toUpperCase() + mainBreed.slice(1);
                                    const optionValue = mainBreed;
                                    return <option key={index} value={optionValue}>{optionText}</option>
                                }
                            })}
                        </select>
                        <input type="number" min="1" max="10" value={howMuchPictures} onChange={addHowMuchHandler}></input>
                    </form>
                    {(category && Array.isArray(dogPictures) && dogPictures.length > 0) ?
                        dogPictures.map((dogPicture, index) => <img key={index} src={dogPicture} alt="Dog" />)
                        : ""}
                </>
                : "Loading..."}
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

