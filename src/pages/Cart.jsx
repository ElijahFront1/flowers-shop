import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../components/cart/CartItem'
import CartEmpty from '../components/cart/CartEmpty'
import { removeCartItem, minusCartItem, plusCartItem } from '../redux/actions/cartActions'
import СartDataView from '../components/cart/CartDataView';

function Cart() {
    const dispatch = useDispatch();
    const { totalCount, items } = useSelector(({ cartReducer }) => cartReducer)

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
                <СartDataView />
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
                {!totalCount && <CartEmpty />}
            </div>
        </div>
    )
}

export default Cart
