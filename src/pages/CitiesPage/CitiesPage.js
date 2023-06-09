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

// 1. Prie formos pridėti bent 5-ių checkbox elementų grupę (features), kuriuose galima pasirinkti papildomus miesto privalumus, pvz. "Beach", "Metro", "Hiking trails" ir pan.