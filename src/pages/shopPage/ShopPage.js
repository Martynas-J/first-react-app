import { useState } from "react"
import ShoppingItem from "./ShoppingItem"
import { Container } from "react-bootstrap"
import './ShopPage.css'


const ShopPage = () => {

    let shopListArr = [
        {
            title: "Milk",
            done: true,
        },
        {
            title: "Bread",
            done: false,

        },
        {
            title: "baguette",
            done: false,
        },
        {
            title: "soap",
            done: false,
        },
        {
            title: "salt",
            done: false,
        },
    ]

    const [goods, setGoods] = useState(shopListArr)

const addProduct = (event) => {

    const title = event.target.previousElementSibling.value

    setGoods(prevState => {
        let newState = [...prevState]
        newState.push({title})
        console.log(newState)
        return newState
    })
    }
    

    return (
        <div>
            <Container>
                <h2 className="pageTitle">ShopPage</h2>
                {goods && goods.length > 0 ? (
                    <>
                        <h3>ShopList:</h3>
                        <ul>
                            {goods.map((product, index) => (
                                <ShoppingItem
                                    key={index}
                                    product={product}
                                />
                            ))}
                        </ul>
                    </>
                ) : <h3>Your shopping list is empty</h3>}
                <input type="text" placeholder="Write Product"></input>
                <button onClick={addProduct} >Add Product</button>
            </Container>
        </div>
    )
}

export default ShopPage




// "pienas", "Duona", "Batonas", "Sviestas", "Miltai"
// 1. Naudojant react-router-dom sukurti du routes (puslapius) Shopping List.
// 1.1. Sukurti navigacijos komponentą, kuriame yra nuorodos, nukreipiančios į šiuos du puslapius (naudoti Link komponentą iš react-router-dom).

// 2. ShoppingList komponente sukurti masyvą state (naudojant useState) su penkių pirkinių sąrašu. Kiekvienas pirkinys turi būti objektas ir turėti properties:
// 2.1 title (string tipo)
// 2.2. done (boolean tipo)
// 3.1. Jeigu pirkinių masyvas neturi nei vieno nario, tai į ekrane parašyti: „Your shopping list is empty."
// 3.2. Jeigu pirkinių masyve yra bent vienas narys, tai kiekvieną nario title property išvesti į ekraną panaudojant ShoppingItem komponentą jam paduodant informaciją per props.