import baseApi from "./baseApi";

export async function login() {
  return await baseApi.post("/collections/users/auth-with-password", {
    identity: "users57835",
    password: "asdqwe123",
  });
}

export const LOGIN = ["LOGIN"];
