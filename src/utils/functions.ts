import { useLayoutEffect } from "react";
import { useHistory } from "react-router";

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
