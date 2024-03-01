import './Navbar.css';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";

function Navbar( {productCount}){
    return(
        <>
        <nav className="navbar navbar-expand-lg sticky-top d-flex align-items-center ">
  <div className="container">
    <a className="navbar-brand" href="/#">Sparklify</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/"><FaHome/></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to="/add" >
            <div style={{position:'relative' }} >
              
            <HiShoppingCart   />
            {productCount > 0 &&  <span className=" num-span  ">{productCount}</span>}
            </div>
          </Link>
        </li>
      </ul>
      
    </div>
  </div>
</nav>
        </>
    );
}


export default Navbar;
