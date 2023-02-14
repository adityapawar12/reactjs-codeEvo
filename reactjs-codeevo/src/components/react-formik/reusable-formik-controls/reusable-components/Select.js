import { ErrorMessage, Field } from "formik";
import React from "react";
import TextError from "./TextError";

const Select = ({ name, options, label, ...rest }) => {
  React.useEffect(() => {
    console.log(options);
  }, []);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field as="select" name={name} id={name} {...rest}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.key}
            </option>
          );
        })}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
};

export default Select;
