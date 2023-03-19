import { makeVar } from "@apollo/client";


// intialize user data
export const userDatavar = makeVar({
  id: "",
  email: "",
  phoneNumber: "",
  password: "",
  accessTokenVar: null,
  refreshTokenVar: sessionStorage.getItem("refreshToken")
  ? sessionStorage.getItem("refreshToken")
  : null,
  isLoggedInVar: !!localStorage.getItem("token")
});
