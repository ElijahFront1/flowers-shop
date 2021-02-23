import React from 'react'
import NewArrivalItem from './NewArrivalItem'
import { useSelector, useDispatch } from 'react-redux'
import { fetch_shop_page_items } from '../../../redux/actions/flowersActions'
import { setSortBy } from '../../../redux/actions/sortActions';

function NewArrival() {
    const dispatch = useDispatch();
    const { sortBy } = useSelector(({ sortReducer }) => sortReducer);
    const items = useSelector(({ flowersReducer }) => flowersReducer.items);
    console.log(items);
    React.useEffect(() => {
        dispatch(fetch_shop_page_items(sortBy))
    }, [sortBy]);
    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type))
    }, []);
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
