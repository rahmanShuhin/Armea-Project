const initialState = {
  user: null,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return { user: true };
    case "SIGN_OUT":
      return { user: false };
    default:
      return state;
  }
};
export default userReducer;
