import * as types from "./ActionTypes";


const initailState = {
  isLoading: false,
  isError: false,
  token:"",
  isAuth:false
  
};


export const Reducer = (state = initailState, action) => {
  const { type, payload } = action;

  switch (type) {
    case  types.LOGINUSERREQ : 
    return {
        ...state,
        isLoading:true,
        // isError:false,
        isAuth:false
    }
      case  types.LOGINUSERSUCESS : 
      return {
          ...state,
          isLoading:false,
          isError:false,
          token:payload,
          isAuth:true
      }
      case  types.LOGINUSERFAILURE : 
      return {
          ...state,
          isLoading:true,
          isError:true,
          isAuth:false
      }

      case  types.SIGNUPUSERSUCESS:
      return {
          ...state,
          isLoading:false,
          isError:false,
      }
      case  types.ADMINUSERSUCESS:
        return {
            ...state,
            isLoading:false,
            isError:false,
        }
        case  types.LOGOUT_SUCCESS:
          return {
              ...state,
              isLoading:false,
              isError:false,
              isAuth:false
          }


    default:
      return state;
  }
};

