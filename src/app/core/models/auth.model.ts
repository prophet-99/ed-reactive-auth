export interface Auth {
  token: string;
}

export interface AuthUser {
  email: string;
  role: string;
  cellphone: string;
  country: string;
  lastAccess: string;
  iat: string;
  exp: string;
}
