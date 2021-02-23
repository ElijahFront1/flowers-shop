import React from 'react'

function CartItem({ id, name, type, size, totalPrice, toralCount, onRemove, onMinus, onPlus, price, imageUrl }) {

    const handleRemoveClick = () => {
        onRemove(id);
    }

    const handlePlusItem = () => {
        onPlus(id)
    }

    const handleMinusItem = () => {
        onMinus(id)
    }

    return (
        <div className="container">
            <div className="cart__product">
                <div className="cart__product-remove">
                    <span onClick={handleRemoveClick}>X</span>
                </div>
                <div className="cart__product-image">
                    <img src={imageUrl} alt="" />
                </div>
                <div className="cart__product-name">
                    {name}
                </div>
                <div className="cart__product-price">
                    {price} <span class="rub">i</span>
                </div>
                <div className="cart__product-quantity">
                    <span onClick={handleMinusItem}>-</span>  <span>{toralCount}</span> <span onClick={handlePlusItem}>+</span>
                </div>
                <div className="cart__product-subtotal">
                    {totalPrice} <span class="rub">i</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem
