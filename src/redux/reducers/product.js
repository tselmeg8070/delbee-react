import {PRODUCTS_RECEIVE} from "../actions/product";

export default function blogReducer (state={}, action) {
    switch (action.type) {
        case PRODUCTS_RECEIVE:
            return {
                ...state,
                ...action.products,
            };
        default:
            return state
    }
}
