const initialState = {
  user: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SIGN_IN":
      return {
        user: true,
        email: action.email,
        name: action.name,
        country: action.country,
        region: action.region,
        id: action.id,
        token: action.token,
        verified: action.verified,
      };
    case "SIGN_OUT":
      return { user: false };
    default:
      return state;
  }
};
export default userReducer;
