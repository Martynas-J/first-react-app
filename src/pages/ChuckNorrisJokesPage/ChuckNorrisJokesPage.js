import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'

const ChuckNorrisJokesPage = () => {

  const [joke, setJoke] = useState("")
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState("")
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/categories")
      .then(res => res.json())
      .then(data => setCategories(data))
  }, [])

  useEffect(() => {
    const categoryParam = category ? `?category=${category}` : '';
    fetch(`https://api.chucknorris.io/jokes/random?${categoryParam}`)
      .then(res => res.json())
      .then(data => setJoke(data.value))
  }, [category])

  const addRandomJokeHandler = () => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then(res => res.json())
      .then(data => setJoke(data.value))
  }
  const addSearchJoke = () => {
    fetch(`https://api.chucknorris.io/jokes/search?query=${inputValue}`)
      .then(res => res.json())
      .then(data => setJoke(data.result[0].value))
  }

  const addCategoryHandler = (event) => setCategory(event.target.value)
  const addInputValue = event => setInputValue(event.target.value)

  return (
    <Container>
      <h1>ChuckNorrisJokePage</h1>
      {categories.length > 0 && joke ?
        <>
          <input type='text' onChange={addInputValue}></input>
          <button onClick={addSearchJoke}>Search</button>
          <select onChange={addCategoryHandler}>
            <option>categories</option>
            {categories.map((category, index) => <option key={index}>{category}</option>)}
          </select>
          <button onClick={addRandomJokeHandler}>Get Random Joke</button>
          <h2>{joke}</h2>
        </> : "Loading..."}
    </Container>
  )
}

export default ChuckNorrisJokesPage