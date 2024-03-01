import "./products.css";
import { Link } from "react-router-dom";
import { IoIosAdd } from "react-icons/io";
function product(props) {
  const { product, addProduct } = props;

  const handleAddClick = () => {
    addProduct({
      image: product.image,
      title: product.title,
      price: product.price,
    });
  };

  return (
    <div className="store-card">
      <img
        src={product.image}
        className=""
        alt={product.title}
        style={{ width: "100%" }}
      />
      <div className="store-box">
        <h5 className="store-title">{product.title}</h5>
        <p
          className="store-price"
          style={{ color: "#000", fontWeight: "bold", fontSize: "25px" }}
        >
          ${product.price}
        </p>
      </div>

      <IoIosAdd
        style={{
          fontSize: "25px",
          color: "#0d8af0",
          position: "absolute",
          bottom: "10px",
          left: "-2px",
        }}
      />
      <div className="store-Add">
        <button className="" onClick={handleAddClick}>
          Add
        </button>
      </div>

      <div className="store-details">
        <Link className=" " to={`/products/${product.id}`}>
          Details
        </Link>
      </div>
    </div>
  );
}

export default product;
