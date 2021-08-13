import axios from "axios";
export const FETCH_DETAILS = "FETCH_DETAILS";
export const SET_DETAILS = "SET_DETAILS";

 const fetchDetails=()=> {
  return (dispatch)=> {
    return axios.get("https://api.covid19api.com/summary").then(({ data }) => {
      
      dispatch(setDetails(data));
    });
  };
}

const setDetails=(data)=> {
  return {
    type: SET_DETAILS,
    payload: data
  };
}


// const set_data = (data) => {

//     return (dispatch) => { 
//         dispatch({ type: "SETDATA", userss: data })
        
//     }
// }

// const testing =()=>{
//     return (dispatch) => {
//         dispatch({type:"second",animals:"deletng all animals"})
       

//     }

// }
export { fetchDetails}





