import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSortBy } from '../../redux/actions/sortActions';


export default function useShop() {
    const sortSet = [
        { name: 'сначала популярные', type: 'popular', order: 'desc' },
        { name: 'по возростанию цены', type: 'price', order: 'asc' },
        { name: 'по убыванию цены', type: 'price', order: 'desc' },
    ]
    const dispatch = useDispatch();
    const { sortBy } = useSelector(({ sortReducer }) => sortReducer);
    const items = useSelector(({ shopReducer }) => shopReducer.items);
    const cartItems = useSelector(({ cartReducer }) => cartReducer.items);
    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, []);
    return { dispatch, sortBy, items, sortSet, cartItems, onSelectSortType }
}