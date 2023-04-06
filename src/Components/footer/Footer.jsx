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
      <div className="footer">
        <div className="footerContainer">
          <div className="footerList">
            <h4>TOP SELLERS</h4>
            <ul>
              <li>
                <Link to="product?category=printing">
                  Visiting Card/Brochure
                </Link>
              </li>
              <li>
                <Link to="product?category=graphic">Graphics/logo Design</Link>
              </li>
              <li>
                <Link to="product?category=marketing">
                  Advertising & Publishing
                </Link>
              </li>
              <li>
                <Link to="product?category=stationary">
                  Office Stationeries
                </Link>
              </li>
              <li>
                <Link to="product?category=gifts">Customized Gift Items</Link>
              </li>
              <li>
                <Link to="product?category=fabric">
                  Fabric/Textile Printing
                </Link>
              </li>
            </ul>
          </div>
          <div className="footerList">
            <h4>USEFUL LINKS</h4>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              {/* <li>
                <Link to="/profile">About Us</Link>
              </li> */}
              <li>
                <Link to="/profile">Profile</Link>
              </li>
              <li>
                <Link to="/product">Products</Link>
              </li>
              {/* <li>
                <Link to="/bag">Cart</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li> */}
            </ul>
          </div>
          <div className="footerList">
            <h4>LET US HELP</h4>
            <ul>
              <li>
                <a href="tel:8981167906">
                  <IoLogoWhatsapp className="footerIcon" /> +91-8981167906
                </a>
              </li>
              <li>
                <a target="blank" href="mailto: justprintkarodotcom@gmail.com">
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
