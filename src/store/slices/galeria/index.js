import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const galeriasSlice = createSlice({
    name: "galerias",
    initialState: {
      list: [],
    },
    reducers: {
      setGaleriaList: (state, action) => {
        state.list = action.payload;
      }
    },
  });

  export const { setGaleriaList } = galeriasSlice .actions;

  export default galeriasSlice.reducer;

  export const fetchAllGalerias = () => (dispatch) => {
    axios
      .get("http://ec2-18-144-121-27.us-west-1.compute.amazonaws.com:4000/api/v2/galeria")
      .then((response) => {
        dispatch(setGaleriaList(response.data));
      })
      .catch((error) => console.log(error));
  };