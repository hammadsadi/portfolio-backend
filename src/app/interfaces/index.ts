export interface ILoggedInUser {
  email: string;
  id: string;
  role: "ADMIN" | "USER";
  iat: number;
  exp: number;
}
