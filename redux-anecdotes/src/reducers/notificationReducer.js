import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
    name:'notification',
    initialState: {
      message : null
    },
    reducers : {
        makeNotification(state, action){
            state.message = action.payload
        },
        clearNotification(state, action){
            state.message = null
        }
    }
})

export const { makeNotification, clearNotification } = notificationSlice.actions



export const setNotification = (notif, timeout) => {
    return async dispatch => {
        dispatch(makeNotification(notif))
        setTimeout(() =>{
            dispatch(clearNotification())
          }, timeout * 1000);
    }
}
export default notificationSlice.reducer