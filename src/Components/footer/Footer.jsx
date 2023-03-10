import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { MdEmail, MdModeComment } from "react-icons/md";
import { FaLinkedin, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { HiCursorClick } from "react-icons/hi";
const Footer = () => {
  return (
    <>
      {/* <div className="footerHeader"></div> */}
      <div className="footer">
        <div className="footerContainer">
          <div className="footerList">
            <h4>TOP SELLERS</h4>
            <ul>
              <li>
                <Link to="/">Visiting Card/Brochure</Link>
              </li>
              <li>
                <Link>Graphics/logo Design</Link>
              </li>
              <li>
                <Link>Advertising & Publishing</Link>
              </li>
              <li>
                <Link>Office Stationeries</Link>
              </li>
              <li>
                <Link>Customized Gift Items</Link>
              </li>
              <li>
                <Link>Fabric/Textile Printing</Link>
              </li>
            </ul>
          </div>
          <div className="footerList">
            <h4>USEFUL LINKS</h4>
            <ul>
              <li>
                <Link to="/profile">Home</Link>
              </li>
              <li>
                <Link to="/profile">About Us</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/bag">Cart</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
              <li>
                <Link to="/signup">Create Account</Link>
              </li>
            </ul>
          </div>
          <div className="footerList">
            <h4>LET US HELP</h4>
            <ul>
              <li>
                <Link>
                  <IoLogoWhatsapp className="footerIcon" /> +91-8981167906
                </Link>
              </li>
              <li>
                <a href="mailto: justprintkarodotcom@gmail.com">
                  <MdEmail className="footerIcon" />
                  Send Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/sk-rajeev-4555a7264/"
                  target="blank"
                >
                  <FaLinkedin className="footerIcon" />
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://twitter.com/just_print_karo" target="blank">
                  <BsTwitter className="footerIcon" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@justprintkarodotcom/videos"
                  target="blank"
                >
                  <FaYoutube className="footerIcon" />
                  Youtube
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=100089838015682"
                  target="blank"
                >
                  <BsFacebook className="footerIcon" />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/justprintkarodotcom/"
                  target="blank"
                >
                  <AiFillInstagram className="footerIcon" />
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://justprintkaro.blogspot.com/" target="blank">
                  <MdModeComment className="footerIcon" />
                  Blogs
                </a>
              </li>
            </ul>
          </div>
          <div className="footerList">
            <h4>ABOUT US</h4>
            <ul>
              <li>
                <p>JustPrintKaro</p>
              </li>
              <li>
                <p>Kolkata ,700102</p>
              </li>
              <li>
                <p>West Bengal , India</p>
              </li>
              <li>
                <p>
                  More about us <HiCursorClick />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footerHeader">
        <p>JustPrintKaro.com &#169; All rights reserved , 2023 - 2024</p>
        <p>
          <a href="https://piyush-agrawal6.github.io/" target="blank">
            Created By CodeWithJoy
          </a>
        </p>
      </div>
    </>
  );
};

export default Footer;
