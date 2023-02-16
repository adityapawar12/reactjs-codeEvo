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
  const radioButtonValues = [
    {
      key: "Option 1",
      value: "Radio button 1",
    },
    {
      key: "Option 2",
      value: "Radio button 2",
    },
    {
      key: "Option 3",
      value: "Radio button 3",
    },
  ];
  const ChecboxGroupValues = [
    {
      key: "Option 1",
      value: "Checkbox group 1",
    },
    {
      key: "Option 2",
      value: "Checkbox group 2",
    },
    {
      key: "Option 3",
      value: "Checkbox group 3",
    },
  ];
  const initialValues = {
    email: "",
    emailChakra: "",
    description: "",
    selectedNum: "",
    radioButtonField: "",
    checkBoxGroupField: [],
    birthDate: null,
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required!"),
    emailChakra: Yup.string().required("Email is required!"),
    description: Yup.string().required("Description is required!"),
    selectedNum: Yup.string().required("Selected number is required!"),
    radioButtonField: Yup.string().required("Radio button value is required!"),
    checkBoxGroupField: Yup.array()
      .required("Checkbox value is required!")
      .min(1, "Checkbox value is required!")
      .nullable(),
    birthDate: Yup.date().required("Birth Date is required!").nullable(),
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
          {/* <FormikControls
            control={`chakrainput`}
            type={`email`}
            name={`emailChakra`}
            label={`Email Chakra`}
          /> */}
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
            name={`radioButtonField`}
            label={`Select Radio Button value`}
            options={radioButtonValues}
          />
          <FormikControls
            control={`checkbox`}
            name={`checkBoxGroupField`}
            label={`Select Checkbox values`}
            options={ChecboxGroupValues}
          />
          <FormikControls
            control={`date`}
            name={`birthDate`}
            label={`Select birth date`}
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormikContainer;
