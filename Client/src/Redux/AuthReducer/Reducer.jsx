import * as types from "./ActionTypes";


const initailState = {
  isLoading: false,
  isError: false,
  token:"",
  
};


export const Reducer = (state = initailState, action) => {
  const { type, payload } = action;

  switch (type) {
   
      case  types.LOGINUSERSUCESS : 
      return {
          ...state,
          isLoading:false,
          isError:false,
          token:payload,
      }
      case  types.SIGNUPUSERSUCESS:
      return {
          ...state,
          isLoading:false,
          isError:false,
      }


    default:
      return state;
  }
};

