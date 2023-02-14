import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControls from "./FormikControls";

const FormikContainer = () => {
  const initialValues = {
    email: "",
    description: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required!"),
    description: Yup.string().required("Description is required!"),
  });
  const onSubmit = (values) => {
    console.log("FORM DATA >>> ", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormikControls
            control={`input`}
            type={`text`}
            name={`email`}
            label={`Email`}
          />
          <FormikControls
            control={`textarea`}
            name={`description`}
            label={`Description`}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
