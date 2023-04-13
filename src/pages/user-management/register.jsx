import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../../components/form-inputs";
import { UserAuth } from "../../context/AuthContext";

const Register = () => {
  const { signUp, currentUser, googleLogIn } = UserAuth();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formstate, setformstate] = useState({
    submitting: false,
    errors: {},
  });

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    }
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
        console.log("signing up", name, email, password);
        await signUp(email, password);
        // todo: code to add new user to database.
        setformstate({ ...formstate, submitting: false });
        navigate("/influencer");
      } catch (err) {
        errors.email = err.code.replace("auth/", "").replaceAll("-", " ");
        setformstate({ ...formstate, submitting: false, errors: errors });
      }
    } else {
      setformstate({ ...formstate, errors: errors });
    }
  };

  const handleGoogleLogin = async () => {
    setformstate({ ...formstate, submitting: true });
    try {
      await googleLogIn();
      setformstate({ ...formstate, submitting: false });
      navigate("/influencer");
    } catch (err) {
      setformstate({ ...formstate, submitting: false });
      console.log(err);
    }
  };

  return (
    <div className="form-page vh-100">
      <div className="form-section">
        <div className="page-content">
          <h1 className="fw-bold fs-1 text-light">Impact Influencers</h1>
        </div>
        <div className="form-wrapper">
          <p className=" fs-4 text-light text-center">Let's get you started</p>
          <Form onSubmit={(e) => handleFormSubmit(e)}>
            <InputField
              placeholder="Name"
              id="name"
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isInvalid={formstate.errors.name}
              error={formstate.errors.name}
            />
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

            <Button
              type="submit"
              className="form-btn fw-bolder"
              disabled={formstate.submitting}
            >
              Sign up
            </Button>
            <span className="d-block m-1 text-center fw-bolder fs-6 text-light">
              OR
            </span>
            <Button
              className="form-btn fw-bolder "
              onClick={() => handleGoogleLogin()}
              disabled={formstate.submitting}
            >
              Continue with Google
            </Button>
          </Form>
          <div className="w-100 text-center text-light mt-3 fs-6">
            Already have an account?
            <Link
              to={"/login"}
              className="text-decoration-none px-1 text-warning fw-bolder"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
