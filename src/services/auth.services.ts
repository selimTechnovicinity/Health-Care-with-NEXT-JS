import { authKey } from "@/constants/authKey";
import {
  clearLocalStorage,
  getLocalStorage,
  setLocalStorage,
} from "@/utils/local-storage";

export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  return setLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getLocalStorage(authKey);
  return authToken;
};

export const isLoggedIn = () => {
  const authToken = getLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  } else return false;
};

export const removeUser = () => {
  return clearLocalStorage(authKey);
};
