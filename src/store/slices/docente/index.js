import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const docentesSlice = createSlice({
    name: "docentes",
    initialState: {
      list: [],
    },
    reducers: {
      setDocenteList: (state, action) => {
        state.list = action.payload;
      }
    },
  });

  export const { setDocenteList } = docentesSlice .actions;

  export default docentesSlice.reducer;

  export const fetchAllDocentes = () => (dispatch) => {
    axios
      .get("http://ec2-18-144-121-27.us-west-1.compute.amazonaws.com:4000/api/v2/docente")
      .then((response) => {
        dispatch(setDocenteList(response.data));
      })
      .catch((error) => console.log(error));
  };