const initialState = {
  carts: []
}

export const appReducer = (state = initialState, { type, payload }) => {
  switch(type) {
    case 'ADD_CART_ITEM': {
      return {
        ...state,
        carts: [...state.carts, payload || {}]
      }
    }
    case 'DELETE_CART_ITEM': {
      const newCarts = state.carts.filter(cart => cart.id !== payload.cartId);
      return {
        ...state,
        carts: newCarts
      }
    }
    case 'PLUS_QUANLITY_CART_ITEM': {
      const newCarts = [...state.carts];
      const cartIndex = newCarts.findIndex(cart => cart.id === payload.cartId);
      newCarts[cartIndex].quanlity += 1;
      
      return {
        ...state,
        carts: newCarts
      }
    }
    default:
      return state;
  }
}