const initialstate = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
};

const cart = (state = initialstate, action) => {
    switch (action.type) {
        case 'ADD_FLOWER_CART':
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload] 
            };

            const allFlowers = [].concat.apply([], Object.values(newItems));
            const totalPrice = allFlowers.reduce((sum, obj) => obj.price + sum, 0);

            return { 
                ...state,
                items: newItems,
                totalCount: allFlowers.length,
                totalPrice,
            }
        default:
            return state;
    }
}

export default cart;