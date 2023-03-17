import React, { useState } from "react";
import "./Otp.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { authLogin, checkOTP } from "../../Redux/auth/action";
const Otp = () => {
  const registerEmail = localStorage.getItem("registerEmail");
  const [formData, setFormData] = useState({
    OTP: "",
    email: registerEmail,
  });
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);

  const navigate = useNavigate();
  console.log(auth);
  // const navigate = useNavigate();
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    dispatch(checkOTP(formData)).then((response) => {
      if (response.message === "Incorrect OTP") {
        messageApi.open({
          type: "error",
          content: "Incorrect OTP",
          duration: 3,
        });
      } else if (response.message === "error") {
        messageApi.open({
          type: "info",
          content: "Something went wrong, please try again",
          duration: 3,
        });
      } else {
        return navigate("/");
      }
    });
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
                name="OTP"
                value={formData.OTP}
                onChange={handleFormChange}
                type="text"
                placeholder="OTP"
              />
              <p>
                Login with different email ? <Link to="/login">Login .</Link>
              </p>
              <button type="submit">
                {contextHolder}
                ENTER OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
