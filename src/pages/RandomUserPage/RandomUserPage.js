import { Container } from "react-bootstrap"
import RandomUserForm from "./RandomUserForm"
import { useEffect, useState } from "react"
import RandomUserOutput from "./RandomUserOutput"
import "./RandomUserPage.css"


const RandomUserPage = () => {

  const [userData, setUserData] = useState("")
  const [linkData, setLinkData] = useState("")

  useEffect(() => {
    if (linkData) {
      const { quantity, gender, extent } = linkData
      const userResults = quantity ? `&results=${quantity}` : ""
      const userGender = gender ? `&gender=${gender}` : ""
      const userExtent = extent ? `&inc=name, picture, ${extent}` : "&inc=name, picture"
      console.log(userResults + userGender + userExtent)
      fetch(`https://randomuser.me/api/?${userResults}${userGender}${userExtent}`)
        .then(res => res.json())
        .then(data => setUserData(data.results))
    }
  }, [linkData])

  const getDataHandler = (data) => {
    setLinkData(data)
  }

  return (
    <Container>
      <h1>RandomUserPage</h1>
      <RandomUserForm onGetDat={getDataHandler} />
      <RandomUserOutput userData={userData ? userData : []} />

    </Container>

  )
}

export default RandomUserPage