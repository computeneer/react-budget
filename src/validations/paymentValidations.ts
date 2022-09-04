import * as Yup from "yup";

export const addPaymentValidation = Yup.object().shape({
  reason: Yup.string()
    .min(2, "Too Short!")
    .max(100, "Too Long!")
    .required("Required!"),
  to: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required!"),
  type: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required!"),
  dateTime: Yup.date().required("Required!"),
  cost: Yup.number().min(0, "Too Short!").required("Required!"),
});
