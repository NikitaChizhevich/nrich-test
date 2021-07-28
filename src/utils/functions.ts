import { useLayoutEffect } from "react";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { AppDispatch, RootState } from "../store/App.store";

export const deleteAuthData = () => {
  localStorage.removeItem('authData')
}

export const setAuthData = (formData: {
  userName: string;
  password: string;
}) => {
  localStorage.setItem(
    "authData",
    JSON.stringify({ ...formData, isAuth: true })
  );
};

export const getAuthData = (): {
  userName: string;
  password: string;
  isAuth: boolean;
} => {
  const authDataString = localStorage.getItem("authData");
  const authData = JSON.parse(
    authDataString || '{"userName": "", "password": "", "isAuth": false}'
  );
  return authData;
};
