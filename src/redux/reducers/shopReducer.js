const initialState = {
    items: [],
    currentPage: 1,
    perPage: 8,
    totalPagesCount: 0,
}

const flowers = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_TOTAL_PAGES_COUNT':
            return {
                ...state,
                totalPagesCount: action.payload,
            }
        case 'SET_FLOWERS':
            return {
                ...state,
                items: action.payload,
                totalPagesCount: state.totalPagesCount,
            }
        case 'SET_CURRENT_PAGE':
            return {
                ...state,
                currentPage: action.payload,
            }
        default:
            return state;
    }
}

export default flowers;