import { useEffect, useState } from "react"


export const DogsForm = ({addCategoryHandler, addHowMuchHandler, howMuchPictures}) => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/list/all")
            .then(response => response.json())
            .then(data => {
                const breeds = data.message
                if (Object.keys(breeds).length > 0) {
                    Object.entries(breeds).map(([mainBreed, subBreeds]) => {
                        if (subBreeds.length > 0) {
                            subBreeds.map(subBreed => {
                                const mainBreedText = mainBreed.at(0).toUpperCase() + mainBreed.slice(1)
                                const optionText = `${mainBreedText} (${subBreed})`
                                const optionValue = mainBreed + '/' + subBreed
                                setCategories(prevState => [...prevState, { optionText, optionValue }])
                            })
                        } else {
                            const optionText = mainBreed.at(0).toUpperCase() + mainBreed.slice(1);
                            const optionValue = mainBreed;
                            setCategories(prevState => [...prevState, { optionText, optionValue }])
                        }
                    })
                }
            })
    }, [])

if (categories.length === 0) {
    return ""
}
    return (
        <form>
            <select value="" onChange={addCategoryHandler} >
                <option value="" disabled>--Select Breed--</option>
                {categories.map((category, index) => <option key={index} value={category.optionValue}>{category.optionText}</option>)
                }
            </select>
            <input type="number" min="1" max="10" value={howMuchPictures} onChange={addHowMuchHandler}></input>
        </form>
    )
}
