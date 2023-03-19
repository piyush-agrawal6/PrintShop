import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Home.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MetaData from "../../Components/MetaData";
import { getCartProducts } from "../../Redux/bag/action";

const Home = () => {
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  // useEffect(() => {
  //   dispatch(getCartProducts(auth.data.user._id));
  // }, [dispatch, auth.data.user]);
  return (
    <div>
      <MetaData title={"Home Page"} />
      <div className="HomeCarousel">
        <Carousel infiniteLoop autoPlay>
          <div className="image">
            <img src="./assets/slider/slider6.jpeg" alt="images" />
          </div>
          <div className="image">
            <img src="./assets/slider/slider.jpg" alt="images" />
          </div>
          <div className="image">
            <img src="./assets/slider/slider7.gif" alt="images" />
          </div>
        </Carousel>
      </div>
      <div>
        <div className="homeNav"></div>
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
