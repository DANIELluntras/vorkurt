export interface IAuthInfoUser {
  email: string;
  password: string;
}

export interface IAuthInfoResponse {
  uid: string;
  email: string;
  emailVerified: boolean;
  isAnonymous: boolean;
  lastLoginAt: string;
  apiKey: string;
  appName: string;
}
