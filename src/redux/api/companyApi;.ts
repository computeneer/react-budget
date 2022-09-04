import { ICompanyProfitData } from "models/ICompany";
import { getRequest } from "./api";

export const getCompanyData = (companyCode: string) => {
  if (!companyCode) {
    companyCode = sessionStorage.getItem("companyCode") ?? "";
  }
  return getRequest<ICompanyProfitData>(`companies/${companyCode}/total`);
};
