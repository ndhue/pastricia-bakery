import { createSlice } from "@reduxjs/toolkit";
import { users } from "../data"
const initialState = {
  user: window.sessionStorage.getItem("user") ? JSON.parse(window.sessionStorage.getItem("user")) : null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isLogin: (state, action) => {
      const user = users.find(u => u.email === action.payload.email && u.pwd == action.payload.password)
      if (user !== undefined) {
        window.sessionStorage.setItem("user", JSON.stringify(user))
        window.sessionStorage.getItem("carts") ? JSON.parse(window.sessionStorage.getItem("carts")) : [],
        window.location.assign('/pastricia-bakery')
      }
    },
    signOut: () => {
      window.sessionStorage.clear();
      window.location.assign('/pastricia-bakery')
    },
  }
})

export const { isLogin, signOut } = userSlice.actions;
export default userSlice.reducer;