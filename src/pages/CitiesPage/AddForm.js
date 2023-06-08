import { useState } from "react";


const AddForm = ({ onSetCities }) => {

    const ControlledInput = ({ value, onChange, type, id, htmlFor, labelText }) => (
        <>
            <label htmlFor={htmlFor}>{labelText}:</label>
            <input id={id} type={type} value={value} onChange={(e) => onChange(e.target.value)} />
        </>
    );

    const [name, setName] = useState("")
    const [population, setPopulation] = useState("")
    const [continent, setContinent] = useState("")
    const [country, setCountry] = useState("")
    const [touristAttractionsStr, setTouristAttractionsStr] = useState("")
    const [isCapital, setIsCapital] = useState(false)

    const addTouristAttractionsHandle = (event) => setTouristAttractionsStr(event.target.value)
    const addIsCapitalHandle = (event) => setIsCapital(event.target.value)

    const addCityHandle = (event) => {
        event.preventDefault();
        const location = { continent, country }
        const touristAttractions = touristAttractionsStr.split(",")
        onSetCities(prevState => {
            let newState = [{ name, population, location, touristAttractions, isCapital }, ...prevState]
            return newState
        })
    }
    return (
        <form className='city-add-form' onSubmit={addCityHandle}>
            <div className='city-input'>
                <ControlledInput htmlFor='name' labelText="Name" value={name} onChange={setName} type="text" id='name' />
            </div>
            <div className='city-input'>
                <ControlledInput htmlFor='population' labelText="Population" value={population} onChange={setPopulation} type="number" id='population' />
            </div>
            <div className='city-input'>
                <ControlledInput htmlFor='continent' labelText="Continent" value={continent} onChange={setContinent} type="text" id='continent' />
            </div>
            <div className='city-input'>
                <ControlledInput htmlFor='country' labelText="Country" value={country} onChange={setCountry} type="text" id='country' />
            </div>
            <div className='city-input'>
                <label htmlFor='tourist-attractions'>Tourist Attractions:</label>
                <textarea id='tourist-attractions' value={touristAttractionsStr} onChange={addTouristAttractionsHandle}></textarea>
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