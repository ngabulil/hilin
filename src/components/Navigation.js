import { useState, React, useRef } from "react";
import "../style/style.css";
import Logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../config/AuthContext";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
import usser from "../assets/usser.png";
import { ToastContainer, toast } from "react-toastify";

const Navigation = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [open, setOpen] = useState(false);
  const menu = useRef();
  const profile = useRef();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogout = async () => {
    try {
      await logOut();
      toast.success("Logout Success !", {
        autoClose: 2000,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  window.addEventListener("click", (e) => {
    if (e.target !== menu.current && e.target !== profile.current) {
      setOpen(false);
    }
  });

  return (
    <div>
      <nav className={toggle ? "navbar expanded" : "navbar"}>
        <div className="hamburger" onClick={handleToggle}>
          {toggle ? <FaTimes></FaTimes> : <GiHamburgerMenu></GiHamburgerMenu>}
        </div>
        <Link to="/">
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
        </Link>
        <div className="menu">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/article">Article</Link>
            </li>
            <li>
              <Link to="/mentaltest">Mental test</Link>
            </li>
            <li>
              <Link to="/konsultasi">Consultation</Link>
            </li>
          </ul>
        </div>
        {user?.email ? (
          <div className="logout-container">
            <img
              src={usser}
              alt="hah"
              className="usser"
              ref={profile}
              onClick={() => setOpen(!open)}
            ></img>
            {open && (
              <div ref={menu} className="dropdown">
                <ul>
                  <Link to='/detailpesanan'><li>Pesanan Saya</li></Link>
                  <li className="li-logout" onClick={handleLogout}>
                    Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="login">
            <Link to="/login">
              <button className="btn-login">Login</button>
            </Link>
          </div>
        )}
      </nav>
      <ToastContainer />
    </div>
  );
};

export default Navigation;
