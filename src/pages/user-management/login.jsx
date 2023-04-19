import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";
import { InputField } from "../../components/form-inputs";
import { Form, Button } from "react-bootstrap";
import influence from "../../assets/influncer.svg";
import { FiXCircle } from "react-icons/fi";


const Register = () => {
  // googleLogIn, removed google login
  const { logIn, currentUser } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [formstate, setformstate] = useState({
    submitting: false,
    errors: {},
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // manage redirects
  let nextRoute = useRef("");
  useEffect(() => {
    if (!currentUser) {
      nextRoute.current =
        location.state && location.state.from
          ? location.state.from.pathname
          : "/";
    } else {
      navigate(-1, { replace: true });
    }
  }, []);

  // validate inputs
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

  // handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateInputs();
    if (Object.keys(errors).length === 0) {
      setformstate({ ...formstate, submitting: true });
      try {
        console.log("signing in", email, password);
        await logIn(email, password);
        // todo: add new user to database.
        setformstate({ ...formstate, submitting: false });
        navigate(nextRoute.current);
      } catch (err) {
        let errmsg = err.code.replace("auth/", "").replaceAll("-", " ");
        errmsg.includes("password")
          ? (errors.password = errmsg)
          : (errors.email = errmsg);
        setformstate({ ...formstate, submitting: false, errors: errors });
      }
    } else {
      setformstate({ ...formstate, errors: errors });
    }
  };

  // handle google login
  // const handleGoogleLogin = async () => {
  //   setformstate({ ...formstate, submitting: true });
  //   try {
  //     await googleLogIn();
  //     setformstate({ ...formstate, submitting: false });
  //     navigate(nextRoute.current);
  //   } catch (err) {
  //     console.log(err);
  //     setformstate({ ...formstate, submitting: false });
  //   }
  // };

  return (
    <div className="form-section">
      <div className="page-content">
        <button className="close-btn" onClick={()=> navigate('/')}>{ <FiXCircle /> }</button>
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
          <p className=" fs-4 text-center">Log into you account</p>
          <Form onSubmit={(e) => handleFormSubmit(e)}>
            <InputField
              placeholder="Email"
              id="email"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              // isInvalid={formstate.errors.email}
              error={formstate.errors.email}
            />
            <InputField
              placeholder="Password"
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              // isInvalid={formstate.errors.password}
              error={formstate.errors.password}
            />
            <div className="forgot-password">
              <Link to={"#"}>forgot password</Link>
            </div>
            <Button
              type="submit"
              className="form-btn fw-bolder"
              disabled={formstate.submitting}
            >
              Sign in
            </Button>

            {/* <span className="d-block m-1 text-center fw-bolder fs-6">OR</span>
            <Button
              className="form-btn fw-bolder  bg-light text-dark border border-dark"
              onClick={() => handleGoogleLogin()}
              disabled={formstate.submitting}
            >
              Continue with Google
            </Button> */}

          </Form>
          <div className="w-100 text-center mt-3 fs-6">
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
