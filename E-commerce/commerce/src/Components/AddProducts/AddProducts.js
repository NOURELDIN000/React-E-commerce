/* eslint-disable no-undef */
import { useLocation } from "react-router-dom";
import "./AddProducts.css";
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";

const AddProducts = ({ setProductCount }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const title = queryParams.get("title");
  const price = queryParams.get("price");
  const image = queryParams.get("image");

  const [addedProducts, setAddedProducts] = useState([]);

  const isAddProductPage = location.pathname === "/add";

  let totalPrice = 0;

  useEffect(() => {
    const storedProducts =
      JSON.parse(localStorage.getItem("addedProducts")) || [];
    setAddedProducts(storedProducts);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (image && title && price) {
      if (image && title && price && isAddProductPage) {
        const newProduct = { image, title, price };
        // const updatedProducts = [...addedProducts];
        if (
          !addedProducts.some(
            (product) =>
              product.title === title &&
              product.price === price &&
              product.image === image
          )
        ) {
          // updatedProducts.push(newProduct);
          // setAddedProducts(updatedProducts);
          // localStorage.setItem('addedProducts', JSON.stringify(updatedProducts));
          // return updatedProducts;
          setAddedProducts((prevProducts) => {
            const updatedProducts = [...prevProducts, newProduct];
            localStorage.setItem(
              "addedProducts",
              JSON.stringify(updatedProducts)
            );

            return updatedProducts;
          });

          // setProductCount(prevCount => prevCount + 1);
        }
      }

      // Clear URL parameters after adding product
      window.history.replaceState({}, document.title, "/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image, title, price, isAddProductPage]);

  useEffect(() => {
    setProductCount(addedProducts.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [addedProducts]);

  function handleDelete(index) {
    const updatedProducts = addedProducts.filter((_, i) => i !== index);
    setAddedProducts(updatedProducts);
    localStorage.setItem("addedProducts", JSON.stringify(updatedProducts));
    setProductCount((prevCount) => prevCount - 1);
    localStorage.setItem("addedProducts", JSON.stringify(updatedProducts));
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">image</th>
            <th scope="col">Title</th>
            <th scope="col">Price</th>
            <th scope="col"></th>
          </tr>
        </thead>

        <tbody>
          {/* <tr>
              <th scope="row">#</th>
              <td>{title}</td>
              <td>{price}</td>
            </tr> */}

          {addedProducts &&
            addedProducts.map((product, index) => {
              totalPrice += +product.price;

              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={product.image} alt={product.image} />
                  </td>
                  <td>{product.title}</td>
                  <td className="fw-bold">${product.price}</td>
                  <td>
                    <button onClick={() => handleDelete(index)}>
                      <MdDelete />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      <h2 style={{ textAlign: "center", color: "#0d8af0" }}>
        Total price:${totalPrice.toFixed(2)}{" "}
      </h2>
    </div>
  );
};

export default AddProducts;
