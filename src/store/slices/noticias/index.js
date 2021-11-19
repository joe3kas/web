import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const noticiasSlice = createSlice({
    name: "noticias",
    initialState: {
      list: [],
    },
    reducers: {
      setNoticiaList: (state, action) => {
        state.list = action.payload;
      }
    },
  });

  export const { setNoticiaList } = noticiasSlice .actions;

  export default noticiasSlice.reducer;

  export const fetchAllNoticias = () => (dispatch) => {
    axios
      .get("http://ec2-18-144-121-27.us-west-1.compute.amazonaws.com:4000/api/v2/noticia")
      .then((response) => {
        dispatch(setNoticiaList(response.data));
      })
      .catch((error) => console.log(error));
  };