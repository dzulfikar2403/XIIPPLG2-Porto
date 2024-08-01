import {configureStore} from "@reduxjs/toolkit";
import authSlice from "./reducer/authSlice";
import gallerySlice from "./reducer/gallerySlice";
import siswaSlice from "./reducer/siswaSlice";


const Store = configureStore({
  reducer:{
    authSlice,
    gallerySlice,
    siswaSlice
  }
})

export default Store;