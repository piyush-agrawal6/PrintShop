import React, { useEffect, useState } from "react";
import "./Signup.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../Redux/auth/action";
import { FcGoogle } from "react-icons/fc";
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
        // dispatch(registerUser(formData));
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
    console.log("Google Id", res.credential);
    let value = jwt_decode(res.credential);
    console.log(value);
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
                {auth.userRegister.loading ? "Loading" : "CONTINUE"}
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
