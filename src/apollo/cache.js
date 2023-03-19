import { InMemoryCache } from "@apollo/client";
import { userDatavar } from "./store";

// field policy definations
export const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return userDatavar().isLoggedInVar;
          },
        },
        accessToken: {
          read() {
            return userDatavar().accessTokenVar;
          },
        },
        refreshToken: {
          read() {
            return userDatavar().refreshTokenVar;
          },
        },
        userData: {
          read() {
            return userDatavar();
          },
        },
      },
    },
  },
});
