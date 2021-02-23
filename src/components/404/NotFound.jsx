import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
    return (
        <div className="container">
            <div className="wrapper-404">
                <h1 class="error-404-title">404</h1>
                <h2>Страница не существует!</h2>
                <p>Ой! Страница, которую вы ищете, не существует. Возможно, она была перемещена или удалена.</p>
                <NavLink to="/home">ВЕРНУТЬСЯ НА ГЛАВНУЮ</NavLink>
            </div>
        </div>
    )
}

export default NotFound
