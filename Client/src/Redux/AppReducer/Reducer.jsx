import * as types from "./ActionTypes";

const initailState = {
  isLoading: false,
  isError: false,
  Projectdata: [],
};

export const Reducer = (state = initailState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GETDOCTORREQ:
      return {
        ...state,
        isLoading: true,
      };

    case types.GETDOCTORSUCESS:
      return {
        ...state,
        isLoading: false,
        Projectdata: payload,
      };

    case types.GETDOCTORFAILURE:
      return {
        ...state,
        isLoading: true,
        Projectdata: [],
      };

    default:
      return state;
  }
};
