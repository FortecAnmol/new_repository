
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Light_logo from '../images/logo-light-bg.svg';
import { Link } from "react-router-dom";

function HomeFooter() {
  const [data, setData] = useState("Test");
  const getChckeboxValue = (event) =>{
     const checkValue = event.target.value;
     setData(event.target.value)
  }


    return (
      <footer className="main_footer">
        <div className="container-fluid">
        <Link to='/laundry2' className="logo footer_logo"><img src={Light_logo} alt="" /></Link>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-7 col-7">
          <div className="widget_title">REFERENCE</div>
            <ul className="footer-menu pl-0">
                <li><Link to="/laundry2/howitworks">How it Works</Link></li>
                <li><Link to="/laundry2/help">FAQs</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-5 col-5">
          <div className="widget_title">SOCIALS</div>
            <ul className="footer-menu pl-0">
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-7 col-7">
           <div className="widget_title">OFFICE</div>
            <p>25 Telegram Mews, <br/>Toronto, ON, M5V 3Z1 <br/>(416) 984-4659</p>
          </div>
        </div>
        <div className="d-flex justify-content-between copyright align-items-center">
        <div className="copyright_text">© 2022 laundryforclinic, Inc.</div>
        <ul className="social_menu list-inline mb-0">
          <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={['fab', 'facebook-square']} /></a></li>
          <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={['fab', 'instagram']} /></a></li>
          <li className="list-inline-item"><a href=""><FontAwesomeIcon icon={['fab', 'twitter']} /></a></li>
        </ul>
        </div>
        </div>
      </footer>
    );
  }
  
  export default HomeFooter;