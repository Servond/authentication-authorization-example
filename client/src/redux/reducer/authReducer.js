import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  user: {
    id: null,
    email: "",
    username: "",
    branchId: null,
    roleId: null,
  },
  isLogin: false,
};

export const AuthReducer = createSlice({
  name: "AuthReducer",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, email, username, branchId, roleId } = action.payload;

      state.user = {
        id,
        email,
        username,
        branchId,
        roleId,
      };
    },
    loginSuccess: (state, action) => {
      state.isLogin = true;
    },
    logoutSuccess: (state, action) => {
      state.isLogin = false;
      localStorage.removeItem("token");
    },
    keepLoginSuccess: (state) => {
      state.isLogin = true;
    },
  },
});

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const res = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res?.data?.data?.token);
      dispatch(setUser(res?.data?.data?.user));
      dispatch(loginSuccess());
    } catch (err) {
      alert(err?.response?.data);
    }
  };
};

export const keepLogin = () => {
  return async (dispatch) => {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        const res = await axios.get("http://localhost:8080/auth/keep-login", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        dispatch(setUser(res?.data?.data));
        dispatch(keepLoginSuccess());
      }
    } catch (err) {
      localStorage.removeItem("token");
      alert(err?.response?.data);
    }
  };
};

export const { loginSuccess, logoutSuccess, setUser, keepLoginSuccess } =
  AuthReducer.actions;

export default AuthReducer.reducer;
