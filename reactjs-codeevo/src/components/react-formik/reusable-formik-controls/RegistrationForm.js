import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControls from "./reusable-components/FormikControls";

const RegistrationForm = () => {
  const optionsRegistrationForm = [
    { key: "Email", value: "emailmoc" },
    {
      key: "Telephone",
      value: "telephonemoc",
    },
  ];

  const initialValuesRegistrationForm = {
    email: "",
    password: "",
    confirmPassword: "",
    modeOfContact: "",
    phone: "",
  };

  const validationSchemaRegistrationForm = Yup.object({
    email: Yup.string().email().required("Required!"),
    password: Yup.string().required("Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), ""], "Passwords must match!")
      .required("Required!"),
    modeOfContact: Yup.string().required("Required!"),
    phone: Yup.string().when("modeOfContact", {
      is: "telephonemoc",
      then: Yup.string().required("Required!"),
    }),
  });

  const onSubmitRegistrationForm = (values) => {
    console.log("submitted login form values ", values);
  };

  return (
    <>
      <Formik
        initialValues={initialValuesRegistrationForm}
        validationSchema={validationSchemaRegistrationForm}
        onSubmit={onSubmitRegistrationForm}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControls
                control={"input"}
                name={"email"}
                type={"email"}
                label={"Email"}
              />
              <FormikControls
                control={"input"}
                name={"password"}
                type={"password"}
                label={"Password"}
              />
              <FormikControls
                control={"input"}
                name={"confirmPassword"}
                type={"password"}
                label={"Confirm Password"}
              />
              <FormikControls
                control={"radio"}
                name={"modeOfContact"}
                label={"Mode Of Contact"}
                options={optionsRegistrationForm}
              />
              <FormikControls
                control={"input"}
                name={"phone"}
                type={"text"}
                label={"Phone Number"}
              />
              <button type="submit" disabled={!formik.isValid}>
                Register
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default RegistrationForm;
