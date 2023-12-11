import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./HomeSlice";
import addReducer from "./AddSlice";
export const store = configureStore({
  reducer: {
    blogs: homeReducer,
    add: addReducer,
  },
});

export default store