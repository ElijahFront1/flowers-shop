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
                    <div className="cart-item__remove">
                        <span onClick={handleRemoveClick}>Удалить</span>
                    </div>
                    <div className="cart-item__image">
                        <img src={imageUrl} alt="" />
                    </div>
                    <div className="cart-item__name">
                        {name}
                    </div>
                    <div className="cart-item__price">
                        {price} <span class="rub">i</span>
                    </div>
                    <div className="cart-item__quantity">
                        <div className="cart-item__quantity-item" onClick={handleMinusItem}>-</div>
                        <div className="cart-item__quantity-item">{toralCount}</div>
                        <div className="cart-item__quantity-item" onClick={handlePlusItem}>+</div>
                    </div>
                    <div className="cart-item__subtotal">
                        <div className="subtotal-total-price">
                            {totalPrice} <span class="rub">i</span>
                        </div>
                    </div>
                </div></div>
        </div>
    )
}

export default CartItem
