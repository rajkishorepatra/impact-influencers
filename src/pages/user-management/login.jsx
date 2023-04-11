import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { InputField } from "../../components/form-inputs";
import { Form, Button } from "react-bootstrap";

const Register = () => {
  const { logIn, user } = UserAuth();
  const navigate = useNavigate();
  const [formstate, setformstate] = useState({
    submitting: false,
    errors: {},
  });
  // inputs - email and password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs = () => {
    let errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      errors.email = "Email is invalid";
    }
    if (!password.trim()) {
      errors.password = "Password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    return errors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateInputs();
    if (Object.keys(errors).length === 0) {
      setformstate({ ...formstate, submitting: true });
      try {
        console.log("signing in", email, password);
        await logIn(email, password);
        // todo: code to add new user to database.
        setformstate({ ...formstate, submitting: false });
        navigate("/");
      } catch (err) {
        let errmsg = err.code.replace("auth/", "").replaceAll("-", " ");
        errmsg.includes('password')?  errors.password=errmsg:errors.email = errmsg;
        setformstate({ ...formstate, submitting: false, errors: errors });
      }
    } else {
      setformstate({ ...formstate, errors: errors });
    }
  };

  if (user.authed) {
    navigate("/");
  }

  return (
    <div className="form-page vh-100">
      <div className="form-section">
        <div className="page-content">
          <h1 className="fw-bold fs-1 text-light">Impact Influencers</h1>
        </div>
        <div className="form-wrapper">
          <p className=" fs-4 text-light text-center">Log into you account</p>
          <Form onSubmit={(e) => handleFormSubmit(e)}>
            <InputField
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={formstate.errors.email}
              error={formstate.errors.email}
            />
            <InputField
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={formstate.errors.password}
              error={formstate.errors.password}
            />
            <Link className="forgot-password" to={"#"} >forgot password</Link>
            <Button
              type="submit"
              className="form-btn fw-bolder"
              disabled={formstate.submitting}
            >
              Sign in
            </Button>
            <span className="d-block m-1 text-center fw-bolder fs-6 text-light">
              OR
            </span>
            <Button className="form-btn fw-bolder ">
              Continue with Google
            </Button>
          </Form>
          <div className="w-100 text-center text-light mt-3 fs-6">
            Don't have an account?
            <Link
              to={"/register"}
              className="text-decoration-none px-1 text-warning fw-bolder"
            >
              create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
