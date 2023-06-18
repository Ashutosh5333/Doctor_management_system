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
