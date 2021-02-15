import React from 'react'

function CartItem() {
    return (
        <div className="container">
            <div className="cart__product">
                <div className="cart__product-remove">
                    X
            </div>
                <div className="cart__product-image">
                    <img src="https://storage.florist.ru/f/get/content/bouquet-list/dd/84/_0a663a3aa328adba22f9c92c95f6/5a8adcb02aa5f.jpg" alt="" />
                </div>
                <div className="cart__product-name">
                    НА КРЫЛЬЯХ ВЕТРА
            </div>
                <div className="cart__product-price">
                    803 <span class="rub">i</span>
                </div>
                <div className="cart__product-quantity">
                    - <span>02</span> +
            </div>
                <div className="cart__product-subtotal">
                    1606 <span class="rub">i</span>
                </div>
            </div>
        </div>
    )
}

export default CartItem
