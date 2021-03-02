import React from 'react'

function ShopItem({ id, name, imageUrl, price, onClickAddFlower, addedCount }) {

    const onAddFlower = () => {
        const obj = {
            id,
            name,
            imageUrl,
            price,
        };
        onClickAddFlower(obj)
    }

    return (
        <div className="product">
            <div className="product__previev">
                <img src={imageUrl} alt="" />
                <div className="product__discount">
                </div>
                <div className="product__add-to-cart">
                    <button onClick={onAddFlower} >Добавить в корзину
                     <span className="product__added-count">{addedCount}</span>
                    </button>
                </div>
            </div>
            <div className="product__name-price">
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
