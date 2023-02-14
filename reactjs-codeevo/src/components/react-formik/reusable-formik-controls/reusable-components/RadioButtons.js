import { Field } from "formik";
import React from "react";

const RadioButtons = ({ label, name, options, ...rest }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest}>
        {({ field }) => {
          return options.map((option) => {
            return (
              <React.Fragment key={option.key}>
                <input
                  type="radio"
                  id={option.value}
                  {...field}
                  value={option.value}
                  checked={field.value === option.value}
                ></input>
                <label htmlFor={option.value}>{option.key}</label>
              </React.Fragment>
            );
          });
        }}
      </Field>
    </div>
  );
};

export default RadioButtons;
