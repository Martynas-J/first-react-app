

import React from 'react'

const ShoppingItem = ({ product }) => {
    let classes = product.done ? "ends shop-item" : "shop-item"
    return (
        <div>
            <li className={classes}>{product.title}</li>
        </div>
    )
}

export default ShoppingItem