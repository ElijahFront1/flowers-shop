import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetch_shop_page_items = (sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/shop_page_items?&_sort=${sortBy.type}&_page=1&_limit=8&_order=${sortBy.order}`).then(({ data }) => {
        dispatch(setShopPageItems(data));
    })
}

export const setShopPageItems = (items) => ({
    type: 'SET_FLOWERS',
    payload: items,
})
