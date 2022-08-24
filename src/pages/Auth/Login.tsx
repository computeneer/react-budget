import React, { useState } from "react";
import { authRequest } from "redux/thunks/authThunks";
import { FormikConfig, useFormik, FormikProps } from "formik";
import { IAuthRequest } from "models/IAuthUser";
import { useAppDispatch, useAppSelector } from "redux/settings/hooks";
import { Navigate } from "react-router-dom";
import styles from "styles/login.module.scss";
import { signInSchema } from "validations/userValidations";
import { setCompanyCode } from "redux/app/companySlice";

type LoginProps = {};

const Login: React.FC<LoginProps> = () => {
  const dispatch = useAppDispatch();
  const { isAuthenticated } = useAppSelector((store) => store.authReducer);
  const [error, setError] = useState<string | undefined>(undefined);
  const handleSubmit = async (data: IAuthRequest) => {
    setError(undefined);
    const { payload } = await dispatch(authRequest(data));
    if (payload.status !== 200) {
      setError(payload.reason);
    }
    dispatch(setCompanyCode(data.companyCode));
  };

  const formikConfig: FormikConfig<IAuthRequest> = {
    initialValues: {
      password: "",
      username: "",
      companyCode: "",
    },
    onSubmit: handleSubmit,
    validationSchema: signInSchema,
    validateOnMount: false,
    validateOnBlur: true,
  };

  const formik: FormikProps<IAuthRequest> =
    useFormik<IAuthRequest>(formikConfig);

  return isAuthenticated ? (
    <Navigate to={"/"} />
  ) : (
    <div className={styles.login_container}>
      <form onSubmit={formik.handleSubmit}>
        {/* 
        // TODO: REDUX ILE YONETILECEK
       */}
        <div className={styles.login_logo}>Budget App</div>
        {error && <div className={styles.error}>{error}</div>}
        <div className={styles.form_group}>
          <label>
            <span>Company Code</span>
            <input
              value={formik.values.companyCode}
              onChange={formik.handleChange}
              name="companyCode"
            />
          </label>
          {formik.errors.companyCode && (
            <div className={styles.form_error}>{formik.errors.companyCode}</div>
          )}
        </div>
        <div className={styles.form_group}>
          <label>
            <span>Username</span>
            <input
              value={formik.values.username}
              onChange={formik.handleChange}
              name="username"
            />
          </label>
          {formik.errors.username && (
            <div className={styles.form_error}>{formik.errors.username}</div>
          )}
        </div>
        <div className={styles.form_group}>
          <label>
            <span>Password</span>
            <input
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
              type="password"
            />
          </label>
          {formik.errors.password && (
            <div className={styles.form_error}>{formik.errors.password}</div>
          )}
        </div>
        <div className={styles.form_button}>
          <button disabled={!formik.isValid} type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
