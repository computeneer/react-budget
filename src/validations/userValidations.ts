import * as Yup from "yup";

export const signInSchema = Yup.object().shape({
  companyCode: Yup.string().required("Required!"),
  username: Yup.string()
    .min(5, "Too Short!")
    .max(20, "Too Long!")
    .required("Required!"),
  password: Yup.string()
    .min(5, "Too Short!")
    .max(30, "Too Long!")
    .required("Required!"),
});
