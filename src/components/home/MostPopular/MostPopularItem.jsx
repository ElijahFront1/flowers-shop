import React from 'react'
import { NavLink } from 'react-router-dom'

function ShopItem({ name, imageUrl }) {

    return (
        <div class="container1">
            <img src={imageUrl} alt="Avatar" class="image" />
                <div class="middle">
                    <NavLink to="/shop" class="text">В магазин</NavLink>
                </div>
        </div>
    )
}

export default ShopItem
