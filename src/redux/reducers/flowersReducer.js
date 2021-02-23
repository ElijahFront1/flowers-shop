const initialState = {
    items: [],
}
const flowers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FLOWERS':
            return {
                ...state,
                items: action.payload,
            }
        default:
            return state;
    }
}

export default flowers;