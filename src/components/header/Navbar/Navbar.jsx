import React from 'react'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav>
                <div className="top-navigation">
                    <ul>
                        <li className="item"><NavLink to="/home" activeClassName="activeLink">ГЛАВНАЯ</NavLink></li>
                        <li className="item"><NavLink to="/shop" activeClassName="activeLink">МАГАЗИН</NavLink></li>
                        <li className="item"><NavLink to="/gallery" activeClassName="activeLink">ГАЛЕРЕЯ</NavLink></li>
                        <li className="item"><NavLink to="/home" activeClassName="activeLink">БЛОГ</NavLink></li>
                        <li className="item"><NavLink to="/home" activeClassName="activeLink">КОНТАКТЫ</NavLink></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
