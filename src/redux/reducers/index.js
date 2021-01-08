import AT from "../actions/actionTypes";

const initialState = {
  userType: "",
  user: "",
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AT.USER_TYPE:
      return { ...state, userType: payload };
    case AT.USER:
      return { ...state, user: payload };
    default:
      return state;
  }
};
