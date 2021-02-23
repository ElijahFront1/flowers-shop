const initialState = {
    category: null,
    sortBy: {
        type: 'popular',
        order: 'desc',
    },
}

const reducer = (state = initialState, action) => {
    if (action.type === 'SET_SORT_BY') {
        return {
            ...state,
            sortBy: action.payload,
        }
    };
    return state;
}

export default reducer;