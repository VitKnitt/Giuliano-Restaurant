import { createSlice } from "@reduxjs/toolkit";

type urlType = {
  url: string;
};

//  const initialState = 'https://omnibe.onrender.com/'
//const initialState = "https://omnitest-0gy0.onrender.com/";
const initialState = "http://localhost:8080/";

const urlSlice = createSlice({
  name: "urlSlice",
  initialState,
  reducers: {},
});

export const selectUrl = (state: urlType) => state.url;

export default urlSlice.reducer;
