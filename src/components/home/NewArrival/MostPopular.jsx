import React from 'react'
import MostPopularItem from './MostPopularItem'
import { fetchShopItems } from '../../../redux/actions/shopActions'
import useShop from '../../../pages/shop/useShop'

function MostPopular() {
    const { dispatch, sortBy, items } = useShop();
    React.useEffect(() => {
        dispatch(fetchShopItems(sortBy))
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortBy]);
    const mostPopularItems = items.slice(0, 8)
    return (
        <div className="container">
            <div className="mostPopular">
                <h1>Самые популярные компрозиции</h1>
            </div>
            <div className="mostPopular__products">
                {mostPopularItems.map(obj => <MostPopularItem
                    key={obj.id}
                    {...obj} />)}
            </div>
        </div>
    )
}

export default MostPopular
