

import React, { useState } from 'react'

const ShoppingItem = ({ product, editProductHandler, deleteProductHandler, index }) => {
    let { title, done } = product

    let [isEdit, setIsEdit] = useState(true)

    const editHandler = () => {
        setIsEdit(prevState => !prevState)
    }

    let editElements =
        <>
            <form className='edit-product-form' onSubmit={(event) => editProductHandler(event, index, editHandler)}>
                <input className='edit-product' defaultValue={title} type='text' name='edit-product'></input>
                <label htmlFor='or-is'>Empty </label>
                <input type='checkbox' id='or-is' name='or-is'></input>
                <button className='save-button' type='submit' >Save</button>
                <button className='delete-button' onClick={() => deleteProductHandler(index, editHandler)} >Delete</button>
            </form>
        </>
    let listElements =
        <>
            <span>{title}</span>
            <button className='edit-button' onClick={() => editHandler()}>Edit</button>
        </>
    let classes = done ? "ends shop-item" : "shop-item"
    return (
        <li className={classes} >
            {isEdit ? listElements : editElements}
        </li>
    )
}

export default ShoppingItem