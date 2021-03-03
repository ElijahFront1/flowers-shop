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
            <div className="cart-item-wrapper">
                <div className="cart-item">
                    <div className="cart-item__left-block">
                        <div className="cart-item__image">
                            <img src={imageUrl} alt="" />
                        </div>
                        <span className="cart-item__name">
                            {name}
                        </span>
                        <div className="cart-item__price">
                            {price} ₽
                        </div>
                    </div>
                    <div className="cart-item__right-block">
                        <div className="cart-item__quantity">
                            <span className="cart-item__quantity-item" onClick={handleMinusItem}>-</span>
                            <span className="cart-item__quantity-item">{toralCount}</span>
                            <span className="cart-item__quantity-item" onClick={handlePlusItem}>+</span>
                        </div>
                        <span className="cart-item__remove">
                            <span onClick={handleRemoveClick}>Удалить</span>
                        </span>
                        <div className="cart-item__subtotal">
                            <div className="subtotal-total-price">
                                {totalPrice} ₽
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
