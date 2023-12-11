import { createSlice, current } from "@reduxjs/toolkit";
import axios from "axios";
import { useEffect } from "react";

const initialState = {
  blogs: [],
};

const AddSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    adBlog: (state, action) => {
      useEffect(() => {
        console.log(action.payload);
        axios
          .post("http://localhost:3000/blogs", action.payload)
          .then((res) => {
            console.log("added");
          });
      }, []);
    },
  },
});

export const { addBlog } = AddSlice.actions;
export default AddSlice.reducer;
