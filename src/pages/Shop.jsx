import React from 'react'
import ShopItem from '../components/shop/item/ShopItem'
import SortSettings from '../components/sortSettings/SortSettings'
import { useSelector, useDispatch } from 'react-redux'
import { fetch_shop_page_items } from '../redux/actions/flowersActions'
import { setSortBy } from '../redux/actions/sortActions';

const sortSet = [
    { name: 'сначала популярные', type: 'popular', order: 'desc' },
    { name: 'по возростанию цены', type: 'price', order: 'asc' },
    { name: 'по убыванию цены', type: 'price', order: 'desc' },
]

function Shop() {
    const dispatch = useDispatch();
    const cartItems = useSelector(({ cartReducer }) => cartReducer.items);
    const items = useSelector(({ flowersReducer }) => flowersReducer.items);
    const { sortBy } = useSelector(({ sortReducer }) => sortReducer);

    React.useEffect(() => {
        dispatch(fetch_shop_page_items(sortBy))
    }, [sortBy]);

    const onSelectSortType = React.useCallback((type) => {
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
                    {items.map(obj => <ShopItem
                        onClickAddFlower={handleAddFlowerToCart}
                        addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                        key={obj.id} {...obj} />)}
                </div>
            </div>
        </div>
    )
}

export default Shop
