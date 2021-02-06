import axios from 'axios'

export const setLoaded = (payload) => ({
    type: 'SET_LOADED',
    payload,
})

export const fetchFlowers = () => (dispatch) => {
    dispatch(setLoaded(false));
    axios.get(`http://localhost:3002/db.json`).then(({ data }) => {
        dispatch(setFlowers(data.flowers));
    })
}

export const setFlowers = (items) => ({
    type: 'SET_FLOWERS',
    payload: items,
})
