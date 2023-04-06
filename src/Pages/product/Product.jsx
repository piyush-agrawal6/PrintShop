import React, { useEffect, useState } from "react";
import "./Product.css";
import ProComp from "../../Components/product/ProComp";
import { getProduct, sortProducts } from "../../Redux/product/action";
import { useSelector, useDispatch } from "react-redux";
import { Skeleton } from "antd";
import { useLocation } from "react-router-dom";
import MetaData from "../../Components/MetaData";
import NoProducts from "../../Components/NoProducts/NoProducts";
const Product = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search).get("gender");
  const categories = new URLSearchParams(search).get("category");
  const subcategory = new URLSearchParams(search).get("subcategory");
  const keyword = new URLSearchParams(search).get("keyword");
  const [prevQuery, setPrevQuery] = useState(query);
  const [shape, setShape] = useState("");
  const dispatch = useDispatch();
  let [page, setPage] = useState(1);
  let [filter, setFilter] = useState("");
  let [order, setOrder] = useState("");
  const {
    pro_loading,
    products: { data },
  } = useSelector((store) => store.products);
  const handle = (e) => {
    if (e.target.value === "asc") {
      setFilter("price");
      setOrder("asc");
    } else if (e.target.value === "desc") {
      setFilter("price");
      setOrder("desc");
    } else {
      setFilter("discount");
      setOrder("desc");
    }
  };
  console.log(keyword, query, page, categories, subcategory);
  useEffect(() => {
    if (prevQuery !== query) {
      setPage(1);
    }
    dispatch(getProduct(keyword, query, page, categories, subcategory));
    setPrevQuery(query);
  }, [dispatch, keyword, query, page, prevQuery, categories, subcategory]);

  useEffect(() => {
    dispatch(sortProducts(filter, order, shape));
  }, [shape, filter, order, dispatch]);

  return (
    <div className="productCon">
      <MetaData title={"All customized products | JustPrintKaro"} />
      <div className="proContainer">
        <p className="proNavigation">
          <span>Home /</span> {query ? query : "Products"}
        </p>
        <p className="proCount">
          Products - <span>{data?.productLength} items</span>
        </p>
      </div>
      <div className="proBox">
        <div className="proFilters">
          <div>
            <select onChange={handle}>
              <option value="">Sort by</option>
              <option value="discount">Better Discount</option>
              <option value="asc">Price low to high</option>
              <option value="desc">Price high to low</option>
            </select>
          </div>
          <div>
            <select onChange={(e) => setShape(e.target.value)}>
              <option value="">Select Shape</option>
              <option value="rectangular">Rectangular</option>
              <option value="square">Square</option>
              <option value="circular">Circular</option>
              <option value="a4">A4</option>
              <option value="large">Large</option>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
            </select>
          </div>
        </div>
        {pro_loading ? (
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
        ) : (
          <div className="proGrid">
            {data && data.products?.length < 1 ? (
              <NoProducts />
            ) : (
              data.products?.map((pro, i) => {
                return <ProComp product={pro} key={i} />;
              })
            )}
          </div>
        )}
      </div>
      <div className="pagination">
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Prev
        </button>
        <button>{page}</button>
        <button
          disabled={
            page === Math.ceil(data?.totalPage) || data?.products.length < 20
          }
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Product;
