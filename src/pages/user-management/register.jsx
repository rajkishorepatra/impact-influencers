import React, { useState, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { InputField } from "../../components/form-inputs";
import { UserAuth } from "../../context/AuthContext";
import influence from "../../assets/influncer.svg";
import { FiXCircle } from "react-icons/fi";


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

  // manage redirects
  let nextRoute = useRef("");
  nextRoute.current = "/";
  useEffect(() => {
    if (currentUser) {
      navigate(-1);
    }
  }, []);

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
        navigate(nextRoute.current);
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
      navigate(nextRoute.current);
    } catch (err) {
      setformstate({ ...formstate, submitting: false });
      console.log(err);
    }
  };

  return (
    <div className="form-section">
      <div className="page-content">
        <button className="close-btn" onClick={() => navigate("/")}>
          {<FiXCircle />}
        </button>
        <h1 className="fw-bold fs-1 text-center">Impact Influencers</h1>
        <p className=" text-center h4">
          connect influencers with organizations
        </p>
        <img src={influence} alt="influence" className=" form-img" />
      </div>
      <div className="form-container">
        <div className="form-wrapper">
          <h1 className="fw-bold fs-1 text-center d-none form-heading">
            Impact Influencers
          </h1>
          <p className=" fs-4  text-center">Let's get you started</p>
          <Form onSubmit={(e) => handleFormSubmit(e)}>
            <InputField
              placeholder="Full Name"
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
            <span className="d-block m-1 text-center fw-bolder fs-6 ">OR</span>
            <Button
              className="form-btn fw-bolder bg-light text-dark border border-dark hover:bg-secondary hover:text-light "
              onClick={() => handleGoogleLogin()}
              disabled={formstate.submitting}
            >
              Continue with Google
            </Button>
          </Form>
          <div className="w-100 text-center mt-3 fs-6">
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
