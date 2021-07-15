import { ShopActionsType } from './shop.types.js'
const INITAL_STATE = {
  collections: null,
}

const shopReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case ShopActionsType.UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: action.payload,
      }
    default:
      return state
  }
}

export default shopReducer
