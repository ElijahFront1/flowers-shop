import React from 'react'
import deliveryIcon from '../../../images/delivery-icon.png'
import cashbackIcon from '../../../images/cashback-icon.png'
import safetyIcon from '../../../images/safety-icon.png'
import giftsIcon from '../../../images/gifts-icon.png'

function Bonuses() {
    return (
        <div className="bonuses-wrap">
            <div><img src={deliveryIcon}/ ><p>Дешевая доставка</p><p>От 1500 рублей</p></div>
            <div><img src={cashbackIcon} /><p>Гарантии возврата</p><p>В течении 15 дней</p></div>
            <div><img src={safetyIcon} /><p>Безопасность</p><p>Оплата VISA MC</p></div>
            <div><img src={giftsIcon} /><p>Подарки, акции</p><p>Для всех</p></div>
        </div>
    )
}

export default Bonuses
