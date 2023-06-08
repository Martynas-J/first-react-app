import React from 'react'
import CityItem from './CityItem';
import { Container } from 'react-bootstrap';

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
    return (
        <div>
            <Container>
                <h1 className='page-title'>Cities uzduotis</h1>
                {citiesData.length > 0 ? (
                    <>
                        <h2>Cities:</h2>
                        <div className="cities-list">
                            {citiesData.map((city, index) => (
                                <CityItem
                                    key={index}
                                    city={city}
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


// CITIES užduotis:
// 0. Sukurti CitiesPage komponentą.
// 1. Jame sukurti masyvą, kuriame būtų 10 skirtingų miestų. Panaudoti anksčiau kurtą masyvą. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
// 1.1. name - miesto pavadinimas (string)
// 1.2. population - miesto populiacija (number)
// 1.3. location - (object)
//    1.3.1. continent - žemynas (string)
//    1.3.2. country - šalis (string)
// 1.4. touristAttractions - lankytinos vietos (array)
// 1.5. isCapital - reikšmė nurodanti ar miestas yra sostinė (boolean)

// 2. Atvaizduoti visų miestų informaciją sukuriant CityItem komponentą.
// 3.1. Jeigu miestas yra sostinė, tai:
// 3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)
// 3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."
// 3.1.3. Jeigu miestas yra sostinė, tai prie apgaubiančio elemento pridėti klasę „capital".
// 4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:
// 4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".
// 4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".
// 4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.
// 5. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%, o visų kitų - 50%.