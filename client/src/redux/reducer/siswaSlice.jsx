import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getDataSiswa = createAsyncThunk("data-siswa/getDataSiswa", async () => {
  const res = await axios.get('http://localhost:3000/siswa');
  const {data} = await res;

  return data
})

const initialState = {
  dataSiswa: [],
  isLoading: true,
  isError: null
}

const siswaSlice = createSlice({
  name: 'data-siswa',
  initialState,
  reducers: {
    siswaDisplay: (state)=>{
      const slice4 = state.dataSiswa.slice(0,4);
      state.dataSiswa = slice4;
    }     
  },
  extraReducers: (builder) => {
    builder.addCase(getDataSiswa.fulfilled, (state, action) => {
      state.isLoading = false;
      state.dataSiswa = action.payload;
    }),
    builder.addCase(getDataSiswa.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    })
  }
})

export const {siswaDisplay} = siswaSlice.actions;
export default siswaSlice.reducer