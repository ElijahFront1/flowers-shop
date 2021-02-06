const initialState = {
    items: [],
    isLoaded: false,
}
const flowers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_FLOWERS':
            return {
                ...state,
                items: action.payload,
                isLoaded: true,
            }

        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            }
        default:
            return state;
    }
}

export default flowers;