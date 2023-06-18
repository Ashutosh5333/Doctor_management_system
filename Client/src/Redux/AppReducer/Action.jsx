import axios from "axios";
import * as types from "./ActionTypes";

//  ----------  Peoject  Data -------------   //

const getdatareq = () => {
  return {
    type: types.GETDOCTORREQ,
  };
};

const getdatasuccess = (payload) => {
  return {
    type: types.GETDOCTORSUCESS,
    payload,
  };
};

const getdatafailure = () => {
  return {
    type: types.GETDOCTORFAILURE,
  };
};

     // ------------ single Doctor ----------- //

      
const getsingledoctorReq = () =>{
  return {
     type: types.GETSINGLE_DOCTOR_REQUEST
  }
} 
const getsingledoctorSucess = (payload) => {
  return {
     type :types.GETSINGLE_DOCTOR_SUCCESS,
     payload,
  }
}
const getsingledoctorFail = () => {
 return {
     type :types.GETSINGLE_DOCTOR_FAILURE
 }
}


export const GetProjectData = (dispatch) => {
  dispatch(getdatareq());
  return axios.get(`http://localhost:8000/doctor`)
    .then((r) => {
      return dispatch(getdatasuccess(r.data));
    })
    .catch((err) => {
      dispatch(getdatafailure());
    });
};


export const getSingleDoctordetail = (_id) => (dispatch) => {
  dispatch(getsingledoctorReq())
return axios.get(`http://localhost:8000/doctor/${_id}`,)
.then((res)=>{
return    dispatch(getsingledoctorSucess(res.data))
}).catch((e)=>{
 return    dispatch(getsingledoctorFail())
})
}
