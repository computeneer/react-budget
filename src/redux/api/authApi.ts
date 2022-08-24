import { IAuthRequest } from "models/IAuthUser";
import { ITokenResponse } from "models/IResponse";
import { postRequest } from "./api";

export const loginRequest = (
  loginInfo: IAuthRequest
): Promise<ITokenResponse> => {
  const { companyCode } = loginInfo;
  return postRequest<ITokenResponse, IAuthRequest>(
    `auth/${companyCode}/login`,
    loginInfo
  );
};
