import * as types from "./actionTypes"

const initialState = {
    cart : [],
    isLoading : false,
    isError : false
}


const reducer = (oldState = initialState, action) => {
    const { type, payload } = action
    switch (type) {
        case types.GET_CART_REQUEST:
            return { ...oldState, isLoading: true }
        case types.GET_CART_SUCCESS:
            return { ...oldState, isLoading: false, cart: payload }
        case types.GET_CART_FALIURE :
            return { ...oldState, isLoading: false, isError: true }
        case types.DELETE_CART_DATA:
            return { ...oldState, isLoading: false, cart: [...oldState.cart,payload] }
        default:
            return oldState
    }
}
export {reducer}