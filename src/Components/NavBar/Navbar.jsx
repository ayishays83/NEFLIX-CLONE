import React from 'react';
import "./Navbar.css";
import { useEffect, useState } from 'react';
function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    }

  }, [])
  return (
    <div className={`navbar ${show && "nav__black"}`}>
      <img className="nav_logo" src="http://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="NEFLIX" />
      <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Avatar" />
    </div>
  )
}

export default Navbar