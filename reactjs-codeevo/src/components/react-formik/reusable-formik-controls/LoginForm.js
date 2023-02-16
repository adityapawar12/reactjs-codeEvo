import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControls from "./reusable-components/FormikControls";

const LoginForm = () => {
  const initialLoginFormValues = {
    email: "",
    password: "",
  };

  const validationSchemaForLoginForm = Yup.object({
    email: Yup.string()
      .email("Invalid email format!")
      .required("Email is required!"),
    password: Yup.string().required("Password is required!"),
  });

  const onSubmitLoginForm = (values) => {
    console.log("submitted login form values ", values);
  };

  return (
    <>
      <Formik
        initialValues={initialLoginFormValues}
        validationSchema={validationSchemaForLoginForm}
        onSubmit={onSubmitLoginForm}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControls
                control={"input"}
                name={"email"}
                type={"email"}
                label={"Enter Email"}
              />
              <FormikControls
                control={"input"}
                name={"password"}
                type={"password"}
                label={"Enter Password"}
              />
              <button type="submit" disabled={!formik.isValid}>
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default LoginForm;
