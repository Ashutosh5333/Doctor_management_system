import * as types from "./ActionTypes";
import axios from "axios";

// ---------------

const getLoginreq = () => {
  return {
    type: types.LOGINUSERREQ,
  };
};

const getLoginsuccess = (payload) => {
  return {
    type: types.LOGINUSERSUCESS,
    payload,
  };
};

const geLoginfailure = () => {
  return {
    type: types.LOGINUSERFAILURE,
  };
};

// -------------

const getsignReq = () =>{
  return {
     type: types.SIGNUPUSERREQ
  }
}

const getsignSucess = (payload) => {
  return {
     type :types.SIGNUPUSERSUCESS,
     payload,
  }
}

const getsignFail = () => {
 return {
     type :types.SIGNUPUSERFAILURE
 }
}


//  -------------- Admin user ----------


const AdminloggedReq = () =>{
  return {
     type: types.ADMINUSERREQ
  }
}

const AdminloggedSucess = (payload) => {
  return {
     type :types.ADMINUSERSUCESS,
     payload,
  }
}

const AdminloggedFail = () => {
 return {
     type :types.ADMINUSERFAILURE
 }
}



export const Loginpost = (payload) => (dispatch) => {
  dispatch(getLoginreq());
  return axios
    .post(`https://doctorappoinment.onrender.com/login`, payload)
    .then((r) => {
      return dispatch(getLoginsuccess(r.data));
    })
    .catch((err) => {
      dispatch(geLoginfailure());
    });
};

export const Signuppost =(payload) => (dispatch) => {
  dispatch(getsignReq);
  return axios.post(`https://doctorappoinment.onrender.com/signup`,payload)
    .then((r) => {
      return dispatch(getsignSucess(r));
    })
    .catch((err) => {
      dispatch(getsignFail());
    });
};


    // --------------- Admin Logged ---------------

    
export const Adminpost = (payload) => (dispatch) => {
  dispatch(AdminloggedReq());
  return axios
    .post(`https://doctorappoinment.onrender.com/admin`, payload)
    .then((r) => {
      return dispatch(AdminloggedSucess(r.data));
    })
    .catch((err) => {
      dispatch(AdminloggedFail());
    });
};