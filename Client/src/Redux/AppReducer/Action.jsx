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


      
const GETALLAppoinmentReq = () =>{
  return {
     type: types.ALLAPPOINMENTREQ
  }
} 

const GETALLAppoinmentSucess = (payload) => {
  return {
     type :types.ALLAPPOINMENTSUCESS,
     payload
}
}

const GETALLAppoinmentFail = () => {
 return {
     type :types.ALLAPPOINMENTFAILURE
 }
}

//  --------------------------- book appoinment  -------------------- //


const bookappointReq = () =>{
  return {
    type :types.BOOKAPPOINMETREQ
  }
}

const bookappointmentFailure = () =>{
 return {
   type :types.BOOKAPPOINMETFAILURE
 }
}

const bookappointmentsucess = (payload) =>{
    return {
       type :types.BOOKAPPOINMETUCESS,
       payload
    }
}

    // --------------------  get My Appoinmnet ------------- //

      
const getappointReq = () =>{
  return {
    type :types.GETMYAPPOINTDATAREQ
  }
}

const getappointmentsucess = (payload) =>{
  return {
     type :types.GETMYAPPOINTDATASUCESS,
     payload
  }
}

const getappointmentFailure = () =>{
 return {
   type :types.GETMYAPPOINTDATAFAILURE
 }
}

      

//  -----------------  Appoinmnet cancel ------------------ //


const CncelappointReq = () =>{
  return {
    type :types.CANCELAPPOINMETREQ
  }
}

const Cncelappointmentsucess = (payload) =>{
  return {
     type :types.CANCELAPPOINMETUCESS,
     payload
  }
}

const CncelappointmentFailure = () =>{
 return {
   type :types.CANCELAPPOINMETFAILURE
 }
}

  // ------------------ Comment ------------------- //

  
const  CommentReq = () =>{
  return {
    type :types.POSTCOMMENTREQ
  }
}

const Commentsucess = (payload) =>{
  return {
     type :types.POSTCOMMENTSUCESS,
     payload
  }
}

const CommentFailure = () =>{
 return {
   type :types.POSTCOMMENTFAILURE
 }
}


//  -----------------  Appoinmnet cancel ------------------ //

 const token = JSON.parse(localStorage.getItem("usertoken"))




   // ---------------- get doctor data ---------------------- //

export const GetProjectData = (dispatch) => {
  dispatch(getdatareq());
  return axios.get(`https://doctorappoinment.onrender.com/doctor`)
    .then((r) => {
      return dispatch(getdatasuccess(r.data));
    })
    .catch((err) => {
      dispatch(getdatafailure());
    });
};


// --------------------   Single Appoinment data  ----------------------//


export const getSingleDoctordetail = (_id) => (dispatch) => {
  dispatch(getsingledoctorReq())
return axios.get(`https://doctorappoinment.onrender.com/doctor/${_id}`,)
.then((res)=>{
return    dispatch(getsingledoctorSucess(res.data))
}).catch((e)=>{
 return    dispatch(getsingledoctorFail())
})
}



// --------------------   Book Appoinment  ----------------------//


export const BookAppointment =(payload) =>  (dispatch) =>{
  dispatch(bookappointReq())
 return axios.post(`https://doctorappoinment.onrender.com/book/appoinment`, payload,{
  headers:{
     "Content-Type":"application/json",
     "Authorization":`Bearer ${token}`
   },
 })
  .then((r) =>{
return        dispatch(bookappointmentsucess(r.data))
  })
  .catch((err) =>{
      dispatch(bookappointmentFailure())
  })

} 

  
        // --------------------  Get My Appoinmnet ------------------ //

        
export const getAppointmentdata = (dispatch) =>{
  dispatch(getappointReq())
 return axios.get(`https://doctorappoinment.onrender.com/myappoinment`, {
  headers:{
     "Content-Type":"application/json",
     "Authorization":`Bearer ${token}`
   },
 })
  .then((r) =>{
return        dispatch(getappointmentsucess(r.data))
  })
  .catch((err) =>{
      dispatch(getappointmentFailure())
  })

} 




        // --------------------  Get My Appoinmnet ------------------ //

        
        export const CancelAppointment =(_id) => (dispatch) =>{
          dispatch(CncelappointReq())
         return axios.delete(`https://doctorappoinment.onrender.com/appoinment/delete/${_id}`, {
          headers:{
             "Content-Type":"application/json",
             "Authorization":`Bearer ${token}`
           },
         })
          .then((r) =>{
        return        dispatch(Cncelappointmentsucess(r))
          })
          .catch((err) =>{
              dispatch(CncelappointmentFailure())
          })
        
        } 


        //  -------------- post Commnet ---------------- //

        

export const PostComment =(id , payload) =>  (dispatch) =>{
  dispatch(CommentReq())
 return axios.post(`https://doctorappoinment.onrender.com/comments/${id}`, payload,{
  headers:{
     "Content-Type":"application/json",
     "Authorization":`Bearer ${token}`
   },
 })
  .then((r) =>{
return        dispatch(Commentsucess(r.data))
  })
  .catch((err) =>{
   dispatch(CommentFailure())
   console.log(err)
  })

} 

