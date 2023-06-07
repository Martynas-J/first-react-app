

import React from 'react'

const ShoppingItem = ({ product }) => {
    let classes = product.done ? "ends shop-item" : "shop-item"
    return (
        <li className={classes}>{product.title}</li>

    )
}

export default ShoppingItem