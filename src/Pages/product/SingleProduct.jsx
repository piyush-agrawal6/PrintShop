import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../Redux/product/action";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Slider } from "antd";
import "./singleproduct.css";
import { RxCross2 } from "react-icons/rx";
import { BiDetail } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsImage, BsWhatsapp } from "react-icons/bs";
const SingleProduct = () => {
  const [img, setImg] = useState([]);
  const [image, setImage] = useState(null);
  const [loadings, setLoading] = useState(false);
  const imageRef = useRef();
  let { id } = useParams();
  const [proQuantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const alreadyAdded = true;
  const { product, pro_loading: loading } = useSelector(
    (store) => store.products
  );
  let images = [];
  if (product) {
    for (let key in product.images) {
      images.push(product.images[key]);
    }
  }

  const imageChange = async (e) => {
    const files = e.target.files;
    setImg([...img, e.target.files[0]]);
    setLoading(true);
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "diverse");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/diverse/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    console.log(file);
    setImage(file.secure_url);
    setLoading(false);
  };
  const handleSubmit = (e) => {
    console.log(img);
  };

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id, dispatch]);

  if (loading) {
    return "Loading...";
  }

  return (
    <div className="singleProComponent">
      <div className="singleProNavigation">
        Home / {product.gender} /{" "}
        <span>
          {product.categories ? product.categories : product.category} /{" "}
          {product.brand}
        </span>
      </div>
      <div className="singlePro">
        <div className="singleProGallery">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {images?.map((e, i) => {
              return (
                <SwiperSlide className="swipeImage" key={i}>
                  <img src={e} alt="images" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className="singleProDetails">
          <div className="singleProName">
            <h2>{product.brand}</h2>
            <h2>{product.title}</h2>
          </div>
          <div className="singleItemDetails">
            <div>
              Rs. {product.price} <s>Rs. {product.off_price}</s>
              <span>({product.discount}% OFF)</span>
            </div>
            <h5 style={{ color: product.stock ? "#14958f" : "red" }}>
              Status : {product.stock ? "InStock" : "Out Of Stock"}
            </h5>
          </div>
          <div className="singleProDescription">
            <h3>
              PRODUCT DETAILS <BiDetail />
            </h3>
            <p>{product.description}</p>
            {/* <h4>Color : {product.color}</h4> */}
            {product.size ? <h4>{product.size}</h4> : null}
          </div>
          <div className="singleProQuantity">
            <p>Select Quantity : {proQuantity}</p>
            <Slider
              defaultValue={1}
              max={product.stock > 20 ? 20 : product.stock}
              onChange={(e) => setQuantity(e)}
            />
          </div>
          <div className="singleProButtons">
            <button className="addToCart">
              <HiOutlineShoppingBag className="singleProIcons" />
              {alreadyAdded ? "PLEASE LOGIN" : "ADD TO BAG"}
            </button>
            <button className="addToList">
              <BsWhatsapp className="singleProIcons" />
              ORDER ON WHATSAPP
            </button>
          </div>
        </div>
      </div>
      <div className="singleProReviews">
        <div className="postInput">
          <input
            type="file"
            name="myImage"
            ref={imageRef}
            onChange={imageChange}
          />
        </div>
        <button onClick={handleSubmit}>Share</button>
        <div
          onClick={() => imageRef.current.click()}
          className="postOptionIcon"
        >
          <BsImage /> <span>Photo</span>
        </div>
        {img[0] &&
          img.map((elem, i) => {
            return (
              <div>
                <RxCross2
                  onClick={() =>
                    setImg([...img.filter((file) => file !== elem)])
                  }
                />
                <img src={URL.createObjectURL(elem)} alt="img" />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SingleProduct;
