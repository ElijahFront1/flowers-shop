import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/cart/CartItem'
import { clearCart, removeCartItem, minusCartItem, plusCartItem } from '../redux/actions/cartActions'

function Cart() {
    const dispatch = useDispatch();
    const { totalPrice, totalCount, items } = useSelector(({ cartReducer }) => cartReducer)
    console.log(items);
    const onClearCart = () => {
        if (window.confirm('Удалить содержимое?')) {
            dispatch(clearCart())
        }
    }


    const addPizzas = Object.keys(items).map(key => {
        return items[key].items[0]
    });

    const onRemoveCartItem = (id) => {
        dispatch(removeCartItem(id))
    }

    const onPlusCartItem = (id) => {
        dispatch(plusCartItem(id))
    }

    const onMinusCartItem = (id) => {
        dispatch(minusCartItem(id))
    }

    return (
        <div className="container">
            <div className="cart__wrapper">
                <span>
                    <span className="cart-total__count">Всего: {totalCount}</span>
                    <span className="cart-total__price">Стоимость: {totalPrice}</span>
                </span>
                <span onClick={onClearCart}> Очистить корзину</span>
            </div>
            {addPizzas.map(obj => <CartItem
                key={obj.id}
                price={obj.price}
                imageUrl={obj.imageUrl}
                name={obj.name}
                id={obj.id}
                totalPrice={items[obj.id].totalPrice}
                toralCount={items[obj.id].items.length}
                onRemove={onRemoveCartItem}
                onMinus={onMinusCartItem}
                onPlus={onPlusCartItem}
            />)}
        </div>
    )
}

export default Cart
