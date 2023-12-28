import { createSlice } from "@reduxjs/toolkit";
import users from "./initData";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users,
  },
  reducers: {
    addUser: (state, action) => {
      state.users.push({
        ...action.payload,
      });
    },
    removeUser: (state, action) => {
      state.users = state.users.filter((p) => p.id !== action.id);
    },
    editUser: (state, action) => {
      state.users = state.users.map((p) =>
        p.id === action.payload.id ? action.payload : p
      );
    },
  },
});

export const { addUser, removeUser, editUser } = usersSlice.actions;

export default usersSlice.reducer;
