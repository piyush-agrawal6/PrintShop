import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { MdCall, MdEmail, MdHome, MdModeComment } from "react-icons/md";
import { FaLinkedin, FaGithub, FaYoutube, FaHeart } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footerContainer">
        <div className="footerList">
          <h4>SHOPPING</h4>
          <ul>
            <li>
              <Link to="/">Take me home !</Link>
            </li>
            <li>
              <Link>All Products</Link>
            </li>
            <li>
              <Link>Men</Link>
            </li>
            <li>
              <Link>Women</Link>
            </li>
            <li>
              <Link>Kids</Link>
            </li>
            <li>
              <Link>Beauty</Link>
            </li>
          </ul>
        </div>
        <div className="footerList">
          <h4>USEFUL LINKS</h4>
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/admin">Admin Panel</Link>
            </li>
            <li>
              <Link to="/bag">Bag</Link>
            </li>
            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </div>
        <div className="footerList">
          <h4>KEEP IN TOUCH</h4>
          <ul>
            <li>
              <Link>
                <MdCall className="footerIcon" /> +91-8144110261
              </Link>
            </li>
            <li>
              <Link>
                <MdEmail className="footerIcon" />
                E-Mail
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/piyush-agrawal-me/"
                target="blank"
              >
                <FaLinkedin className="footerIcon" />
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/piyush-agrawal6" target="blank">
                <FaGithub className="footerIcon" />
                Github
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCE7X1XreCJKorvqTaCipCAQ"
                target="blank"
              >
                <FaYoutube className="footerIcon" />
                Youtube
              </a>
            </li>
            <li>
              <a href="https://piyush-agrawal6.github.io/" target="blank">
                <MdHome className="footerIcon" />
                Portfolio
              </a>
            </li>
            <li>
              <Link>
                <MdModeComment className="footerIcon" />
                Post and Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div className="footerList">
          <h4>ABOUT ME</h4>
          <ul>
            <li>
              <p>Piyush Agrawal</p>
            </li>
            <li>
              <p>Bargarh , Odisha</p>
            </li>
            <li>
              <p>Attabira , 768027</p>
            </li>
            <li>
              <p>MERN Stack Developer</p>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1gFYaxu-xdJ3QfySJtPubrL-_D0zQtN6-/view?usp=share_link"
                target="blank"
              >
                More about me !
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1gFYaxu-xdJ3QfySJtPubrL-_D0zQtN6-/view?usp=share_link"
                target="blank"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="https://github.com/piyush-agrawal6/Myntra-Frontend"
                target="blank"
              >
                <FaHeart className="footerIcon" /> Like my project ?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
