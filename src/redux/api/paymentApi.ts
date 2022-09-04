import { IPayment } from "models/IPayment";
import { getRequest, postRequest } from "./api";

export const getAllPayments = (code: string) => {
  const companyCode = code ?? sessionStorage["companyCode"];
  if (companyCode) {
    return getRequest<IPayment[]>(`payments/${companyCode}/all`);
  }
  return Promise.reject("Company Code Not FOUND");
};

export const createPayment = (data: IPayment): Promise<IPayment> => {
  return postRequest<IPayment, IPayment>("payments", data).then();
};
