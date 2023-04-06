import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import { Link } from "react-router-dom";
import MetaData from "../../Components/MetaData";

const Home = () => {
  return (
    <div>
      <MetaData title={"Home Page"} />
      <div className="HomeCarousel">
        <Carousel infiniteLoop autoPlay>
          <Link to="/product">
            <div className="image">
              <img src="./assets/slider/banner1.jpg" alt="images" />
            </div>
          </Link>
          <Link to="/product?subcategory=banner">
            <div className="image">
              <img src="./assets/slider/slider6.jpeg" alt="images" />
            </div>
          </Link>
          <Link to="/product?category=gifts">
            <div className="image">
              <img src="./assets/slider/slider.jpg" alt="images" />
            </div>
          </Link>
          <Link to="/product?subcategory=invitation">
            <div className="image">
              <img src="./assets/slider/slider7.gif" alt="images" />
            </div>
          </Link>
        </Carousel>
      </div>
      <div>
        <div className="homeNav"></div>
      </div>
      <p className="homeHeader">TOP SELLERS</p>
      <div className="homeColors">
        <div>
          <Link to="/product?subcategory=visitingcard">
            <img src="./assets/colors/1.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=stamp">
            <img src="./assets/colors/2.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=mug">
            <img src="./assets/colors/3.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=tshirt">
            <img src="./assets/colors/4.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=banner">
            <img src="./assets/colors/5.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=invitation">
            <img src="./assets/colors/6.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?category=graphic">
            <img src="./assets/colors/7.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?category=gifts">
            <img src="./assets/colors/8.jpg" alt="" />
          </Link>
        </div>
      </div>
      <p className="homeHeader">TRENDING PRODUCTS</p>
      <div className="homeColors">
        <div>
          <Link to="/product?category=homedecor">
            <img src="./assets/colors/9.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=album">
            <img src="./assets/colors/10.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=crystal">
            <img src="./assets/colors/11.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=shirt">
            <img src="./assets/colors/12.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=photoframe">
            <img src="./assets/colors/13.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=lamp">
            <img src="./assets/colors/14.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=cushion">
            <img src="./assets/colors/15.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=notebook">
            <img src="./assets/colors/16.jpg" alt="" />
          </Link>
        </div>
      </div>
      <p className="homeHeader">MACHINERIES</p>
      <div className="homeCategories">
        <div>
          <Link to="/product?subcategory=heatpress">
            <img src="./assets/colors/21.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=mugprinting">
            <img src="./assets/colors/17.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=lamination">
            <img src="./assets/colors/18.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=selfinkstamp">
            <img src="./assets/colors/19.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/product?subcategory=polymerstamp">
            <img src="./assets/colors/20.jpg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
