export const PRODUCTS_RECEIVE = 'PRODUCTS_RECEIVE';

export function addProducts(products) {
    return {
        type: PRODUCTS_RECEIVE,
        products
    }
}
