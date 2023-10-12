import React, { useState, useEffect } from "react";
import "./SignUp.scss";
import NetFlixLogo from "../../assets/images/Netflix_Logo_PMS.png";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../utils/firebase-config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const SignUp = () => {
  const navigate = useNavigate();
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorValidation, setErrorValidation] = useState({});
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleSignIn = async () => {
    try {
      setErrorValidation(validationForm(formValues));
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password).catch(
        (error) => {
          if (error && formValues.email) {
            setErrorPassword(true);
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const validationForm = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Please enter a valid email address or phone number.";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.password) {
      errors.password =
        "Your password must contain between 4 and 60 characters.";
    }
    return errors;
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/login");
  });

  console.log("errorValidation", errorValidation);

  return (
    <div className="login">
      <div className="logoNetFlix" onClick={() => navigate("/")}>
        <img src={NetFlixLogo} alt="netflix" />
      </div>
      <div className="inputLogin">
        <div className="inputLogin2">
          <h2>SignIn</h2>
          {errorPassword && (
            <span>
              Incorrect password. Please try again or you can reset your
              password.
            </span>
          )}
          <input
            type="email"
            placeholder="email"
            name="email"
            value={formValues.email}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
            required
          />
          <p>{errorValidation.email}</p>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={formValues.password}
            onChange={(e) =>
              setFormValues({
                ...formValues,
                [e.target.name]: e.target.value,
              })
            }
            required
          />

          <p>{errorValidation.password}</p>

          <button type="submit" onClick={handleSignIn}>
            Sign in
          </button>
        </div>

        <div className="remember">
          <div className="remeberInput">
            <input
              type="checkbox"
              id="demoCheckbox"
              name="checkbox"
              value="1"
            />
            <label>Remember me</label>
          </div>
          <div>Need help?</div>
        </div>

        <h3>
          New to Netflix?{" "}
          <a href="" onClick={() => navigate("/login")}>
            Login now.
          </a>
        </h3>
        <div className="learn">
          This page is protected by Google reCAPTCHA to ensure you're not a bot.
          <a href="">Learn more.</a>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <h2>Questions? Call 000-800-919-1694</h2>
          <div className="footer-ul">
            <ul>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <a href="">Cookie Preferences</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Help Centre</a>
              </li>
              <li>
                <a href="">Corporate Information</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Terms of Use</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Privacy</a>
              </li>
            </ul>
          </div>
          <div className="navbar-container2">
            <div className="navbar-select2">
              <select name="" id="">
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
              <div>Netflix India</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
