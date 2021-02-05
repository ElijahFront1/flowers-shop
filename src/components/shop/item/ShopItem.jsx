import React from 'react'
import flower2 from '../../../images/flowers-item2.png'

function ShopItem() {
    return (
        <div className="product">
            <div className="product__previev">
                <img src="https://storage.florist.ru/f/get/content/bouquet-list/dd/84/_0a663a3aa328adba22f9c92c95f6/5a8adcb02aa5f.jpg" alt="" />
                <div className="product__discount">
                    <p>10%</p>
                </div>
                <div className="product__add-to-cart">
                    <p>Добавить в корзину</p>
                </div>
            </div>
            <div className="product__namePrice">
                <div className="product__name">
                    <p>Тюльпаны</p>
                </div>
                <div className="product__price">
                    <p>560 <span className="rub">i</span></p>
                </div>
            </div>
        </div>
    )
}

export default ShopItem
