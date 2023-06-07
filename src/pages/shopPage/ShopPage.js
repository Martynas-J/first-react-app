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
            title: "Baguette",
            done: false,
        },
        {
            title: "Soap",
            done: false,
        },
        {
            title: "Salt",
            done: false,
        },
    ]

    const [goods, setGoods] = useState(shopListArr)

    const addProductHandler = (event) => {
        event.preventDefault();
        const title = event.target["new-product"].value
        const done = JSON.parse(event.target["or-done"].value)
        setGoods(prevState => {
            let newState = [{ title, done }, ...prevState]
            return newState
        })
        event.target.reset()
    }
    const editProductHandler = (event, index, editHandler) => {
        event.preventDefault();
        const title = event.target["edit-product"].value;
        const done = event.target["or-is"].checked;
        let newState = [...goods];
        newState.splice(index, 1, { title, done });
        setGoods(newState);
        event.target.reset();
        editHandler()
    };
    const deleteProductHandler = (index, editHandler) => {
        let newState = goods.toSpliced(index, 1);
        setGoods(newState)
        editHandler()
    }

    return (
        <div>
            <Container>
                <h2 className="page-title">ShopPage</h2>
                <form onSubmit={addProductHandler} className="form-add-product">
                    <input type="text" name="new-product" placeholder="Write Product"></input>
                    <select name="or-done">
                        <option value={false}>Product is </option>
                        <option value={true}>Empty</option>
                    </select>
                    <button type="submit" >Add Product</button>
                </form>
                {goods && goods.length > 0 ? (
                    <>
                        <h3 className="list-title">ShopList:</h3>
                        <ul className="shop-list">
                            {goods.map((product, index) => (
                                <ShoppingItem
                                    key={index}
                                    product={product}
                                    index={index}
                                    editProductHandler={editProductHandler}
                                    deleteProductHandler={deleteProductHandler}
                                />
                            ))}
                        </ul>
                    </>
                ) : <h3>Your shopping list is empty</h3>}

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