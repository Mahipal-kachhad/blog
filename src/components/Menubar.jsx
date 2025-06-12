import { Link } from "react-router-dom";
import logo from "../images/logo.svg"
import { IoSearch } from "react-icons/io5";

const Menubar = () => {
  return (
    <div className="d-flex mx-5 menubar">
      <div>
          <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="menu-items">
          <li><Link to={'/'}>Home</Link></li>
          <li><Link to={'/products'}>Products</Link></li>
          <li><Link to={'/blog'}>Blog</Link></li>
          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/fAQ'}>FAQ</Link></li>
          <li><Link to={'/contact'}>Contact</Link></li>
        </ul>
      </div>
      <div>
        <div className="position-relative">
          <input type="text" id="search" />
          <IoSearch className="search-icon"/>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
