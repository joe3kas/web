import { createSlice } from "@reduxjs/toolkit";
// axios
import axios from "axios";

export const userSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
  },
  reducers: {
    setUserList: (state, action) => {
      state.list = action.payload;
    }
  },
});

export const { setUserList } = userSlice.actions;

export default userSlice.reducer;

export const fetchAllUsers = () => (dispatch) => {
  axios
    .get("http://ec2-52-53-133-250.us-west-1.compute.amazonaws.com:4000/api/v2/4ll")
    .then((response) => {
      dispatch(setUserList(response.data.data));
    })
    .catch((error) => console.log(error));
};
