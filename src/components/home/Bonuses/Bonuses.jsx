import React from 'react'
import cashbackIcon from '../../../images/cashback-icon.png'
import safetyIcon from '../../../images/safety-icon.png'
import giftsIcon from '../../../images/gifts-icon.png'
import deliveryIcon from '../../../images/delivery-icon.png'

function Bonuses() {
    return (
        <div className="container">
            <div className="bonuses-wrap">
                <div className="bonuses">
                    <div className="bonuses__item">
                        <div>
                            <img src={deliveryIcon} />
                        </div>
                        <div>
                            <p>Дешевая доставка</p>
                            <p>От 1500 рублей</p>
                        </div>
                    </div>
                    <div className="bonuses__item">
                        <div>
                            <img src={giftsIcon} />
                        </div>
                        <div>
                            <p>Подарки, акции</p>
                            <p>Для всех</p>
                        </div>
                    </div>
                    <div className="bonuses__item">
                        <div>
                            <img src={safetyIcon} />
                        </div>
                        <div>
                            <p>Безопасность</p>
                            <p>Оплата VISA MC</p>
                        </div>
                    </div>
                    <div className="bonuses__item">
                        <div>
                            <img src={cashbackIcon} />
                        </div>
                        <div>
                            <p>Гарантии возврата</p>
                            <p>В течении 15 дней</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bonuses
