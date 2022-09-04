interface IBaseResponse {
  status: number;
}

export interface IErrorResponse extends IBaseResponse {
  reason: string;
}

export interface IDataResponse<T> extends IBaseResponse {
  data?: T;
}

export interface ITokenResponse extends IBaseResponse {
  token?: string;
  username?: string;
  email?: string;
  avatar?: string;
}
