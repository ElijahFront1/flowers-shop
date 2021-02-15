import React from 'react'
import ShopItem from './item/ShopItem'
import SortSettings from '../sortSettings/SortSettings'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFlowers } from '../../redux/actions/flowers'
import { setSortBy } from '../../redux/actions/sort';

const sortSet = [
    { name: 'сначала популярные', type: 'popular', order: 'desc' },
    { name: 'по возростанию цены', type: 'price', order: 'asc' },
    { name: 'по убыванию цены', type: 'price', order: 'desc' },
]

function Shop() {
    const dispatch = useDispatch();
    const cartItems = useSelector(({ cart }) => cart.items);
    const items = useSelector(({ flowers }) => flowers.items);
    const { sortBy } = useSelector(({ sort }) => sort);

    React.useEffect(() => {
        dispatch(fetchFlowers(sortBy))
    }, [sortBy]);

    const onSelectSortType = React.useCallback((type) => {
        console.log(type);
        dispatch(setSortBy(type))
    }, []);

    const handleAddFlowerToCart = (obj) => {
        dispatch({
            type: 'ADD_FLOWER_CART',
            payload: obj,
        })
    }

    return (
        <div>
            <div className="container">
                <div className="counter__settings">
                    <div className="counter">
                        <p>Показанно 10 результатов из 156</p>
                    </div>
                    <div className="sortSet">
                        <SortSettings activeSortType={sortBy.type} items={sortSet} onClickSortType={onSelectSortType} />
                    </div>
                </div>
                <div className="shop__items">
                    {items.map(obj => <ShopItem onClickAddFlower={handleAddFlowerToCart} addedCount={cartItems[obj.id] && cartItems[obj.id].length} key={obj.id} {...obj} />)}
                </div>
            </div>
        </div>
    )
}

export default Shop
