import { IBaseState } from "./IBaseState";

export default interface ICompanyState extends IBaseState {
  companyCode: string;
  requiresReload: boolean;
  paymentsTotal: number;
  paymentsCount: number;
  incomesTotal: number;
  incomesCount: number;
  total: number;
}
