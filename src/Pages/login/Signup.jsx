import React, { useEffect, useState } from "react";
import "./Signup.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { googleRegister, registerUser } from "../../Redux/auth/action";
import jwt_decode from "jwt-decode";
import { message } from "antd";
const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  console.log(auth);
  const navigate = useNavigate();
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() !== "" && formData.email.trim() !== "") {
      if (formData.name.trim().length < 4) {
        messageApi.open({
          type: "error",
          content: "Name must be at least 4 characters",
          duration: 3,
        });
      } else {
        console.log(formData);
        dispatch(registerUser(formData)).then((res) => {
          if (res.message === "User already exists") {
            messageApi.open({
              type: "info",
              content: "User already exists , Please login.",
              duration: 3,
            });
          } else if (res.message === "error") {
            messageApi.open({
              type: "info",
              content: "Something went wrong, please try again",
              duration: 3,
            });
          } else {
            localStorage.setItem("registerEmail", formData.email);
            return navigate("/otp");
          }
        });
      }
    } else {
      messageApi.open({
        type: "error",
        content: "Please enter all required fields",
        duration: 3,
      });
    }
  };
  if (auth.data.isAuthenticated) {
    messageApi.open({
      type: "success",
      content: "User registered successfully",
      duration: 3,
    });
    // return <Navigate to="/" />;
  }

  function handleCallbackResponse(res) {
    let value = jwt_decode(res.credential);
    if (value.email_verified) {
      dispatch(
        googleRegister({
          name: value.given_name + " " + value.family_name,
          email: value.email,
          avatar: value.picture,
        })
      ).then((res) => {
        if (res.message === "error") {
          return messageApi.open({
            type: "info",
            content: "Something went wrong, please try again",
            duration: 3,
          });
        }
        messageApi.open({
          type: "info",
          content: "Login Successfully",
          duration: 3,
        });
        return navigate("/");
      });
    } else {
      messageApi.open({
        type: "info",
        content: "Incorrect Email Address",
        duration: 3,
      });
    }
    document.getElementById("SigninDiv").hidden = true;
  }

  useEffect(() => {
    window.google.accounts.id.initialize({
      client_id:
        "577292365515-han2ihachrs8u89s6r0ev7i8iutu7f99.apps.googleusercontent.com",
      callback: handleCallbackResponse,
    });

    window.google.accounts.id.renderButton(
      document.getElementById("SigninDiv"),
      {
        theme: "outline",
        size: "large",
      }
    );
    window.google.accounts.id.prompt();
  }, []);

  return (
    <div className="signup">
      <div className="signupContainer">
        <div className="signupImage">
          <img src="./assets/signup.png" alt="" />
        </div>
        <div className="signupDetail">
          <div>
            <h3>Signup</h3>
          </div>
          <div>
            <form onSubmit={handleFormSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                type="text"
                placeholder="Full name"
              />
              <input
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                type="email"
                placeholder="Enter email"
              />
              <p>
                Already a User ? <Link to="/login">Login .</Link>
              </p>
              <button type="submit">
                {contextHolder}
                CONTINUE
              </button>
            </form>
            <div id="SigninDiv" className="googlesignup"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
