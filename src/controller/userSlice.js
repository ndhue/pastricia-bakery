import { createSlice } from "@reduxjs/toolkit";
import { users, orders } from "../data"
const initialState = {
  user: window.sessionStorage.getItem("user") ? JSON.parse(window.sessionStorage.getItem("user")) : null,

  orders: window.sessionStorage.getItem("orders") ? JSON.parse(window.sessionStorage.getItem("orders")) : []
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    isLogin: (state, action) => {
      const user = users.find(u => u.email === action.payload.email && u.pwd == action.payload.password)
      if (user !== undefined) {
        window.location.assign("/");
      } else {
        alert("Email or password is invalid!")
        window.location.assign('/sign-in')
      }
    },
    signOut: () => {
      window.sessionStorage.clear();
      window.location.assign('/')
    },
    createOrder: (state, action) => {
      const id =  Date.now()
      const order = { id: id, ...action.payload,shipping: 6, status: "Waiting", date: new Date().toLocaleDateString()};
      state.orders.push(order)
      window.sessionStorage.removeItem("carts")
    }
  }
})

export const { isLogin, signOut, createOrder, checkOut } = userSlice.actions;
export default userSlice.reducer;