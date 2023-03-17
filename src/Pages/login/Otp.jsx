import React, { useState } from "react";
import "./Otp.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { authLogin } from "../../Redux/auth/action";
const Otp = () => {
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
    dispatch(authLogin(formData));
  };
  return (
    <div className="login">
      <div className="loginContainer">
        <div className="loginImage">
          <img src="./assets/signup.png" alt="" />
        </div>
        <div className="loginDetail">
          <div>
            <h3>Enter the otp sent to your mail.</h3>
          </div>
          <div>
            <form onSubmit={handleFormSubmit}>
              <input
                name="email"
                value={formData.email}
                onChange={handleFormChange}
                type="email"
                placeholder="OTP"
              />
              <p>
                Login with different email ? <Link to="/login">Login .</Link>
              </p>
              <button type="submit">
                {contextHolder}
                {auth.userRegister.loading ? "Loading" : "ENTER OTP"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
