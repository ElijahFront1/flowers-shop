import React from 'react'
import { NavLink } from 'react-router-dom';

function SliderText() {
    return (
        <div>
            <div className="container">
                <div className="slider">
                    <h1 className="slider__title">Свежие цветы</h1>
                    <h6 className="slider__discription">Доставка букетов из цветов</h6>
                    <div className="slider__discription-bottom">Сделайте заказ на День святого Валентина с 7 марта по 23 апреля и получите скидку 10% на весь заказ!</div>
                    <div className="slider__shop-btn">
                        <NavLink to="/shop">
                            <button className="button">В магазин</button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderText
