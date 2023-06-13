import * as types from "./ActionTypes";


const initailState = {
  isLoading: false,
  isError: false,
  token:"",
  logindata:[]
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
      case  types.LOGINUSERDATASUCESS : 
      return {
          ...state,
          isLoading:false,
          isError:false,
          logindata:payload,
      }


    default:
      return state;
  }
};

