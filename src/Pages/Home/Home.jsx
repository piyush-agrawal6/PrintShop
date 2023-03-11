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
          <div className="image">
            <img src="./assets/slider/1.gif" alt="images" />
          </div>

          <div className="image">
            <img src="./assets/slider/2.jpg" alt="images" />
          </div>
          <div className="image">
            <img src="./assets/slider/slider.jpg" alt="images" />
          </div>
        </Carousel>
      </div>
      <div className="homeNav">
        <div>
          <Link>
            <img src="./assets/navitems/men.webp" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/navitems/women.webp" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/navitems/kids.webp" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/navitems/beauty.webp" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/navitems/footwear.webp" alt="" />
          </Link>
        </div>
      </div>
      <p className="homeHeader">TOP SELLERS</p>
      <div className="homeColors">
        <div>
          <Link>
            <img src="./assets/colors/1.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/2.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/3.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/4.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/5.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/6.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/7.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/8.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/9.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/10.jpg" alt="" />
          </Link>
        </div>
      </div>
      <p className="homeHeader">TRENDING PRODUCTS</p>
      <div className="homeColors">
        <div>
          <Link>
            <img src="./assets/colors/1.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/2.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/3.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/4.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/5.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/6.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/7.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/8.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/9.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/10.jpg" alt="" />
          </Link>
        </div>
      </div>
      <p className="homeHeader">CATEGORIES WE OFFER</p>
      <div className="homeColors">
        <div>
          <Link>
            <img src="./assets/colors/1.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/2.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/3.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/4.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/5.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/6.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/7.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/8.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/9.jpg" alt="" />
          </Link>
        </div>
        <div>
          <Link>
            <img src="./assets/colors/10.jpg" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
