import React from 'react'
import ShopItem from './item/ShopItem'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFlowers } from '../../redux/actions/flowers'

function Shop() {

    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchFlowers())
    }, []);
    const items = useSelector(({ flowers }) => flowers.items);
    console.log(items);

    return (
        <div>
            <div className="container">
                <div className="counter__settings">
                    <div className="counter">
                        <p>Показанно 10 результатов из 156</p>
                    </div>
                    <div className="sortSet">
                        Сортировать по: цене
                    </div>
                </div>
                <div className="shop__items">
                {items.map(obj => <ShopItem key={obj.id} {...obj} />)}
                </div>
            </div>
        </div>
    )
}

export default Shop
