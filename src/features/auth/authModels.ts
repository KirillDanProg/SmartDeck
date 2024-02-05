export interface IRegisterResponse {
  addedUser: IUser;
}

export interface IResetPasswordData {
  password: string;
  resetPasswordToken: string;
}
export interface IUser {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: Date;
  updated: Date;
  __v: number;
}

export interface ILoginResponse {
  createdUserSession: IMainLoginResponse;
}
export interface IMainLoginResponse {
  _id: string;
  email: string;
  rememberMe: boolean;
  isAdmin: boolean;
  name: string;
  verified: boolean;
  publicCardPacksCount: number;
  created: string;
  updated: string;
  __v: number;
  token: string;
  tokenDeathTime: number;
}

export interface IRegisterRequest {
  email: string;
  password: string;
}

export interface ILoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}
