import { useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
function Navbar() {
  const [open,setOpen] = useState(false)
  return (
    <nav>
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" />
          <span>esate</span>
        </Link>
        <Link to="/">HOME</Link>
        <Link to="/">about</Link>
        <Link to="/">contact</Link>
        <Link to="/">agents</Link>
      </div>

      <div className="right">
        <a href="/">signin</a>
        <a href="/" className="register">
          signup
        </a>
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">home</a>
          <a href="/">about</a>
          <a href="/">contact</a>
          <a href="/">agents</a>
          <a href="/">sign in</a>
          <a href="/">sign up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
