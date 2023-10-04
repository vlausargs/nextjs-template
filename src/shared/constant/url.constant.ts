import environment from "@/environments/environment";

export const BACKEND_URL = environment.apiUrl;
export const API = BACKEND_URL + environment.apiContext;

export const LOGIN = API + "/collections/users/auth-with-password";
