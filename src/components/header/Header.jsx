import React from 'react'
import logoImg from '../../images/logo.png'
import Navbar from './Navbar/Navbar'
import { NavLink } from 'react-router-dom';
import {useSelector} from 'react-redux'

function Header() {
    const { totalPrice, totalCount } = useSelector(({ cart }) => cart)
    return (
        <div>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <img src={logoImg} />
                    </div>
                    <div className="phone-search">
                        <div className="phone">
                            <div className="icon-phone-wrap">
                                <i className="icon-phone"></i>
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
                                        <i className="icon-magnifier"></i>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <NavLink to="/cart">
                        <div className="cart" >
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
                        </div>
                    </NavLink>
                </div>
            </div>
            <Navbar />
        </div>
    )
}
{/* <div className="phone">
    <div className="icon-phone-wrap">
    <i className="icon-phone"></i>
    </div>
    <h6>ТЕЛЕФОН</h6>
    <p><a href="/">(+88) 259 269 321</a></p>
 </div> */}
export default Header
