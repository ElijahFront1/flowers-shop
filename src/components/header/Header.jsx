import React from 'react'
import logoImg from '../../images/site-logo.png'
import Navbar from './Navbar/Navbar'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

function Header() {
    const { totalPrice, totalCount } = useSelector(({ cartReducer }) => cartReducer)
    const [input, setInput] = React.useState('');
    return (
        <header>
            <div className="container">
                <div className="header">
                    <div className="header-logo">
                        <NavLink to="/home">
                            <img src={logoImg} alt="" />
                        </NavLink>
                    </div>
                    <div className="phone-search">
                        <div className="phone">
                            <i className="icon-phone"></i>
                            <div className="phone__number">
                                <p>ТЕЛЕФОН</p>
                                <p>+7(963)-012-02-12</p>
                            </div>
                        </div>
                        <div className="search">
                            <form>
                                <input value={input} onInput={e => setInput(e.target.value)} placeholder="Искать..." />
                                <button>
                                    <span>
                                        <i className="icon-magnifier"></i>
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="header-cart-link" >
                        <NavLink to="/cart">
                            <div className="header-cart-link__cart-info">
                                <div className="header-cart-link__cart-sup">
                                    <i className="icon-handbag"></i>
                                    <sup>{totalCount}</sup>
                                </div>
                                <p>
                                    <div>Ваша корзина</div>
                                    <div className="header-cart-link__cart-price">{totalPrice}</div>
                                </p>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <Navbar />
        </header>
    )
}
export default Header
