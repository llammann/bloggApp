import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const initialState = {
  blogs: [],
};

const HomeSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setAllBlog: (state, action) => {
      state.blogs = action.payload;
    },
  },
});

export const { setAllBlog } = HomeSlice.actions;
export default HomeSlice.reducer;
