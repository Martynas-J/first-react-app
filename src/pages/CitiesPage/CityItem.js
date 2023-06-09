import React from 'react'
import "./CitiesPage.css"

const CityItem = ({ city, index, onDeleteCityHandler, onEditCityHandler }) => {
    let { name, population, location, touristAttractions, isCapital, perks } = city

    let title = name
    let capitalTitleClass = ""
    let capitalText = ""
    let capitalClass = ""
    let oddClass = "odd"
    let touristAttractionsColor = "touristAttractions"
    let touristAttractionsText = <h3>Main Tourist attraction of {name} is</h3>
    let touristAttractionsElement = ""

    if (isCapital) {
        capitalTitleClass = "capital-title"
        title = name + " (Capital)"
        capitalText = <p>{name} is the capital of {location.country}</p>
        capitalClass = "capital"
    }
    if (touristAttractions.length % 2 !== 0) {
        capitalClass += " " + oddClass
    }
    if (touristAttractions.length > 1) {
        touristAttractionsText = <h3>Main Tourist attractions of {name} are</h3>
    }
    let perksList = ""
    console.log(perks.length)
    if (perks.length > 0 && perks) {
        perksList = <p>City Perks: {perks.map(perk => perk + ", ")}</p>

    }

    if (touristAttractions[0] && touristAttractions.length > 0) {
        touristAttractionsElement = <>
            {touristAttractionsText}
            <ul>
                {touristAttractions.map((item, index) => {
                    touristAttractionsColor = index === 0 ? "green-color touristAttractions" : index > 2 ? "red-color touristAttractions" : "orange-color touristAttractions";
                    return (
                        <li key={index} className={touristAttractionsColor}>
                            {item}
                        </li>
                    );
                })}
            </ul>
        </>
    }

    return (
        <div className={capitalClass} >
            <h2 className={capitalTitleClass}>{title}</h2>
            <p>{name} city is located in {location.continent}, {location.country} and has population of {population} people.</p>
            {perksList}
            {capitalText}
            {touristAttractionsElement}
            <button onClick={() => onDeleteCityHandler(index)}>Delete</button>
            <button onClick={() => onEditCityHandler(index)}>Edit</button>
        </div>
    )
}

export default CityItem