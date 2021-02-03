import React from 'react'
import SimpleSlider from './SimpleSlider'

function Slider() {
    return (
        <div className="slider-wrap">
            <SimpleSlider />
            <div className="container">
                <div className="slider-container">
                    <h1 className="slider-title">Свежие цветы</h1>
                    <h6 className="slider-discription">ДОСТАВКА БУКЕТОВ ИЗ ЦВЕТОВ</h6>
                    <div className="slider-discription-bottom">Сделайте заказ на День святого Валентина с 25 января по 7 февраля и получите скидку 10% на весь заказ!</div>
                    <div className="slider-shop-btn">
                        <button>В магазин</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
