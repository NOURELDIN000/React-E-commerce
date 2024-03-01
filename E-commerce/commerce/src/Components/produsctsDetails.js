import "./productsDetails.css";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import Footer from "./Footer/Footer";

function ProductsDetails() {
  const params = useParams();

  const api_url = "https://fakestoreapi.com/products";

  const [product, setProducts] = useState([]);

  useEffect(
    () => {
      fetch(`${api_url}/${params.productId}`)
        .then((res) => res.json())
        .then((data) => setProducts(data));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <div className="">
        <div className="container mt-5 mb-5 ">
          <div className="row ">
            <div className="store-card-details">
              <div className="store-card  ">
                <img
                  src={product.image}
                  className=""
                  alt={product.title}
                  style={{ width: "100%" }}
                />
                <div className="store-box">
                  <h5 className="store-title">{product.title}</h5>
                  <p className="store-description">{product.description}</p>
                </div>
                <div className="store-details">
                  <Link className=" " to={"/"}>
                    Back
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductsDetails;
