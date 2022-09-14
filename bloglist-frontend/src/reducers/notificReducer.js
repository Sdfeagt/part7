import { createSlice } from "@reduxjs/toolkit"

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
  },
})

export const { setNotification } = notificationSlice.actions

let time = null

export const createNotification = (message, delay) => {
  return async (dispatch) => {
    dispatch(setNotification(message))

    if (time) {
      clearTimeout(time)
    }

    time = setTimeout(() => dispatch(setNotification(null)), delay * 1000)
  }
}

export default notificationSlice.reducer