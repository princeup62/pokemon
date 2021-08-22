const initialState = {};

export default function cartItems(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return action.payload;
      break;

    default:
      return state;
      break;
  }
}
