

const UserDataItem = ({ userData }) => {
    // console.log(userData)
    const { title, last, first } = userData.name
    let userLocation = ""

    const userName = <h2>{`${title} ${first} ${last}`}</h2>
    const extent = Object.keys(userData)[1] ? Object.keys(userData)[1] : ""
    if (extent === "location") {
        const { city, country, postcode, state, street } = userData.location
        userLocation =
            <ul className="location-list">
                <li className="location-item"><span className="bold">Country: </span> {country}</li>
                <li className="location-item"><span className="bold">State: </span> {state}</li>
                <li className="location-item"><span className="bold">City: </span> {city}</li>
                <li className="location-item"><span className="bold">Street: </span> {street.name + ", Nr. " + street.number}</li>
                <li className="location-item"><span className="bold">Postcode: </span> {postcode}</li>
            </ul>
    }
    return (
        <div>
            {userName}
            {userLocation}
        </div>
    )
}

export default UserDataItem