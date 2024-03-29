import React, { useState, useEffect, useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { InputField, Select, Telephone } from "../../components/form-inputs";
import { UserAuth } from "../../context/AuthContext";
import influence from "../../assets/influncer.svg";
import { FiXCircle } from "react-icons/fi";
import { addUser } from "../../context/db-methods";
import { updateProfile } from "firebase/auth";

const Register = () => {
  // googleLogIn, removed google login
  const { signUp, currentUser } = UserAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tel, setTel] = useState({});
  const [role, setRole] = useState("");
  const [formstate, setformstate] = useState({
    submitting: false,
    errors: {},
  });

  // manage redirects
  let nextRoute = useRef("");
  // nextRoute.current = "/";
  useEffect(() => {
    if (currentUser) {
      navigate(-1, { replace: true });
    } else {
      nextRoute.current =
        location.state && location.state.from
          ? location.state.from.pathname
          : "/";
    }
  }, []);

  const validateInputs = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const phoneRegex = /^\d{10}$/;
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
    if (!tel.phoneNumber) {
      errors.tel = "Phone number is required";
    } else if (tel.phoneNumber && !tel.validData.phoneNumber) {
      errors.tel = "Invalid phone number";
    }
    if (!role.trim() || role.trim() === "Choose your role") {
      errors.role = "Role is required";
    }
    return errors;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const errors = validateInputs();
    if (Object.keys(errors).length === 0) {
      setformstate({ ...formstate, submitting: true });
      try {
        // account creation using email and password
        let userCredential = await signUp(email, password);

        // set display name and phone number for the user
        await updateProfile(userCredential.user, {
          displayName: name,
          phoneNumber: tel.validData.phoneNumber,
        });

        // save user data to firestore according to their role (influencer or volunteer or organization)
        let userData = {
          uid: userCredential.user.uid,
          name: name,
          email: email,
          phone: tel.validData.phoneNumber,
          role: role,
          country: tel.countryData.name,
        };
        await addUser(userData);

        setformstate({ ...formstate, submitting: false });
        navigate(nextRoute.current);
      } catch (err) {
        errors.email = err.code.replace("auth/", "").replaceAll("-", " ");
        setformstate({ ...formstate, submitting: false, errors: errors });
      }
    } else {
      setformstate({ submitting: false, errors: errors });
    }
  };

  // const handleGoogleLogin = async () => {
  //   setformstate({ ...formstate, submitting: true });
  //   try {
  //     await googleLogIn();
  //     setformstate({ ...formstate, submitting: false });
  //     navigate(nextRoute.current);
  //   } catch (err) {
  //     setformstate({ ...formstate, submitting: false });
  //   }
  // };

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
              // isInvalid={formstate.errors.name}
              error={formstate.errors.name}
            />
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

            <Telephone
              placeholder="Phone"
              id="phone"
              name="phone"
              countryCode="in"
              onChange={(o) => {
                setTel(o);
              }}
              error={formstate.errors.tel}
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

            <Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              // isInvalid={formstate.errors.role}
              error={formstate.errors.role}
            >
              <option>Choose your role</option>
              <option value="influencer">Influencer</option>
              <option value="organization">Organization</option>
              <option value="volunteer">Volunteer</option>
            </Select>

            <Button
              type="submit"
              className="form-btn fw-bolder"
              disabled={formstate.submitting}
            >
              Sign up
            </Button>

            {/* <span className="d-block m-1 text-center fw-bolder fs-6 ">OR</span>
            <Button
              className="form-btn fw-bolder bg-light text-dark border border-dark hover:bg-secondary hover:text-light "
              onClick={() => handleGoogleLogin()}
              disabled={formstate.submitting}
            >
              Continue with Google
            </Button> */}
          </Form>
          <div className="w-100 text-center mt-3 fs-6">
            Already have an account?
            <Link
              to={"/login"}
              state={{ from: location.state?.from }}
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
