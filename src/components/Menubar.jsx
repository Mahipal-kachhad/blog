import { Link } from "react-router-dom";
import logo from "../images/logo.svg";
import { IoSearch } from "react-icons/io5";
import { BsHandbag } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { useState } from "react";

const Menubar = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="d-flex px-5 menubar border border-1 border-black">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <ul className="menu-items">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/products"}>Products</Link>
          </li>
          <li>
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/fAQ"}>FAQ</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <div className="position-relative">
          <input
            type="text"
            id="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <IoSearch className="search-icon" />
        </div>
      </div>
      <div className="d-flex gap-4 nav-icons">
        <BsHandbag />
        <FaRegHeart />
        <FiUser />
      </div>
    </div>
  );
};

export default Menubar;
