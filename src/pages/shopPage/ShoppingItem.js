

import React from 'react'

const ShoppingItem = ({ product, editProductHandler, index }) => {
    let classes = product.done ? "ends shop-item" : "shop-item"
    return (
        <li className={classes}>
            {product.title}
            <form className='edit-product-form' onSubmit={(event) => editProductHandler(event, index)}>
                <input className='edit-product' maxLength={"20"} type='text' name='edit-product'></input>
                <label htmlFor='or-is'>Empty</label>
                <input type='checkbox' id='or-is' name='or-is'></input>
                <button className='edit-button' type='submit'>Edit</button>
            </form>
        </li>
    )
}

export default ShoppingItem