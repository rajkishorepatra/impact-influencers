import React from "react";
import { Link } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputField } from "../components/form-inputs";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FiX } from "react-icons/fi";
const Login = () => {
  const handleFormSubmit = async (values) => {
    console.log(values);
  };
  return (
    <div className="form-page vh-100 bg-gradient">
      <div className="mt-4">
        <Link
          to={"/"}
          className="text-decoration-none fw-bold fs-2 text-secodary"
        >
          Impact Influerncers
        </Link>
        <p className=" fs-4 fw-light text-center m-2">sign into your account</p>
      </div>
      <div className="mb-2 rounded shadow px-3 py-2 form-width d-flex justify-content-between align-items-center border border-danger">
        <span>error message</span>
        <button
          onClick={() => console.log("hfjdkfj")}
          className="bg-transparent border-0"
        >
          <FiX className="fs-5 text-danger"></FiX>
        </button>
      </div>
      <div className="form-wrapper rounded p-3 bg-light shadow">
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string()
              .email("Invalid email address")
              .required("required"),
            password: Yup.string()
              .min(6, "must be 6 characters or more")
              .max(15, "must be 15 characters of less")
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
            />
            <div className="">
              <Button type="submit" className="w-100 mt-2">
                {/* {formstate.submitting ? (
              <HiOutlineRefresh className="text-lg w-full text-center animate-spin" />
            ) : (
              "Sign up"
            )} */}
                Sign up
              </Button>
            </div>
            <div className="w-100">
              <span className="d-block text-center divider my-1 text-muted">
                or
              </span>
              <Button className="w-100 rounded bg-secondary border border-0 d-flex align-items-center justify-content-center">
                Sign in with{" "}
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
        Don't have an account?
        <Link to={"/register"} className="text-decoration-none px-1">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
