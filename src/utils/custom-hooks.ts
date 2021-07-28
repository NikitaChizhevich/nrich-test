import { useSelector } from 'react-redux';
import { useLayoutEffect } from 'react';
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { AppDispatch, RootState } from '../store/App.store';
import { getAuthData } from "./functions";

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