export interface IAuthUser {
  username: string;
  email: string;
  avatar?: string;
}

export interface IAuthRequest {
  companyCode: string;
  username: string;
  password: string;
}
