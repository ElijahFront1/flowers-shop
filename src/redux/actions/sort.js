export const setSortBy = ({type, order}) => ({
    type: 'SET_SORT_BY',
    payload: {type, order},  //type: "popular", order: "desc"
})

export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex,
})
