import React, { useState } from 'react'
import CityItem from './CityItem';
import { Container } from 'react-bootstrap';
import CitiesForm from './CitiesForm';


const Cities = () => {

    let citiesData = [
        {
            name: 'Vilnius',
            population: 500000,
            location: {
                continent: 'Europe',
                country: 'Lietuva',
            },
            touristAttractions: ['Gedimino pilies bokstas', 'Vilniaus katedra'],
            isCapital: true,
            perks: ["Metro"],
        },
        {
            name: 'New York',
            population: 8500000,
            location: {
                continent: 'North America',
                country: 'United States',
            },
            touristAttractions: [],
            isCapital: false,
            perks: ["Metro"],
        },
        {
            name: 'Tokyo',
            population: 14000000,
            location: {
                continent: 'Asia',
                country: 'Japan',
            },
            touristAttractions: ['Sensō-ji'],
            isCapital: true,
            perks: ["Metro"],
        },
        {
            name: 'Amsterdam',
            population: 1400000,
            location: {
                continent: 'Europe',
                country: 'Netherlands',
            },
            touristAttractions: ['Van gogh museum', 'Rijksmuseum', 'Anne Frank museum'],
            isCapital: true,
            perks: ["Metro"],
        },
        {
            name: 'Monaco',
            population: 40000,
            location: {
                continent: 'Europe',
                country: 'Monaco',
            },
            touristAttractions: [],
            isCapital: true,
            perks: [],
        },
        {
            name: 'Havana',
            population: 2400000,
            location: {
                continent: 'North America',
                country: 'Cuba',
            },
            touristAttractions: ['National Capitol of Cuba', 'Plaza de la Catedral'],
            isCapital: true,
            perks: ["Metro"],
        },
        {
            name: 'Singapore',
            population: 5600000,
            location: {
                continent: 'Asia',
                country: 'Singapore',
            },
            touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Singapore Zoo'],
            isCapital: true,
            perks: ["Metro"],
        },
        {
            name: 'Melbourne',
            population: 5000000,
            location: {
                continent: 'Australia',
                country: 'Australia',
            },
            touristAttractions: ['Melbourne Skydeck'],
            isCapital: false,
            perks: ["Metro"],
        },
        {
            name: 'Sapporo',
            population: 1900000,
            location: {
                continent: 'Asia',
                country: 'Japan',
            },
            touristAttractions: ['Hokkaido Jingu'],
            isCapital: false,
            perks: ["Metro"],
        },
    ];
    const [cities, setCities] = useState(citiesData)
    const [indexForEdit, setIndexForEdit] = useState("")

    const CitiesUpdateHandler = (city) => {
        if (indexForEdit !== "") {
            setCities(prevState => {
                prevState[indexForEdit] = city
                let newState = [...prevState]
                setIndexForEdit("")
                return newState
            })
        } else {
            setCities(prevState => [city, ...prevState])
        }
    }
    const deleteCityHandler = (index) => {
        let newState = cities.toSpliced(index, 1);
        setCities(newState)
    }
    const editCityHandler = (index) => {
        setIndexForEdit(index)
    }
    return (
        <div>
            <Container>
                <h1 className='page-title'>Cities uzduotis</h1>

                <h2>Add City</h2>
                <CitiesForm
                    onNewCityHandler={CitiesUpdateHandler}
                    editCity={indexForEdit !== "" ? cities[indexForEdit] : ""}

                />
                {cities && cities.length > 0 ? (
                    <>
                        <div className="cities-list">
                            {cities.map((city, index) => (
                                <CityItem
                                    key={index}
                                    index={index}
                                    city={city}
                                    onDeleteCityHandler={deleteCityHandler}
                                    onEditCityHandler={editCityHandler}
                                />
                            ))}
                        </div>
                    </>
                ) : <h3>Your shopping list is empty</h3>}
            </Container>
        </div>
    )
}

export default Cities

