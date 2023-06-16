import UserDataItem from "./UserDataItem"


const RandomUserOutput = ({ userData }) => {
    console.log(userData)
    return (
        <div>
            {userData.map((item, index) => {
                return <UserDataItem
                    key={index}
                    userData={item} />
            })}

        </div>
    )
}

export default RandomUserOutput