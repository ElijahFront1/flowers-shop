import React from 'react'
import logoImg from '../../images/logo.png'

function Header() {
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <img src={logoImg} />
                    </div>
                    <div className="phone-search">
                        <div className="phone">
                            <div class="icon-phone-wrap">
                                <i class="icon-phone"></i>
                            </div>
                            <div className="number-phone-wrap">
                                <h6>ТЕЛЕФОН</h6>
                                <p><a href="/">(+88) 259 269 321</a></p>
                            </div>
                        </div>
                        <div className="search">
                            <form action="#">
                                <input type="text" placeholder="Искать..." />
                                <button>
                                    <span>
                                        <i class="icon-magnifier"></i>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div class="cart">
                        <div a href="#" class="cart-info">
                            <div class="cart-sup">
                                <i class="icon-handbag"></i>
                                <sup>2</sup>
                            </div>
                            <h6>
                                <div>Ваша корзина</div>
                                <div className="cart-price">560 рублей</div>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
            <nav>
                <div className="top-navigation">
                    <ul>
                        <li>ГЛАВНАЯ</li>
                        <li>МАГАЗИН</li>
                        <li>ГАЛЕРЕЯ</li>
                        <li>БЛОГ</li>
                        <li>КОНТАКТЫ</li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
{/* <div className="phone">
    <div class="icon-phone-wrap">
    <i class="icon-phone"></i>
    </div>
    <h6>ТЕЛЕФОН</h6>
    <p><a href="/">(+88) 259 269 321</a></p>
 </div> */}
export default Header
