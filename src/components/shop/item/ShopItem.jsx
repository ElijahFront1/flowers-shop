import React from 'react'

function ShopItem({ id, name, imageUrl, price, types, sizes, onClickAddFlower, addedCount }) {

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
            <div className="product-previev">
                <img src={imageUrl} alt="" />
                <div className="product-discount">
                </div>
                <div className="product-add__to__cart">
                    <button onClick={onAddFlower} >Добавить в корзину
                     <span className="product-added__count">{addedCount}</span>
                    </button>
                </div>
            </div>
            <div className="product-namePrice">
                <div className="product-name">
                    <p>{name}</p>
                </div>
                <div className="product-price">
                    <p>{price} <span className="rub">i</span></p>
                </div>
            </div>
        </div>
    )
}

export default ShopItem
