import React from 'react'
import { NavLink } from 'react-router-dom'
import emptyCartImg from '../../images/empty-cart.png'

function CartEmpty() {
    return (
        <div className="empty-cart">
            <img src={emptyCartImg} alt="" />
            <h3>Ваша корзина пуста</h3>
            <NavLink to="/shop" className="error__404-back-to-home">ВЕРНУТЬСЯ В МАГАЗИН</NavLink>
        </div>
    )
}

export default CartEmpty
