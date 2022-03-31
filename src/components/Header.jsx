import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dark_logo from '../images/logo-dark-bg.svg';
import { Link } from "react-router-dom";


function Header() {
  const [isActive, setActive] = useState("false");

//choose the screen size 
const ToggleClass = () => {
  if (window.innerWidth < 767) {
    setActive(!isActive);
  } else {
    setActive("false");
  }
}



  return (
    <header className="main_header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-3">
            <span onClick={ToggleClass} className="menu_open"><FontAwesomeIcon icon={['fas', 'bars']} /></span>
            <Link to='/laundry2' className="logo"><img src={Dark_logo} alt="" className="img-fluid" /></Link>
            <span className="mobile_phone"><FontAwesomeIcon icon={['fas', 'phone']} /></span>
          </div>
          <div className="col-md-9 text-right offcanvas_menu">
            <div className={`slide ${isActive ? "" : "active"}`}>
              <span onClick={ToggleClass} className="menu_close"><FontAwesomeIcon icon={['fas', 'times']} /></span>
              <ul className="list-inline">
                <li className="list-inline-item active"><Link to="/laundry2/howitworks" onClick={ToggleClass}>How it works</Link></li>
                <li className="list-inline-item"><Link to="/laundry2/help" onClick={ToggleClass}>FAQ</Link></li>
                <li className="list-inline-item"><a href="tel:(416) 984-4659" onClick={ToggleClass}>(416) 984-4659</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;