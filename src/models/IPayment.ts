export interface IPayment {
  _id?: string;
  createdBy: string;
  reason: string;
  cost: number;
  type: string;
  to: string;
  companyCode: string;
  dateTime: Date | string;
}
