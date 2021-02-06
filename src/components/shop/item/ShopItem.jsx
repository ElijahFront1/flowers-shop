import React from 'react'
import flower2 from '../../../images/flowers-item2.png'

function ShopItem({ name, imageUrl, price, types, sizes }) {
    return (
        <div className="product">
            <div className="product__previev">
                <img src={imageUrl} alt="" />
                <div className="product__discount">
                    <p>10%</p>
                </div>
                <div className="product__add-to-cart">
                    <p>Добавить в корзину</p>
                </div>
            </div>
            <div className="product__namePrice">
                <div className="product__name">
                    <p>{name}</p>
                </div>
                <div className="product__price">
                    <p>{price} <span className="rub">i</span></p>
                </div>
            </div>
        </div>
    )
}

export default ShopItem
