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
            <img src="./assets/slider/slider.jpg" alt="images" />
          </div>
          <div className="image">
            <img src="./assets/slider/slider2.jpg" alt="images" />
          </div>
          <div className="image">
            <img src="./assets/slider/slider3.jpg" alt="images" />
          </div>
          <div className="image">
            <img src="./assets/slider/slider4.webp" alt="images" />
          </div>
          <div className="image">
            <img src="./assets/slider/slider5.webp" alt="images" />
          </div>
          <div className="image">
            <img src="./assets/slider/slider6.webp" alt="images" />
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
      <p className="homeHeader">CATEGORIES WE OFFER</p>
      <div className="homeCategories">
        <div>
          <img src="./assets/category/Shirts.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Trousers.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/T-Shirts.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Tops.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Teens-Wear.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Sets.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Sarees.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Kurtas.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Jeans.webp" alt="" />
        </div>
        <div>
          <img src="./assets/category/Innerwear.webp" alt="" />
        </div>
      </div>
      <p className="homeHeader">COLORS OF THE SEASON</p>
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
