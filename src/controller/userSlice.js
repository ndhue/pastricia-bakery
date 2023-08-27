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
        window.sessionStorage.setItem("user", JSON.stringify(user))
        window.sessionStorage.getItem("carts") ? JSON.parse(window.sessionStorage.getItem("carts")) : []
        window.sessionStorage.setItem("orders", JSON.stringify(orders.filter(order => order.userId === user.id)))
        window.location.assign("/pastricia-bakery");
      } else {
        alert("Email or password is invalid!")
        window.location.assign('/pastricia-bakery/sign-in')
      }
    },
    signOut: () => {
      window.sessionStorage.clear();
      window.location.assign('/pastricia-bakery')
    },
    createOrder: (state, action) => {
      const id =  Date.now()
      const order = { id: id, ...action.payload,shipping: 6, status: "Waiting"};
      state.orders.push(order)
      window.sessionStorage.setItem("orders", JSON.stringify(state.orders))
      window.sessionStorage.removeItem("carts")
      alert("Success!")
      window.location.assign(`/pastricia-bakery/detail-order/${id}`)
    }
  }
})

export const { isLogin, signOut, createOrder, checkOut } = userSlice.actions;
export default userSlice.reducer;