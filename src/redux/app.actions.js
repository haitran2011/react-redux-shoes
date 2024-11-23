export const addCartItem = (item) => {
  return {
    type: 'ADD_CART_ITEM',
    payload: item
  }
}

export const deleteCartItem = (id) => {
  return {
    type: 'DELETE_CART_ITEM',
    payload: {
      cartId: id
    }
  }
}

export const plusQuanlityCartItem = (id) => {
  return {
    type: 'PLUS_QUANLITY_CART_ITEM',
    payload: {
      cartId: id
    }
  }
}