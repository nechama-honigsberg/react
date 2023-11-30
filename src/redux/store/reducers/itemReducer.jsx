const initialState = {
    items: [{name: "car"}]
};

export const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return { ...state, items: [...state.items, action.payload] }
    }
    return state;
}

