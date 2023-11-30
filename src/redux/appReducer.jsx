
// action is an object with the following properties:
// 1. (mandatory): type (string) 
// 2. (payload): (optional)

const initialStore = {
    counter: 0,
    users: [{ id: 1, name: "Avi" }],
    products: []
};

function appReducer(store = initialStore, action) {
    switch (action.type) {
        case "PLUS":
            return { ...store, counter: store.counter + action.payload }
        case "MINUS":
            return { ...store, counter: store.counter - action.payload }
        case "RESTART":
            return { ...store, counter: 0 }
        default:
            return store
    }
}

export default appReducer