import React from 'react'
import ShopItem from '../../components/shop/item/ShopItem'
import SortSettings from '../../components/sortSettings/SortSettings'
import { useSelector } from 'react-redux'
import { fetchShopItems, setCurrentPage, setTotalPagesCountFn } from '../../redux/actions/shopActions'
import useShop from './useShop'

function Shop() {
    const { dispatch, sortBy, items, sortSet, onSelectSortType } = useShop();
    const cartItems = useSelector(({ cartReducer }) => cartReducer.items);
    const {currentPage, perPage, totalPagesCount} = useSelector(({ shopReducer }) => shopReducer);
    React.useEffect(() => {
        dispatch(fetchShopItems(sortBy, currentPage, perPage))
        dispatch(setTotalPagesCountFn())
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortBy, currentPage]);
    const handleAddFlowerToCart = (obj) => {
        dispatch({
            type: 'ADD_FLOWER_CART',
            payload: obj,
        })
    }
    const pagesCount = Array.of(Math.ceil(totalPagesCount / perPage))
    const pages = []
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div className="container">
                <div className="shop-data">
                    <div className="shop-data__counter">
                        <p>Показанна {currentPage} страница из {pages.length}</p>
                    </div>
                    <div className="shop-data__sort-set">
                        <SortSettings activeSortType={sortBy.type} items={sortSet} onClickSortType={onSelectSortType} />
                    </div>
                </div>
                <div className="shop-items">
                    {items.map(obj => <ShopItem
                        onClickAddFlower={handleAddFlowerToCart}
                        addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
                        key={obj.id} {...obj} />)}
                </div>
                <div className="shop-pagination">
                    {pages.map((page, index) => <span 
                    key={index} 
                    className={currentPage === page ? "shop-pagination__current-page" : ""}
                    onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
                </div>
            </div>
        </div>
    )
}

export default Shop
