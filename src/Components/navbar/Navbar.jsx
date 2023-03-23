import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { BiSearch, BiUser } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { BsTruck } from "react-icons/bs";
import { AiFillLock } from "react-icons/ai";
import { Collapse, Drawer, Dropdown, message } from "antd";
import { authLogout } from "../../Redux/auth/action";
import logo from "./logo.png";
import { Grid, Tag } from "antd";
const { useBreakpoint } = Grid;
const { Panel } = Collapse;
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const [openOrder, setOpenOrder] = useState(false);

  const showOrderDrawer = () => {
    setOpenOrder(true);
  };

  const onOrderClose = () => {
    setOpenOrder(false);
  };
  const abcd = useBreakpoint();
  const [click, setClick] = useState(false);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();
  const auth = useSelector((store) => store.auth);
  const { cart } = useSelector((store) => store.auth);
  const [cartItems, setCartItems] = useState([...cart]);
  const [messageApi, contextHolder] = message.useMessage();
  const increment = (i) => {
    setCartItems(
      cartItems.map((elem, index) => {
        if (index === i) {
          elem.quantity += 1;
        }
        return elem;
      })
    );
  };
  const decrement = (i) => {
    setCartItems(
      cartItems.map((elem, index) => {
        if (index === i && elem.quantity >= 1) {
          elem.quantity -= 1;
        }
        return elem;
      })
    );
  };
  let totalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalPrice += cartItems[i].quantity * cartItems[i].product.off_price;
  }
  console.log(totalPrice);
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
        <p
          onClick={() => {
            dispatch(authLogout());
            messageApi.open({
              type: "info",
              content: "Logged Out Successfully.",
              duration: 3,
            });
          }}
          p="10px"
        >
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
      label: <Link to="/profile">Profile</Link>,
      key: "4",
    },
  ];

  return (
    <div className="container">
      {contextHolder}
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
                      <Link to="product?category=printing">
                        Paper Printings
                      </Link>
                      <li>
                        <Link to="product?subcategory=visitingcard">
                          Visiting cards
                        </Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=brochure">Brochures</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=ratecard">
                          Rate cards
                        </Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=menucard">
                          Menu Cards
                        </Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=billbook">
                          Bill books
                        </Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=invitation">
                          Invitations
                        </Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=bookmark">Bookmarks</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=paperbag">
                          Paper Bags
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menuList">
                    <ul>
                      <Link to="product?category=marketing">
                        Advertising & Publishing
                      </Link>
                      <li>
                        <Link to="product?subcategory=banner">Banners</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=poster">Posters</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=sign">Signs</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=flyer">Flyers</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=packaging">
                          Packaging boxes
                        </Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=id">
                          IDs and Lanyards
                        </Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=leaflet">Leaflets</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menuList">
                    <ul>
                      <Link to="product?category=gifts">Customized Gifts</Link>
                      <li>
                        <Link to="product?subcategory=photoframe">
                          Photo Frames
                        </Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=mug">Mugs</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=pen">Pens</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=album">Albums</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=canvas">Canvas</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=hamper">
                          Gift Hampers
                        </Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=drinkware">
                          Drink wares
                        </Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=mousepad">
                          Mouse Pads
                        </Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=cover">
                          Mobile covers
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menuList">
                    <ul>
                      <Link to="product?category=stationary">
                        Office Stationeries
                      </Link>
                      <li>
                        <Link to="product?subcategory=envelope">Envelopes</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=calender">Calender</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=notebook">Notebooks</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=stamp">Stamps</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=booklet">Booklets</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=notepad">Notepad</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=dairy">Dairy</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=letterpad">
                          Letter Pads
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menuList">
                    <ul>
                      <Link to="product?category=graphic">
                        Graphics & logos
                      </Link>
                      <li>
                        <Link to="product?subcategory=graphic">Graphics</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=logo">Logos</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=label">Labels</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=sticker">Stickers</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=laptopskin">
                          Laptop skins
                        </Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=mobileskin">
                          Mobile skins
                        </Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=tag">Tags</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=tape">Tapes</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="menuList">
                    <ul>
                      <Link to="product?category=fabric">Fabric Printing</Link>
                      <li>
                        <Link to="product?subcategory=tshirt">T-shirts</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=polo">Polo T-shirts</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=bag">Bags</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=cap">Cap</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=jacket">Jackets</Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=sweatshirt">
                          Sweatshirt
                        </Link>
                      </li>
                      <li>
                        <Link to="product?subcategory=apron">Apron</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="menuItem display">
                <Link>Bulk Order</Link>
              </li>
              <li className="menuItem">
                <Link>Blogs</Link>
              </li>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/product">ALL PRODUCTS</Link>
              </p>
              <Collapse className="dropdownCategory">
                <Panel header="Fabric Printing" key="1">
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
                <Panel header="Office Stationeries" key="2">
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
                <Panel header="Customized Gifts" key="3">
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
                <Panel header="Advertising & Publishing" key="4">
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
                    <p>Leaflets</p>
                  </Link>
                </Panel>
                <Panel header="Paper Printing" key="5">
                  <Link to="/product" className="categoryLink">
                    <p> Visiting cards</p>
                  </Link>
                  <Link to="/product" className="categoryLink">
                    <p>Brochures</p>
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
                <Panel header="Graphics & logos" key="6">
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
                <Link to="/signup">Bulk Order</Link>
              </p>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/signup">Blogs</Link>
              </p>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/profile">Profile</Link>
              </p>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/signup">Login</Link>
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
          <div className="navIcons" onClick={showOrderDrawer}>
            <Link>
              <BsTruck className="sideIcons" />
              <p className="display">Orders</p>
            </Link>
          </div>
          <Drawer
            width={abcd.xs ? "350px" : abcd.sm ? "550px" : "550px"}
            title="ORDER - 3 Items"
            placement="right"
            onClose={onOrderClose}
            open={openOrder}
          >
            {auth?.data?.isAuthenticated ? (
              <div className="orderDrawer">
                <div className="oderProducts">
                  <div className="orderProDetails">
                    <div className="orderLeft">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0503/7844/0897/products/Muscle-Nectar-Gym-Shaker-Bottle-700ml-1.jpg?v=1655277287&width=92"
                        alt="img"
                      />
                    </div>
                    <div className="orderMiddle">
                      <p>Rapid Swirl Shaker Bottle (700ml)</p>
                      <div>
                        <div>
                          <button>Qt.</button>
                          <button>1</button>
                        </div>
                        <u>Cancel</u>
                      </div>
                      <p>300 pcs</p>
                    </div>
                    <div className="orderRight">
                      <p>Order Status :</p>
                      <p>Pending</p>
                      <p>₹2345.00</p>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="loginBtn">
                <Link to="/login">
                  <button>PLEASE LOGIN</button>
                </Link>
              </div>
            )}
          </Drawer>
          <div className="navIcons" onClick={showDrawer}>
            <Link>
              <HiOutlineShoppingBag className="sideIcons" />
              <span>1</span>
              <p className="display">Cart</p>
            </Link>
          </div>

          <Drawer
            width={abcd.xs ? "320px" : abcd.sm ? "550px" : "550px"}
            title="CART - 3 Items"
            placement="right"
            onClose={onClose}
            open={open}
            className="CartDrawerWidth"
          >
            {auth?.data?.isAuthenticated ? (
              <div className="CartDrawer">
                <div className="CartCheckout">
                  <p>Shipping & taxes calculated at checkout</p>
                  <button className="CartCheckoutBtn">
                    <AiFillLock />
                    CHECKOUT - ₹2345.00
                  </button>
                </div>
                <div className="CartProducts">
                  {cartItems?.map((elem, i) => {
                    return (
                      <div className="CartProDetails">
                        <div className="CartLeft">
                          <img src={elem.product?.images[0]} alt="img" />
                        </div>
                        <div className="CartMiddle">
                          <p>{elem.product?.title}</p>
                          <div>
                            <div>
                              <button onClick={() => decrement(i)}>-</button>
                              <input type="text" value={elem.quantity} />
                              <button onClick={() => increment(i)}>+</button>
                            </div>
                            <u>Remove</u>
                          </div>
                          <p>{elem.product?.set} pcs</p>
                        </div>
                        <div className="CartRight">
                          <p>₹{elem.product?.off_price}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ) : (
              <div className="loginBtn">
                <Link to="/login">
                  <button>PLEASE LOGIN</button>
                </Link>
              </div>
            )}
          </Drawer>

          <div className="navIcons hamburger">
            <RxHamburgerMenu className="sideIcons" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
