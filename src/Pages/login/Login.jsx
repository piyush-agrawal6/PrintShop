import React, { useEffect, useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { authLogin } from "../../Redux/auth/action";
import jwt_decode from "jwt-decode";
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
  });
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  console.log(auth);
  // const navigate = useNavigate();
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData, "FORMDATA");
    dispatch(authLogin(formData));
  };

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
    <div className="login">
      <div className="loginContainer">
        <div className="loginImage">
          <img src="./assets/signup.png" alt="" />
        </div>
        <div className="loginDetail">
          <div>
            <h3>Login</h3>
          </div>
          <div>
            <form onSubmit={handleFormSubmit}>
              <input
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                type="email"
                placeholder="Enter email"
              />
              <p>
                New User ? <Link to="/signup">Signup .</Link>
              </p>
              <button type="submit">
                {contextHolder}
                {auth.userRegister.loading ? "Loading" : "CONTINUE"}
              </button>
              <div id="SigninDiv" className="googlesignup"></div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
