import AT from "./actionTypes";

const setUserType = (payload) => {
  return {
    type: AT.USER_TYPE,
    payload,
  };
};

const setUser = (payload) => {
  return {
    type: AT.USER,
    payload,
  };
};

export default {
  setUserType,
  setUser,
};
