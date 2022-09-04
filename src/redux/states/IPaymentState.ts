import { IPayment } from "models/IPayment";
import { IBaseState } from "./IBaseState";

interface IPaymentState extends IBaseState {
  payments: IPayment[];
  selectedPayments?: string[];
}

export default IPaymentState;
