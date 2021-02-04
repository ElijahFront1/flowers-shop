import React from 'react'
import ShopItem from '../../shop/item/ShopItem'

function NewArrival() {
    return (
        <div className="container">
            <div className="newArrival">
                <h1>Новые поступления</h1>
            </div>
            <div className="newArrival__products">
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
                <ShopItem />
            </div>
        </div>
    )
}

export default NewArrival
