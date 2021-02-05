import React from 'react'
import ShopItem from './item/ShopItem'

function Shop() {
    return (
        <div>
            <div className="container">
                <div className="counter__settings">
                    <div className="counter">
                        <p>Показанно 12 результатов из 156</p>
                    </div>
                    <div className="sortSet">
                        Сортировать по: цене
                    </div>
                </div>
                <div className="shop__items">
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
        </div>
    )
}

export default Shop
