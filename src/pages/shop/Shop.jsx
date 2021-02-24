import React from 'react'
import ShopItem from '../../components/shop/item/ShopItem'
import SortSettings from '../../components/sortSettings/SortSettings'
import { useSelector } from 'react-redux'
import { fetch_shop_page_items } from '../../redux/actions/flowersActions'
import useShop from './useShop'

function Shop() {
    const { dispatch, sortBy, items, sortSet, onSelectSortType } = useShop();
    const cartItems = useSelector(({ cartReducer }) => cartReducer.items);
    React.useEffect(() => {
        dispatch(fetch_shop_page_items(sortBy))
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortBy]);
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
                        <p>Показанно {items.length} результатов из {items.length}</p>
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
