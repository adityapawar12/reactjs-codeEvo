// FORMIK IN REACT JS
import React from "react";
import ReusableFormikControls from "./reusable-formik-controls/ReusableFormikControls";
// import LoginForm from "./reusable-formik-controls/LoginForm";
// import RegistrationForm from "./reusable-formik-controls/RegistrationForm";
// import EnrollmentForm from "./reusable-formik-controls/EnrollmentForm";
// import YouTubeForm from "./simple-yt-form/YouTubeForm";
// import Theme, { ThemeProvider } from "@chakra-ui/react";

const ReactFormik = () => {
  return (
    // <ThemeProvider theme={Theme}>
    <>
      {/* SIMPLE FORM IN REACT JS */}
      {/* <YouTubeForm /> */}

      {/* REUSABLE FORM CONTROLS USING FORMIK IN REACT JS */}
      <ReusableFormikControls />

      {/* LOGIN FORM */}
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      {/* <EnrollmentForm /> */}
    </>
    // </ThemeProvider>
  );
};

export default ReactFormik;
