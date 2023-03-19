import { gql } from "@apollo/client";

export const SIGN_IN = gql`
  mutation signin($email: String = "", $password: String = "") {
    signIn(email: $email, password: $password) {
      access_token
      refresh_token
    }
  }
`;

export const REFRESH_TOKEN = gql`
  mutation get_access_token($r_t: String) {
    get_access_token(refresh_token: $r_t) {
      access_token
      message
    }
  }
`;
