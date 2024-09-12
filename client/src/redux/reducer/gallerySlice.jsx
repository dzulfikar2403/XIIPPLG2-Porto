import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getGallery = createAsyncThunk("gallery/getGallery", async () => {
  const res = await axios.get("https://secondary-sgd-api.vercel.app/gallery");
  const { data } = await res;

  return data;
});

const initialState = {
  gallery: [],
  isLoading: true,
  isError: null,
};

const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    galleryDisplay: (state) => {
      const slice3 = state.gallery.slice(0, 3);
      state.gallery = slice3;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGallery.fulfilled, (state, action) => {
      state.isLoading = false;
      state.gallery = action.payload;
    }),
      builder.addCase(getGallery.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export const { galleryDisplay } = gallerySlice.actions;
export default gallerySlice.reducer;
