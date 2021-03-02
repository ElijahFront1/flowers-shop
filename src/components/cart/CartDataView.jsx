import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../../redux/actions/cartActions'

function СartDataView() {
    const { totalPrice, totalCount } = useSelector(({ cartReducer }) => cartReducer)
    const dispatch = useDispatch();
    const onClearCart = () => {
        if (window.confirm('Удалить содержимое?')) {
            dispatch(clearCart())
        }
    }
    return (
        <div className="cart-data">
            <span>
                <span className="cart-data__total-count">Всего товаров в корзине: {totalCount}</span>
                <span className="cart-data__total-price">Общая стоимость: {totalPrice}</span>
            </span>
            <span className="cart-data__delete" onClick={onClearCart}> Очистить корзину</span>
        </div>
    )
}

export default СartDataView
