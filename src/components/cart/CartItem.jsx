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
            <div className="cart__product-wrapper">
                <div className="cart__product">
                    <div className="cart__product-remove">
                        <span onClick={handleRemoveClick}>Удалить</span>
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
                        <div className="cart__product-quantity-item" onClick={handleMinusItem}>-</div>
                        <div className="cart__product-quantity-item">{toralCount}</div>
                        <div className="cart__product-quantity-item" onClick={handlePlusItem}>+</div>
                    </div>
                    <div className="cart__product-subtotal">
                        <div className="cart__product-subtotal-total__price">
                            {totalPrice} <span class="rub">i</span>
                        </div>
                    </div>
                </div></div>
        </div>
    )
}

export default CartItem
