import * as types from "./ActionTypes";

const initailState = {
  isLoading: false,
  isError: false,
  Doctordata: [],
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
        Doctordata: payload,
      };

    case types.GETDOCTORFAILURE:
      return {
        ...state,
        isLoading: true,
        Doctordata: [],
      };

    default:
      return state;
  }
};
