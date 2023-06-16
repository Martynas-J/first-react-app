import { Container } from "react-bootstrap"
import RandomUserForm from "./RandomUserForm"
import { useEffect, useState } from "react"
import RandomUserOutput from "./RandomUserOutput"
import "./RandomUserPage.css"


const RandomUserPage = () => {

  const [usersData, setUsersData] = useState([])
  const [linkData, setLinkData] = useState("")

  useEffect(() => {
    if (linkData) {
      fetch(linkData)
        .then(res => res.json())
        .then(data => setUsersData(data.results))
    }
  }, [linkData])

  const getDataHandler = (data) => {
    setLinkData(data)
  }

  return (
    <Container>
      <h1>RandomUserPage</h1>
      <RandomUserForm onGetDat={getDataHandler} />
      <RandomUserOutput usersData={usersData} />

    </Container>

  )
}

export default RandomUserPage