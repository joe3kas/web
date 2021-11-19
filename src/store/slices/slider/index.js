import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const slidersSlice = createSlice({
    name: "slider",
    initialState: {
      list: [],
    },
    reducers: {
      setSliderList: (state, action) => {
        state.list = action.payload;
      }
    },
  });

  export const { setSliderList } = slidersSlice .actions;

  export default slidersSlice.reducer;

  export const fetchAllSliders = () => (dispatch) => {
    axios
      .get("http://ec2-18-144-121-27.us-west-1.compute.amazonaws.com:4000/api/v2/slider")
      .then((response) => {
        dispatch(setSliderList(response.data));
      })
      .catch((error) => console.log(error));
  };