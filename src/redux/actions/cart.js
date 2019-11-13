export const CART_ADD = 'CART_ADD';

export function addToCart(product) {
    return {
        type: CART_ADD,
        product
    }
}
