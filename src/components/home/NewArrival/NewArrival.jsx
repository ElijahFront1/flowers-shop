import React from 'react'
import NewArrivalItem from './NewArrivalItem'
import { fetch_shop_page_items } from '../../../redux/actions/flowersActions'
import useShop from './../../../pages/shop/useShop'

function NewArrival() {
    const { dispatch, sortBy, items } = useShop();
    React.useEffect(() => {
        dispatch(fetch_shop_page_items(sortBy))
    }, [sortBy]);
    return (
        <div className="container">
            <div className="newArrival">
                <h1>Новые поступления</h1>
            </div>
            <div className="newArrival__products">
                {items.map(obj => obj.hasOwnProperty("novelty") && <NewArrivalItem
                    key={obj.id}
                    {...obj} />)}
            </div>
        </div>
    )
}

export default NewArrival
