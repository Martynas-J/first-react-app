import { useState } from "react";


const AddForm = () => {
  const [name, setName] = useState("")
    const ControlledInput = ({ inputValue, onInputChange }) => {
        return (
            <div>
                {/* <label htmlFor={htmlFor}>{labelText}:</label> */}
                <input  type="text" value={inputValue} onChange={onInputChange} />
            </div>
        )
    }
    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const [population, setPopulation] = useState("")
    const [continent, setContinent] = useState("")
    const [country, setCountry] = useState("")
    const [touristAttractionsStr, setTouristAttractionsStr] = useState("")
    const [isCapital, setIsCapital] = useState(false)

    const addTouristAttractionsHandle = (event) => setTouristAttractionsStr(event.target.value)
    const addIsCapitalHandle = (event) => setIsCapital(event.target.value)

    // const addCityHandle = (event) => {
    //     event.preventDefault();
    //     const location = { continent, country }
    //     const touristAttractions = touristAttractionsStr.split(",")
    //     onSetCities(prevState => {
    //         let newState = [{ name, population, location, touristAttractions, isCapital }, ...prevState]
    //         return newState
    //     })
    // }
    return (
        <form className='city-add-form' >
            <div className='city-input'>
                <ControlledInput  inputValue={name} onInputChange={nameHandler}  />
            </div>
            {/* <div className='city-input'>
                <ControlledInput htmlFor='population' labelText="Population" value={population} onChangeHandler={setPopulation} type="number" id='population' />
            </div>
            <div className='city-input'>
                <ControlledInput htmlFor='continent' labelText="Continent" value={continent} onChangeHandler={setContinent} type="text" id='continent' />
            </div>
            <div className='city-input'>
                <ControlledInput htmlFor='country' labelText="Country" value={country} onChangeHandler={setCountry} type="text" id='country' />
            </div> */}
            <div className='city-input'>

                <label htmlFor='tourist-attractions'>Tourist Attractions:</label>
                <input id='tourist-attractions' value={touristAttractionsStr} onChange={addTouristAttractionsHandle}></input>
            </div>
            <div className='city-input'>
                <label htmlFor='is-capital'>Is Capital:</label>
                <input type='checkbox' id='is-capital' defaultChecked={isCapital} onChange={addIsCapitalHandle}></input>
                <input type='submit' value='Save'></input>
            </div>
        </form>
    );

}

export default AddForm