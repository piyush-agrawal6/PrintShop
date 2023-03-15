import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { BiSearch, BiUser } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BsTruck } from "react-icons/bs";
import { Collapse, Dropdown } from "antd";
import { authLogout } from "../../Redux/auth/action";
import logo from "./logo.png";
const { Panel } = Collapse;
const Navbar = () => {
  const [click, setClick] = useState(false);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const handleClick = (param = "", value = "") => {
    setClick(!click);
    if (param === "" || value === "") {
      setClick(!click);
    } else if (param === "all") {
      return navigate("/product");
    } else {
      return navigate(`/product?${param}=${value}`);
    }
  };
  const handleSearchClick = () => {
    if (keyword.trim()) {
      return navigate(`/product?keyword=${keyword.trim()}`);
    }
  };
  console.log(auth.data.isAuthenticated);
  const styleA = { left: "-100%" };
  const styleB = { left: "0%" };
  const items = [
    {
      label: auth.data.isAuthenticated ? (
        <div>
          <h4>Welcome</h4>
          <p>Access orders and many more !</p>
        </div>
      ) : (
        <div>
          <h4>Welcome</h4>
          <p>To access orders and manage account</p>
        </div>
      ),
      key: "1",
    },
    {
      label: auth.data.isAuthenticated ? (
        <p onClick={() => dispatch(authLogout())} p="10px">
          Logout
        </p>
      ) : (
        <Link to="/login">
          <p>login</p>
        </Link>
      ),
      key: "2",
    },
    {
      label: auth.data.isAuthenticated ? null : (
        <Link to="/signup">
          <p>Signup</p>
        </Link>
      ),
      key: "3",
    },
    {
      type: "divider",
    },
    {
      label: <Link to="/profile">Profile</Link>,
      key: "4",
    },
  ];

  return (
    <div className="container">
      <div className="row v-center">
        <div className="nav-item item-left">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </div>
        </div>
        <div className="nav-item item-center">
          <nav className="menu" style={click ? styleB : styleA}>
            <ul className="menu-main">
              <p className="mobItem">
                <Link>SHOP FOR</Link>
                <MdClose className="cross" onClick={() => handleClick()} />
              </p>

              <li className="menuItem">
                <Link to="product">All Products</Link>
                <div className="subMenu megaMenu menuColumn">
                  <div className="menuList">
                    <ul>
                      <p>Clothing</p>
                      <li>
                        <Link>T-shirts</Link>
                      </li>
                      <li>
                        <Link>Polo T-shirts</Link>
                      </li>
                      <li>
                        <Link>Bags</Link>
                      </li>
                      <li>
                        <Link>Cap</Link>
                      </li>
                      <li>
                        <Link>Jackets</Link>
                      </li>
                      <li>
                        <Link>Sweatshirt</Link>
                      </li>
                      <li>
                        <Link>Apron</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menuList">
                    <ul>
                      <p>Stationary</p>
                      <li>
                        <Link>Envelopes</Link>
                      </li>
                      <li>
                        <Link>Calender</Link>
                      </li>
                      <li>
                        <Link>Notebooks</Link>
                      </li>
                      <li>
                        <Link>Stamps</Link>
                      </li>
                      <li>
                        <Link>Booklets</Link>
                      </li>
                      <li>
                        <Link>Notepad</Link>
                      </li>
                      <li>
                        <Link>Dairy</Link>
                      </li>
                      <li>
                        <Link>Letter Pads</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menuList">
                    <ul>
                      <p>Personalized Gifts</p>
                      <li>
                        <Link>Photo Frames </Link>
                      </li>
                      <li>
                        <Link>Mugs</Link>
                      </li>
                      <li>
                        <Link>Pens</Link>
                      </li>
                      <li>
                        <Link>Albums</Link>
                      </li>
                      <li>
                        <Link>Canvas</Link>
                      </li>
                      <li>
                        <Link>Gift Hampers</Link>
                      </li>
                      <li>
                        <Link>Drinkware</Link>
                      </li>
                      <li>
                        <Link>Mouse Pads</Link>
                      </li>
                      <li>
                        <Link>Mobile covers</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menuList">
                    <ul>
                      <p>Marketing</p>
                      <li>
                        <Link>Banners</Link>
                      </li>
                      <li>
                        <Link>Posters</Link>
                      </li>
                      <li>
                        <Link>Signs</Link>
                      </li>
                      <li>
                        <Link>Flyers</Link>
                      </li>
                      <li>
                        <Link>Packaging boxes</Link>
                      </li>
                      <li>
                        <Link>IDs and Lanyards</Link>
                      </li>
                      <li>
                        <Link>Brochures</Link>
                      </li>
                      <li>
                        <Link>Leaflets</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menuList">
                    <ul>
                      <p>Printouts</p>
                      <li>
                        <Link>Visiting cards</Link>
                      </li>
                      <li>
                        <Link>Rate cards</Link>
                      </li>
                      <li>
                        <Link>Menu Cards</Link>
                      </li>
                      <li>
                        <Link>Bill books</Link>
                      </li>
                      <li>
                        <Link>Invitations</Link>
                      </li>
                      <li>
                        <Link>Bookmarks</Link>
                      </li>
                      <li>
                        <Link>Paper Bags</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menuList">
                    <ul>
                      <p>Labels & stickers</p>
                      <li>
                        <Link>Labels</Link>
                      </li>
                      <li>
                        <Link>Stickers</Link>
                      </li>
                      <li>
                        <Link>Laptop skins</Link>
                      </li>
                      <li>
                        <Link>Mobile skins</Link>
                      </li>
                      <li>
                        <Link>Tags</Link>
                      </li>
                      <li>
                        <Link>Tapes</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menuItem display">
                <Link>About</Link>
              </li>
              <li className="menuItem">
                <Link>Blogs</Link>
              </li>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/product">ALL PRODUCTS</Link>
              </p>
              <Collapse className="dropdownCategory">
                <Panel header="Cloth Printing" key="1">
                  <Link to="/product" className="categoryLink">
                    <p>T-shirts</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Polo T-shirts</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Bags</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Caps</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Jacket</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Sweatshirt</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Apron</p>
                  </Link>
                </Panel>
                <Panel header="Stationary" key="2">
                  <Link to="/product" className="categoryLink">
                    <p>Envelopes</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Calenders</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Notebooks</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Stamps</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Booklets</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Notepads</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Dairy</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Letter Pads</p>
                  </Link>
                </Panel>
                <Panel header="Personalized Gifts" key="3">
                  <Link to="/product" className="categoryLink">
                    <p>Photo Frames</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Mugs</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Pens</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Albums</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Canvas</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Gift Hampers</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Drink wares</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Mouse Pads</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Mobile covers</p>
                  </Link>
                </Panel>
                <Panel header="Marketing" key="4">
                  <Link to="/product" className="categoryLink">
                    <p>Banners</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Posters</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Signs</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Flyers</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Packaging boxes</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>IDs and Lanyards</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Brochures</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Leaflets</p>
                  </Link>
                </Panel>
                <Panel header="Paper Printing" key="5">
                  <Link to="/product" className="categoryLink">
                    <p> Visiting cards</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Rate cards</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Menu Cards</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Bill books</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Invitation Cards</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Bookmarks</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Paper Bags</p>
                  </Link>
                </Panel>
                <Panel header="Labels & Stickers" key="6">
                  <Link to="/product" className="categoryLink">
                    <p>Labels</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Stickers</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Laptop skins</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Mobile skins</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Tags</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Tapes</p>
                  </Link>
                </Panel>
              </Collapse>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/signup">Login</Link>
              </p>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/signup">Blogs</Link>
              </p>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/profile">Profile</Link>
              </p>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/orders">Orders</Link>
              </p>
            </ul>
          </nav>
        </div>
        <div className="nav-item item-right">
          <div
            className="navSearch"
            onKeyUp={({ keyCode }) => {
              if (keyCode === 13) {
                handleSearchClick();
              }
            }}
          >
            <input
              type="text"
              placeholder="Search products"
              onChange={({ target }) => setKeyword(target.value)}
            />
            <BiSearch className="searchIcon" onClick={handleSearchClick} />
          </div>
          <div className="navIcons display">
            <Dropdown
              menu={{ items, selectable: true, defaultSelectedKeys: ["0"] }}
              placement="bottom"
              trigger={["hover"]}
            >
              <Link onClick={(e) => e.preventDefault()}>
                <BiUser className="sideIcons" />
                <p>Account</p>
              </Link>
            </Dropdown>
          </div>
          <div className="navIcons display">
            <Link to="/admin">
              <BsTruck className="sideIcons" />
              <p>Orders</p>
            </Link>
          </div>
          <div className="navIcons">
            <Link to="/bag">
              <HiOutlineShoppingBag className="sideIcons" />
              <span>1</span>
              <p className="display">Cart</p>
            </Link>
          </div>
          <div className="navIcons hamburger">
            <RxHamburgerMenu className="sideIcons" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
