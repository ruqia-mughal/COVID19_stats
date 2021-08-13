export const FETCH_DETAILS = "FETCH_DETAILS";
export const SET_DETAILS = "SET_DETAILS";

const INITIAL_STATE= {
    users:[{
            name:"popyi",
            email:"popy@gmail.com"
        }]
        ,
    Global:{

    }
}
export default(state = INITIAL_STATE,action)=>{
    console.log("action",action)
    switch (action.type) {

        // case "SETDATA":
        //     return({
        //         ...state,
        //         Global:[action.userss.name]
        //         // return will return data in oper wali state
        //     })
            case SET_DETAILS:
                    return {
                        ...state,
                         Global:action.payload
                         };
         }
    return state;

}