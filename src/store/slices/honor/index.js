import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const honorsSlice = createSlice({
    name: "honors",
    initialState: {
      list: [],
    },
    reducers: {
      setHonorList: (state, action) => {
        state.list = action.payload;
      }
    },
  });

  export const { setHonorList } = honorsSlice .actions;

  export default honorsSlice.reducer;

  export const fetchAllHonors = () => (dispatch) => {
    axios
      .get("http://ec2-18-144-121-27.us-west-1.compute.amazonaws.com:4000/api/v2/cuadro")
      .then((response) => {
        dispatch(setHonorList(response.data));
      })
      .catch((error) => console.log(error));
  };