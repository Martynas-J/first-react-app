import { Container } from "react-bootstrap"
import "./FreeTime.css"
import { useState } from "react"

const FreeTime = () => {

    const [item, setItem] = useState("")
    const [nullButton, setNullButton] = useState(true)
    const [plusButton, setPlusButton] = useState(false)
    const [minusButton, setMinusButton] = useState(false)
    const [multiplyButton, setMultiplyButton] = useState(false)
    const [divisionButton, setDivisionButton] = useState(false)
    const [equalButton, setEqualButton] = useState(true)
    const [dotButton, setDotButton] = useState(false)

    const numberHandle = (event) => {
        setItem(prevState => prevState + event.target.value)
        setNullButton(false)
        setPlusButton(false)
        setMinusButton(false)
        setMultiplyButton(false)
        setDivisionButton(false)
        setEqualButton(false)

    }
    const symbolsHandle = (event) => {
        setItem(prevState => prevState + event.target.value)
        setNullButton(true)
        setPlusButton(true)
        setMinusButton(true)
        setMultiplyButton(true)
        setDivisionButton(true)
        setEqualButton(true)
        setDotButton(false)
        if (!dotButton) {
            setDotButton(true)
            setNullButton(false)
        }
    }

    const countHandle = () => {
        let sum = eval(item)
        setItem(sum)
        setNullButton(false)
    }
    const cleanHandle = () => {
        setItem("")
        setNullButton(true)
        setNullButton(true)
        setPlusButton(true)
        setMinusButton(true)
        setMultiplyButton(true)
        setDivisionButton(true)
        setEqualButton(true)
        setDotButton(false)
    }
    const cleanOneHandle = () => {
        console.log(item[item.length - 1])
        if (item[item.length - 1] === "-" || item[item.length - 1] === "+" ||
            item[item.length - 1] === "*" || item[item.length - 1] === "/") {
            setPlusButton(false)
            setMinusButton(false)
            setMultiplyButton(false)
            setDivisionButton(false)
            setDotButton(false)
        } else if (item[item.length - 1] === ".") {
            setDotButton(false)
        } else {
            setPlusButton(true)
            setMinusButton(true)
            setMultiplyButton(true)
            setDivisionButton(true)
            setDotButton(true)
        }
        setItem(item.toString().slice(0, -1))
        setNullButton(false)
        if (!item[1]) {
            setNullButton(true)
            setDotButton(false)
        }
    }
    const sgrHandle = () => {
        setItem(item * item)
        setNullButton(false)
    }

    return (
        <Container>
            <div className="wrapper">
                <h1 className="free-time-title">Calculator</h1>
                <div className="result-container">
                    <input name="resultStr" className="result" value={item} readOnly type="text"></input>
                </div>
                <div className="button-container">


                    <button onClick={sgrHandle} type="button" className="all-button">SQR</button>
                    <button onClick={numberHandle} value="%" className="all-button" disabled>%</button>
                    <button onClick={cleanOneHandle} type="button" className="all-button">{"<="}</button>
                    <button onClick={cleanHandle} type="button" className="all-button">C</button>
                    <button onClick={numberHandle} value="7" className="all-button">7</button>
                    <button onClick={numberHandle} value="8" className="all-button">8</button>
                    <button onClick={numberHandle} value="9" className="all-button">9</button>
                    <button onClick={symbolsHandle} value="/" className="all-button" disabled={divisionButton}>/</button>

                    <button onClick={numberHandle} value="4" className="all-button">4</button>
                    <button onClick={numberHandle} value="5" className="all-button">5</button>
                    <button onClick={numberHandle} value="6" className="all-button">6</button>
                    <button onClick={symbolsHandle} value="*" className="all-button" disabled={multiplyButton}>*</button>

                    <button onClick={numberHandle} value="1" className="all-button">1</button>
                    <button onClick={numberHandle} value="2" className="all-button">2</button>
                    <button onClick={numberHandle} value="3" className="all-button">3</button>
                    <button onClick={symbolsHandle} value="-" className="all-button" disabled={minusButton}>-</button>

                    <button onClick={symbolsHandle} value="." className="all-button" disabled={dotButton}>.</button>
                    <button onClick={numberHandle} value="0" className="all-button" disabled={nullButton} >0</button>
                    <button className="all-button" type="button" onClick={countHandle} disabled={equalButton} >=</button>
                    <button onClick={symbolsHandle} value="+" className="all-button" disabled={plusButton}>+</button>
                </div>

            </div>
        </Container >
    )
}

export default FreeTime