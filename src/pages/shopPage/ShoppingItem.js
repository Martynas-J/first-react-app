

import React, { useState } from 'react'

const ShoppingItem = ({ product, editProductHandler, index }) => {
    let { title, done } = product

    let [productTitle, setProductTitle] = useState(title)
    let [productDone, setProductDone] = useState(done)
    console.log(productDone)
    console.log(done)

    const itemInputHandler = (event) => {
        setProductTitle(event.target.value);
        setProductDone(event.target.checked)
    }

    let editElements = <>
        <input className='edit-product' defaultValue={title} type='text' name='edit-product' onChange={itemInputHandler}></input>
        <label htmlFor='or-is'>Empty </label>
        <input type='checkbox' id='or-is' name='or-is' onChange={itemInputHandler}></input>
        <button className='save-button' type='submit' onClick={() => setProductTitle(productTitle)}>Save</button>
    </>
    let listElement = <>
        {productTitle}

        <button className='edit-button' onClick={() => setProductTitle("") }>Edit</button>
    </>
    let classes = done ? "ends shop-item" : "shop-item"
    return (
        <li className={classes}>
            <form className='edit-product-form' onSubmit={(event) => editProductHandler(event, index)}>
                {(productTitle === title || productDone == done) ? listElement : editElements}
            </form>
        </li>
    )
}

export default ShoppingItem