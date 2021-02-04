import React from 'react'
import deliveryIcon from '../../../images/delivery-icon.png'

function BonusesItem() {
    return (
        <div className="bonuses-item">
            <div>
                <img src={deliveryIcon} />
            </div>
            <div>
                <p>Дешевая доставка</p>
                <p>От 1500 рублей</p>
            </div>
        </div>
    )
}

export default BonusesItem
