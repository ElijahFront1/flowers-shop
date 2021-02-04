import React from 'react'
import flower2 from '../../../images/flowers-item2.png'

function ShopItem() {
    return (
        <div className="product">
            <div className="product__previev">
                <img src={flower2} alt="" srcset=""/>
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
                    <p>560 <span class="rub">i</span></p>
                </div>
            </div>
        </div>
    )
}

export default ShopItem
