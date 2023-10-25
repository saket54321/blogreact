// import { createSlice } from "@reduxjs/toolkit";
// const intialstate={
//     status:false,
//     userdata:null
// }

// const authSlice = createSlice({
//   name: "auth",
//   intialstate,
//   reducers:{
//     // here login and logout are the action
//     login:(state,action)=>{
//         state.status=true;
//         state.userdata=action.payload.userdata;
//     },
//     logout:(state)=>{
//         state.status=false;
//         state.userdata=null;

//     }

//   }
// })

// export const {login,logout} = authSlice.actions;

// export  default authSlice.reducers;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status : false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
        }
     }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;