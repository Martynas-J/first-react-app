

const UserDataItem = ({ userData }) => {
    const { title, last, first } = userData.name
    const userPicture = <img className="user-img" src={userData.picture.medium} />
    const userName = <h2>{userPicture}{`${title} ${first} ${last}`} </h2>

    let userLocation = ""
    let userEmail = ""
    let userDob = ""
    let userRegistered = ""
    let userLogin = ""
    let userPhone = userData.phone ? <span><span className="bold">Phone: </span> {userData.phone}</span> : ""
    let userMobilePhone = userData.cell ? <span><span className="bold">Mobile Phone: </span> {userData.cell}</span> : ""



    if (userData.email) {
        userEmail = <span><span className="bold">Email: </span> {userData.email}</span>
    }
    if (userData.registered) {
        userRegistered =
            <ul className="location-list">
                <li className="location-item"><span className="bold">Date: </span> {userData.registered.date}</li>
                <li className="location-item"><span className="bold">Age: </span> {userData.registered.age}</li>
            </ul>
    }
    if (userData.dob) {
        userDob =
            <ul className="location-list">
                <li className="location-item"><span className="bold">Date: </span> {userData.dob.date}</li>
                <li className="location-item"><span className="bold">Age: </span> {userData.dob.age}</li>
            </ul>
    }
    if (userData.location) {
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
    if (userData.login) {
        const { uuid, username, password, salt, md5, sha1, sha256} = userData.login
        userLogin =
            <ul className="location-list">
                <li className="location-item"><span className="bold">ID: </span> {uuid}</li>
                <li className="location-item"><span className="bold">User Name: </span> {username}</li>
                <li className="location-item"><span className="bold">Password: </span> {password}</li>
                <li className="location-item"><span className="bold">Salt: </span> {salt}</li>
                <li className="location-item"><span className="bold">Md5: </span> {md5}</li>
                <li className="location-item"><span className="bold">Sha1: </span> {sha1}</li>
                <li className="location-item"><span className="bold">Sha256: </span> {sha256}</li>
            </ul>
    }
    return (
        <div>
            {userName}
            {userLocation}
            {userEmail}
            {userDob}
            {userRegistered}
            {userPhone}
            {userMobilePhone}
            {userLogin}
        </div>
    )
}

export default UserDataItem