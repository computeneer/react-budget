interface IBaseResponse {
  status: number;
  reason?: string | any;
}

export interface IResponse<T> extends IBaseResponse {
  data?: T;
}

export interface ITokenResponse extends IBaseResponse {
  token?: string;
}

export default IResponse;
