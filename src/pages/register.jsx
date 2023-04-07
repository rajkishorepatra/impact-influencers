import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputField } from "../components/form-inputs";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { UserAuth } from "../context/AuthContext";
import { FiRotateCw } from "react-icons/fi";
const Register = () => {
  const { signUp, user } = UserAuth();
  const [formstate, setformstate] = useState({
    submitting: false,
    error: null,
  });
  const handleFormSubmit = async (values) => {
    setformstate({ ...formstate, submitting: true });
    try {
      await signUp(values.email, values.password);
    } catch (error) {
      let error_msg = error.code.replaceAll("auth/", "").replaceAll("-", " ");
      setformstate({ ...formstate, submitting: false, error: error_msg });
    }
  };

  if (user) {
    return <Navigate replace to="/" />;
  }

  return (
    <div className="form-page vh-100 bg-gradient">
      <div className="mt-4">
        <Link
          to={"/"}
          className="text-decoration-none fw-bold fs-2 text-secodary"
        >
          Impact Influerncers
        </Link>
        <p className=" fs-4 fw-light text-center m-2">create an account</p>
      </div>
      <div className="form-wrapper rounded p-3 bg-light shadow">
        <Formik
          initialValues={{
            email: "",
            password: "",
            confirm_password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("required"),
            password: Yup.string()
              .min(6, "must be 6 characters or more")
              .max(15, "must be 15 characters of less")
              .required("required"),
            confirm_password: Yup.string()
              .min(6, "must be 6 characters or more")
              .max(15, "must be 15 characters of less")
              .oneOf([Yup.ref("password"), null], "must be equal to password")
              .required("required"),
          })}
          onSubmit={(values) => {
            handleFormSubmit(values);
          }}
        >
          <Form>
            <InputField label="Email" id="email" name="email" type="email" />
            <InputField
              label="Password"
              id="password"
              name="password"
              type="password"
              disabled={formstate.submitting}
            />
            <InputField
              label="Confirm Password"
              id="confirm_password"
              name="confirm_password"
              type="password"
              disabled={formstate.submitting}
            />
            <div className="">
              <Button type="submit" className="w-100 mt-2" disabled={formstate.submitting}>
                {formstate.submitting ? <FiRotateCw className="" /> : "Sign up"}
                Sign up
              </Button>
            </div>
            <div className="w-100">
              <span className="d-block text-center divider my-1 text-muted">
                or
              </span>
              <Button className="w-100 d-flex align-items-center justify-content-center rounded bg-secondary border border-0">
                Sign up with{" "}
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="text-warning mx-2 fs-5"
                />
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="shadow rounded form-width py-3 text-center bg-light mt-2">
        Already have an account?
        <Link to={"/login"} className="text-decoration-none px-1">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Register;
