import axios from 'axios'

export const setTotalPagesCountFn = () => (dispatch) => {
    axios.get(`/shop_page_items`).then(({ data }) => {
        dispatch(setTotalPagesCount(data.length))
    })
}

export const fetchShopItems = (sortBy, currentPage, perPage) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`/shop_page_items?&_sort=${sortBy.type}&_page=${currentPage}&_limit=${perPage}&_order=${sortBy.order}`).then(({ data }) => {
        dispatch(setShopPageItems(data));
    })

}

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const setShopPageItems = (items) => ({
    type: 'SET_FLOWERS',
    payload: items,
})

export const setCurrentPage = (page) => ({
    type: 'SET_CURRENT_PAGE',
    payload: page
})

export const setTotalPagesCount = (count) => ({
    type: 'SET_TOTAL_PAGES_COUNT',
    payload: count,
})
