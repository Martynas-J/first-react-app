import React, { useEffect, useState } from 'react'

const CitiesForm = ({ onNewCityHandler, editCity }) => {

    const [name, setName] = useState("")
    const [population, setPopulation] = useState("")
    const [continent, setContinent] = useState("")
    const [country, setCountry] = useState("")
    const [touristAttractionsStr, setTouristAttractionsStr] = useState("")
    const [isCapital, setIsCapital] = useState(false)
    // const [selectedPerks, setSelectedPerks] = useState([]);

    const [beach, setBeach] = useState(false);


    useEffect(() => {
        if (editCity) {
            editCityHandler(editCity)
        }
    }, [editCity])

    const addNameHandle = (event) => setName(event.target.value)
    const addPopulationHandle = (event) => setPopulation(event.target.value)
    const addContinentHandle = (event) => setContinent(event.target.value)
    const addCountryHandle = (event) => setCountry(event.target.value)
    const addTouristAttractionsHandle = (event) => setTouristAttractionsStr(event.target.value)
    const addIsCapitalHandle = (event) => setIsCapital(event.target.checked)

    const addBeachHandle = (event) => setBeach(event.target.checked)


    // const addPerksHandle = (event) => {
    //     const { value, checked } = event.target;
    //     if (checked) {
    //         setSelectedPerks((prevPerks) => [...prevPerks, value]);
    //     } else {
    //         setSelectedPerks((prevPerks) => prevPerks.filter((perk) => perk !== value));
    //     }
    // };



    const addCityHandler = (event) => {
        event.preventDefault();
        const location = { continent, country }
        const touristAttractions = touristAttractionsStr.split(",").map(item => item.trim())
        const newData = { name, population, location, touristAttractions, isCapital, }
        setName("");
        setPopulation("");
        setContinent("");
        setCountry("");
        setTouristAttractionsStr("");
        setIsCapital(false);
        onNewCityHandler(newData)
    }

    const editCityHandler = (newCity) => {
        setName(newCity.name);
        setPopulation(newCity.population);
        setContinent(newCity.location.continent);
        setTouristAttractionsStr(newCity.touristAttractions.join(", "));
        setIsCapital(newCity.isCapital);
    }

    return (
        <form className='city-add-form' onSubmit={addCityHandler}>
            <div className='city-input'>
                <label htmlFor='name'>Name:</label>
                <input type='text' id='name' value={name} onChange={addNameHandle}></input>
            </div>
            <div className='city-input'>
                <label htmlFor='population'>Population:</label>
                <input type='number' id='population' value={population} onChange={addPopulationHandle}></input>
            </div>
            <div className='city-input'>
                <label htmlFor='continent'>Continent:</label>
                <input type='text' id='continent' value={continent} onChange={addContinentHandle}></input>
            </div>
            <div className='city-input'>
                <label htmlFor='country'>Country:</label>
                <input type='text' id='country' value={country} onChange={addCountryHandle}></input>
            </div>
            <div className='city-input'>
                <label htmlFor='tourist-attractions'>Tourist Attractions:</label>
                <textarea id='tourist-attractions' value={touristAttractionsStr} onChange={addTouristAttractionsHandle}></textarea>
            </div>
            <div className='city-input'>
                <input type='checkbox' id='is-capital' checked={isCapital} onChange={addIsCapitalHandle}></input>
                <label htmlFor='is-capital'>Is Capital:</label>
                <input type='submit' value='Save'></input>
            </div>
            <label htmlFor='perks-fieldset'>Perks:</label>
            <fieldset className="perks" id='perks-fieldset' >
                <div className='checkbox-input'>
                    <input type='checkbox' id='beach' value="Beach" checked={beach} onChange={setBeach} ></input>
                    <label htmlFor='beach'>Beach</label>
                </div>
                <div className='checkbox-input'>
                    <input type='checkbox' id='metro' value="Metro"  ></input>
                    <label htmlFor='metro'>Metro</label>
                </div>
                <div className='checkbox-input'>
                    <input type='checkbox' id='hiking-trails' value="Hiking trails"  checked={false}></input>
                    <label htmlFor='hiking-trails'>Hiking trails</label>
                </div>
            </fieldset>
        </form >
    )
}

export default CitiesForm

// 1. Prie formos pridėti bent 5-ių checkbox elementų grupę (features), kuriuose galima pasirinkti papildomus miesto privalumus, pvz. "Beach", "Metro", "Hiking trails" ir pan.