import {createSlice} from "@reduxjs/toolkit"

const initialState = JSON.parse(window.localStorage.getItem("auth") ?? "null" ) || {
    user: false,
    isAuth: false
}

export const userSlice = createSlice({
    name:"user",
    initialState,
    reducers: {
        setUser(state,action){
            window.localStorage.setItem("auth",JSON.stringify({user: action.payload,isAuth:true}));
           state.user = action.payload;
           state.isAuth = true;
        } 
    }
})

export const {setUser} = userSlice.actions;
export default userSlice.reducer;