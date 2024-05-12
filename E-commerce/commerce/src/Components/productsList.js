import "./productList.css";
import { useEffect, useState } from "react";

import Products from "./products";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";

function ProductsList() {
  const api_url = "https://fakestoreapi.com/products";

  const [products, setProducts] = useState([]);
  const [catigories, setCatigories] = useState([]);
  const [loading, setLoading] = useState(false);

  const [addedProducts, setAddedProducts] = useState([]);

  const navigate = useNavigate();

  const getAllProducts = () => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getCatigores = () => {
    fetch(`${api_url}/categories`)
      .then((response) => response.json())
      .then((data) => setCatigories(data))
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const filterCategory = (catName) => {
    fetch(`${api_url}/category/${catName}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  useEffect(() => {
    getAllProducts();
    getCatigores();
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  const handleAddClick = (product) => {
    setAddedProducts([...addedProducts, product]);

    // navigate('/add')
    navigate(
      `/add?title=${encodeURIComponent(
        product.title
      )}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(
        product.image
      )}`
    );
  };

  return (
    <>
      <div style={{ marginTop: "100px" }}>
        <div className="mt-3  text-center fw-bold fst-italic">
          <h2
            style={{
              color: "#0d8af0",
              borderTop: "2px solid #0d8af0 ",
              borderBottom: "2px solid #0d8af0 ",
              display: "inline-block",
              padding: "1rem 0",
              letterSpacing: "1px",
            }}
          >
            Our Products
          </h2>
        </div>

        <div
          className="container text-center"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        >
          <div className=" row  ">
            <div className=" col-sm-12 col-md-4 col-lg  ">
              <button
                className="cat-btn"
                onClick={() => {
                  getAllProducts();
                }}
              >
                All
              </button>
            </div>
            {catigories.map((cat) => {
              return (
                <>
                  <div className="col-sm-12  col-md-4 col-lg">
                    <button
                      key={cat}
                      className=" cat-btn"
                      onClick={() => {
                        filterCategory(cat);
                      }}
                    >
                      {cat}
                    </button>
                  </div>
                </>
              );
            })}
          </div>
        </div>

        <div className="container">
          <div className="row">
            {products.map((product) => {
              return (
                <div
                  className="col-md-6  col-lg-4"
                  key={product.id}
                  style={{ marginBottom: "50px" }}
                >
                  <Products product={product} addProduct={handleAddClick} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ProductsList;
