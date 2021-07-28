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
