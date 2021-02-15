import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchFlowers = (sortBy) => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3003/flowers?&_sort=${sortBy.type}&_order=${sortBy.order}`).then(({ data }) => {
        dispatch(setFlowers(data));
    })
}

export const setFlowers = (items) => ({
    type: 'SET_FLOWERS',
    payload: items,
})
