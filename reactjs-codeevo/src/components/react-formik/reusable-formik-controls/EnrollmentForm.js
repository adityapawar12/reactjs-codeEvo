import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormikControls from "./reusable-components/FormikControls";

const EnrollmentForm = () => {
  const dropdownOptionsEnrollmentForm = [
    { key: "Select Your Course", value: "" },
    {
      key: "React",
      value: "react",
    },
    {
      key: "Veu",
      value: "veu",
    },
    {
      key: "Angular",
      value: "angular",
    },
  ];

  const checkboxOptionsEnrollmentForm = [
    {
      key: "HTML",
      value: "html",
    },
    {
      key: "CSS",
      value: "css",
    },
    {
      key: "JS",
      value: "js",
    },
  ];

  const initialValuesEnrollmentForm = {
    email: "",
    bio: "",
    course: "",
    skills: [],
    courseDate: null,
  };

  const validationSchemaEnrollmentForm = Yup.object({
    email: Yup.string().email().required("Required!"),
    bio: Yup.string().required("Required!"),
    course: Yup.string().required("Required!"),
    courseDate: Yup.date().required("Required!").nullable(),
  });

  const onSubmitEnrollmentForm = (values) => {
    console.log("submitted enrollment form values ", values);
  };

  return (
    <>
      <Formik
        initialValues={initialValuesEnrollmentForm}
        validationSchema={validationSchemaEnrollmentForm}
        onSubmit={onSubmitEnrollmentForm}
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
              <FormikControls control={"textarea"} name={"bio"} label={"Bio"} />
              <FormikControls
                control={"select"}
                name={"course"}
                label={"Course"}
                options={dropdownOptionsEnrollmentForm}
              />
              <FormikControls
                control={"checkbox"}
                name={"skills"}
                label={"Your Skillsets"}
                options={checkboxOptionsEnrollmentForm}
              />
              <FormikControls
                control={"date"}
                name={"courseDate"}
                label={"Date"}
              />
              <button type="submit" disabled={!formik.isValid}>
                Enroll
              </button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default EnrollmentForm;
