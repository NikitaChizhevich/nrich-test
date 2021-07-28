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

export function useGuard() {
  const authData = getAuthData();
  const history = useHistory();
  useLayoutEffect(() => {
    if (!authData.isAuth) {
      history.replace('/login')
    }
  })
};

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
