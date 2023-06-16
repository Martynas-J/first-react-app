import UserDataItem from "./UserDataItem"


const RandomUserOutput = ({ usersData }) => {
    return (
        <div className="users-wrapper">
            {usersData.map((item, index) => {
                return <UserDataItem
                    key={index}
                    userData={item} />
            })}

        </div>
    )
}

export default RandomUserOutput