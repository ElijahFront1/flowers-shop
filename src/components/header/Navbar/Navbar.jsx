import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav>
                <div className="top__navigation">
                    <ul>
                        <li className="top__navigation-item"><NavLink to="/home" activeClassName="activeLink">ГЛАВНАЯ</NavLink></li>
                        <li className="top__navigation-item"><NavLink to="/shop" activeClassName="activeLink">МАГАЗИН</NavLink></li>
                        <li className="top__navigation-item"><NavLink to="/gallery" activeClassName="activeLink">ГАЛЕРЕЯ</NavLink></li>
                        <li className="top__navigation-item"><NavLink to="/blog" activeClassName="activeLink">БЛОГ</NavLink></li>
                        <li className="top__navigation-item"><NavLink to="/contacts" activeClassName="activeLink">КОНТАКТЫ</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
