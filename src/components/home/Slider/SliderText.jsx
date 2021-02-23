import React from 'react'
import { NavLink } from 'react-router-dom';

function SliderText() {
    return (
        <div>
            <div className="container">
                <div className="slider">
                    <h1 className="slider-title">Свежие цветы</h1>
                    <h6 className="slider-discription">Доставка букетов из цветов</h6>
                    <div className="slider-discription-bottom">Сделайте заказ на День святого Валентина с 25 января по 7 февраля и получите скидку 10% на весь заказ!</div>
                    <div className="slider-shop-btn">
                        <NavLink to="/shop">
                            <button>В магазин</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderText
