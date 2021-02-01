const initialState = {
  products: [],
};
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return handleAddToCart(state, action);
    case "REMOVE_FROM_CART":
      return handleRemoveFromCart(state, action);
    case "ADD_QUANTITY":
      return handleQuantityAdd(state, action);
    case "SUB_QUANTITY":
      return handleQuantityRemove(state, action);
    default:
      return [];
  }
};
export default cartReducer;

const handleAddToCart = (state, action) => {
  const arr = state.find((x) => x.id === action.id);
  if (!arr) {
    return [
      ...state,
      {
        id: action.id,
        quantity: 1,
      },
    ];
  } else {
    return state;
  }
};

const handleRemoveFromCart = (state, action) => {
  const arr = state.filter((x) => x.id !== action.id);
  return arr;
};

const handleQuantityAdd = (state, action) => {
  const arr = state.filter((x) => {
    if (x.id === action.id) {
      x.quantity = x.quantity + 1;
      return x;
    } else {
      return x;
    }
  });
  return arr;
};
const handleQuantityRemove = (state, action) => {
  const arr = state.filter((x) => {
    if (x.id === action.id) {
      x.quantity = x.quantity - 1;
      return x;
    } else {
      return x;
    }
  });
  return arr;
};
