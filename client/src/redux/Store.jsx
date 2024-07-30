import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./reducer/authSlice";


const Store = configureStore({
  reducer:{
    authSlice
  }
})

export default Store;