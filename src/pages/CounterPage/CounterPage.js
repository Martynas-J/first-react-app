import { useState } from "react";
import { Container } from "react-bootstrap";
import './CounterPage.css'

const CounterPage = () => {
    const mainNumber = 5
    const [count, setCount] = useState(mainNumber)
    const [grades, setGrades] = useState([])

    let editValue
    const inputChange = (event) => {
        editValue = Number(event.target.value)
    }

    const inputChangeHandler = (event) => {
        let inputValue = Number(event.target.value)
        if (inputValue > 10) {
            setCount(10)
        } else if (inputValue < 1) {
            setCount(1)
        } else {
            setCount(inputValue)
        }
    }

    function counting(number) {
        setCount(prevState => prevState + number)
    }

    const addNumber = () => {
        setGrades(prevState => {
            let newState = [...prevState]
            newState.push(count)
            return newState
        })
        setCount(mainNumber)
    }
    const removeNumber = (index) => {
        let newState = grades.toSpliced(index, 1);
        setGrades(newState)
    }
    const editNumber = (index) => {
        let newState = grades.toSpliced(index, 1, editValue);
        setGrades(newState)
    }
    const getDisplayClass = (item) => {
        let displayClassName = '';

        if (item < 4) {
            displayClassName = 'red';
        } else if (item < 7) {
            displayClassName = 'orange';
        } else {
            displayClassName = 'green';
        }

        return displayClassName;
    }

    const reset = () => {
        setCount(mainNumber)
        setGrades([])
    }

    return (
        <div>
            <Container>
                <h1>CounterPage</h1>
                <h3 className={getDisplayClass(count)}>{count}</h3>
                <button onClick={() => counting(-1)} disabled={count < 2}>-1</button>
                <button onClick={() => counting(-2)} disabled={count < 3}>-2</button>
                <button onClick={() => counting(-5)} disabled={count < 6}>-5</button>
                <button onClick={reset}>Reset</button>
                <button onClick={() => counting(5)} disabled={count >= 6}>+5</button>
                <button onClick={() => counting(2)} disabled={count >= 9}>+2</button>
                <button onClick={() => counting(1)} disabled={count >= 10}>+1</button>
                <input type="number" max="10" min="1" value={count} onChange={inputChangeHandler} ></input>
                <button onClick={addNumber}>Add Number</button>

                {grades && grades.length > 0 ? (
                    <>
                        <h3 style={{ padding: "20px" }}>List:</h3>
                        <ul>
                            {grades.map((grade, index) => (
                                <li className={getDisplayClass(grade)} key={index}>
                                    {grade}
                                    <input type="number" max="10" min="1" onChange={inputChange}></input>
                                    <button onClick={() => removeNumber(index)}> Remove </button>
                                    <button onClick={() => editNumber(index)}> Edit </button>
                                </li>
                            ))}
                        </ul>
                    </>
                ) : <h3>List empty:</h3>}
            </Container>
        </div>
    )
}

export default CounterPage