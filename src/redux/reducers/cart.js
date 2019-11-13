import {CART_ADD} from "../actions/cart";

export default function cartReducer (state=[], action) {
    switch (action.type) {
        case CART_ADD:
            state.push(action.product);
            return state;
        default:
            return state
    }
}
