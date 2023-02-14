import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Input = ({ label, name, ...rest }) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field name={name} />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Input;
