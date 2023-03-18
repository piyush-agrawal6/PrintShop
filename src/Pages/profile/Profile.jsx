import React, { useState } from "react";
import "./profile.css";
import { Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { editUser } from "../../Redux/auth/action";
const Profile = () => {
  const [modal2Open, setModal2Open] = useState(false);
  const { user } = useSelector((store) => store.auth.data);
  console.log(user);
  const dispatch = useDispatch();
  const [shippingData, setShipping] = useState({
    pinCode: "",
    phone: "",
    city: "",
    state: "",
    landmark: "",
    houseNo: "",
    area: "",
    country: "",
  });
  const [formData, setFormData] = useState({
    name: user?.name || "",
    gender: "",
  });
  const handleShippingChange = (e) => {
    setShipping({ ...shippingData, [e.target.name]: e.target.value });
  };
  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    let data = { ...formData, shipping: shippingData };
    dispatch(editUser(data, user._id));
    setModal2Open(false)
  };

  return (
    <div className="profile">
      <div className="profileCon">
        <div className="profileImage">
          <img
            src={
              user?.avatar
                ? user.avatar
                : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT_ucOxVCJz4xQSLeHbPJr-g7EesYe7YIbZa6H4OmfnP4ctE1CyQYv35GuYk726XJn38B9neaQbx0&usqp=CAU&ec=48600112"
            }
            alt="avatar"
          />
          <p>{user?.email}</p>
          <button onClick={() => setModal2Open(true)}>EDIT PROFILE</button>
        </div>
        <div className="profileDetails">
          <h3>Profile Details</h3>
          <div>
            <p>Full Name </p>
            <p>{user?.name}</p>
          </div>

          <div>
            <p>Email</p>
            <p>{user?.email}</p>
          </div>
          <div>
            <p>Gender</p>
            <p>{user?.gender ? user.gender : "Not added"}</p>
          </div>
          <div>
            <p>Shipping Details</p>
            <div>
              {user?.shipping ? (
                <div>
                  <p>Landmark : {user.shipping.landmark}</p>
                  <p>Area : {user.shipping.landmark}</p>
                  <p>Pin code : {user.shipping.landmark}</p>
                  <p>House No. : {user.shipping.landmark}</p>
                  <p>Phone No. : {user.shipping.landmark}</p>
                  <p>City : {user.shipping.landmark}</p>
                  <p>State : {user.shipping.landmark}</p>
                  <p>Country : {user.shipping.landmark}</p>
                </div>
              ) : (
                "Not added"
              )}
            </div>
          </div>
          <Modal
            title="Edit your personal details"
            open={modal2Open}
            footer={null}
            onCancel={() => setModal2Open(false)}
            style={{ width: { sm: "100%" } }}
          >
            <form className="profileForm" onSubmit={handleFormSubmit}>
              <input
                name="name"
                value={formData.name}
                onChange={handleFormChange}
                type="text"
                placeholder="Full name"
              />
              <select name="gender" onChange={handleFormChange}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Others</option>
              </select>
              <br></br>
              <p>Shipping Details : </p>
              <br />
              <input
                name="phone"
                value={shippingData.phone}
                onChange={handleShippingChange}
                type="text"
                placeholder="Phone Number"
              />
              <input
                name="area"
                value={shippingData.area}
                onChange={handleShippingChange}
                type="text"
                placeholder="Area"
              />
              <input
                name="landmark"
                value={shippingData.landmark}
                onChange={handleShippingChange}
                type="text"
                placeholder="Landmark"
              />
              <input
                name="houseNo"
                value={shippingData.houseNo}
                onChange={handleShippingChange}
                type="text"
                placeholder="House no."
              />
              <input
                name="pinCode"
                value={shippingData.pinCode}
                onChange={handleShippingChange}
                type="text"
                placeholder="Pincode"
              />
              <input
                name="city"
                value={shippingData.city}
                onChange={handleShippingChange}
                type="text"
                placeholder="City"
              />
              <input
                name="state"
                value={shippingData.state}
                onChange={handleShippingChange}
                type="text"
                placeholder="State"
              />
              <input
                name="country"
                value={shippingData.country}
                onChange={handleShippingChange}
                type="text"
                placeholder="Country"
              />

              <br />
              <button type="submit">Save</button>
            </form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Profile;
