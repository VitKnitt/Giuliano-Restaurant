import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

type UsersState = {
  name: string;
  cookie: string;
};

const initialState: UsersState = {
  name: "",
  cookie: Cookies.get("token") || "",
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    saveUsersName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    clearUser: (state) => {
      state.name = "";
      state.cookie = "";
      Cookies.remove("token");
    },
  },
});

export const { saveUsersName, clearUser } = usersSlice.actions;

export const selectUserName = (state: any) => state.users.name;
export const selectUserCookie = (state: any) => state.users.cookie;

export default usersSlice.reducer;
