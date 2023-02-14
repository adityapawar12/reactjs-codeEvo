import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControls from "./FormikControls";

const FormikContainer = () => {
  const optionsValues = [
    {
      key: "Select Some Value",
      value: "",
    },
    {
      key: "one",
      value: "one",
    },
    {
      key: "two",
      value: "two",
    },
    {
      key: "three",
      value: "three",
    },
  ];
  const optionsValuesR = [
    {
      key: "Option 1",
      value: "rt",
    },
    {
      key: "Option 2",
      value: "at",
    },
    {
      key: "Option 3",
      value: "tt",
    },
  ];
  const initialValues = {
    email: "",
    description: "",
    selectedNum: "",
    selectedNumR: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required!"),
    description: Yup.string().required("Description is required!"),
    selectedNum: Yup.string().required("Selected number is required!"),
    selectedNumR: Yup.string().required("Selected number R is required!"),
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
          <FormikControls
            control={`select`}
            name={`selectedNum`}
            label={`Select Number`}
            options={optionsValues}
          />
          <FormikControls
            control={`radio`}
            name={`selectedNumR`}
            label={`Select Number R`}
            options={optionsValuesR}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
