let initialState = {
    users: []
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USERS":
            return {
                ...state,
                users: action.payload
            }
        case "ADD":
            return {
                ...state,
                users: [action.payload, ...state.users]
            }
        case "UPDATE":
            return {
                ...state,
                users: state.users.map(user => user.invoiceId === action.payload.invoiceId ? action.payload : user)
            }

        case "DELETE":
            return {
                ...state,
                users: state.users.filter(user =>
                    user.invoiceId !== action.payload)
            }
        default:
            return state;
    }
}

export default userReducer;