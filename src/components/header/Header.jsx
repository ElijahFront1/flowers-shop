import React from 'react'
import logoImg from '../../images/logo.png'
import Navbar from './Navbar/Navbar'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Header() {
    const { totalPrice, totalCount } = useSelector(({ cartReducer }) => cartReducer)
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <img src={logoImg} alt=""/>
                    </div>
                    <div className="phone-search">
                        <div className="phone">
                            <div className="icon-phone-wrap">
                                <i className="icon-phone"></i>
                            </div>
                            <div className="number-phone-wrap">
                                <h6>ТЕЛЕФОН</h6>
                                <p><a href="/">+7(963)-012-02-12</a></p>
                            </div>
                        </div>
                        <div className="search">
                            <form action="#">
                                <input type="text" placeholder="Искать..." />
                                <button>
                                    <span>
                                        <i className="icon-magnifier"></i>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="cart" >
                        <NavLink to="/cart">
                            <div className="cart-info">
                                <div className="cart-sup">
                                    <i className="icon-handbag"></i>
                                    <sup>{totalCount}</sup>
                                </div>
                                <h6>
                                    <div>Ваша корзина</div>
                                    <div className="cart-price">{totalPrice}</div>
                                </h6>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}
export default Header
