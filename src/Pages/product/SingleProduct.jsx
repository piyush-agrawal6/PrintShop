import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../Redux/product/action";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { Skeleton, Slider } from "antd";
import "./singleproduct.css";
import { RxCross2 } from "react-icons/rx";
import { BiDetail } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsImage, BsWhatsapp } from "react-icons/bs";
import ReactWhatsapp from "react-whatsapp";
import { addToCart } from "../../Redux/auth/action";
import MetaData from "../../Components/MetaData";
const SingleProduct = () => {
  const [img, setImg] = useState([]);
  const [imgLink, setImgLink] = useState([]);
  const [image, setImage] = useState(null);
  const [loadings, setLoading] = useState(false);
  const imageRef = useRef();
  let { id } = useParams();
  const [proQuantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const auth = useSelector((store) => store.auth);
  const { product, pro_loading: loading } = useSelector(
    (store) => store.products
  );

  const addCart = () => {
    let data = {
      images: imgLink,
      userId: auth.data.user._id,
      product,
      quantity: proQuantity,
    };
    dispatch(addToCart(data));
  };

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
    data.append("upload_preset", "printshop");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/printshop/image/upload",
      {
        method: "POST",
        body: data,
      }
    );
    const file = await res.json();
    setImage(file.secure_url);
    setImgLink([...imgLink, file.secure_url]);
    setLoading(false);
  };

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [id, dispatch]);

  if (loading) {
    return (
      <div className="proGrid">
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
        <div className="proSkeleton">
          <Skeleton active />
        </div>
      </div>
    );
  }

  return (
    <div className="singleProComponent">
      <MetaData title={product.title} />
      <div className="singleProNavigation">
        Home / Products /{" "}
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
            <h2>
              <span>J</span>ust<span>P</span>rint<span>K</span>aro
            </h2>
            <h2>{product.title}</h2>
          </div>
          <div className="singleItemDetails">
            <div>
              <s>Rs. {product.price}</s>
              <span>({product.discount}% OFF)</span>
            </div>
            {product?.set > 1 ? (
              <div>
                {product.set} starting at Rs. {product.off_price}
              </div>
            ) : (
              <div>Rs. {product.off_price}</div>
            )}
            <h5 style={{ color: product.stock ? "#14958f" : "red" }}>
              Status :{" "}
              {product.stock && product.stock < 10
                ? `Only ${product.stock} left`
                : "In Stock"}
            </h5>
          </div>
          <div className="singleProDescription">
            <h3>
              PRODUCT DETAILS <BiDetail />
            </h3>
            {product?.description?.map((elem) => {
              return <li>{elem}</li>;
            })}
            {product.size ? <h4>{product.size}</h4> : null}
          </div>
          <div className="singleProQuantity">
            <p>
              Select Quantity :{" "}
              <input
                onChange={(e) => setQuantity(e.target.value)}
                className="singleProQuantityInput"
                type="number"
                max={200}
                value={proQuantity}
              />
            </p>
            <Slider
              defaultValue={1}
              max={50}
              onChange={(e) => setQuantity(e)}
            />
          </div>
          <div className="singleProButtons">
            <button onClick={addCart} className="addToCart">
              <HiOutlineShoppingBag className="singleProIcons" />
              {auth.data.isAuthenticated
                ? "ADD TO CART"
                : "LOGIN TO PLACE ORDER"}
            </button>
            <ReactWhatsapp
              style={{ border: "none", padding: 0 }}
              number="8981167906"
              message={`Hey can you give me some more information about this  product , Product ID : ${product._id}`}
            >
              <button className="addToList">
                <BsWhatsapp className="singleProIcons" />
                ORDER ON WHATSAPP
              </button>
            </ReactWhatsapp>
          </div>
        </div>
      </div>
      <div className="singleProReviews">
        <div className="postInput">
          <input
            style={{ display: "none" }}
            type="file"
            name="myImage"
            ref={imageRef}
            onChange={imageChange}
          />
        </div>
        <div onClick={() => imageRef.current.click()} className="uploadOption">
          Upload Images / Designs / Logos / Photos{" "}
          <button>
            UPLOAD <BsImage />
          </button>
        </div>
        <div className="uploadedImages">
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
    </div>
  );
};

export default SingleProduct;
