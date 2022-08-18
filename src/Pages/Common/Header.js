import React, { Component, Fragment } from 'react'
import { Link } from "react-router-dom";
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'
import pic from "../../assets/img/logo.png";

export default class Header extends Component {
  render() {
    return (
      <Fragment>

        <div className='container-fluid header'>
          <div className='row'>
            <div className="col-sm-4 nav">
                <div className="wrapper">
                <input type="checkbox" id="btn" hidden />
                <label htmlFor="btn" className="menu-btn">
                  <i className="fas fa-bars"></i>
                  <i className="fas fa-times"></i>
                </label>
                <nav id="sidebar">
                  <div className="title">PACKERBAZAR</div>
                  <ul className="list-items">
                    <li><Link to="/"><FontAwesomeIcon icon="fa-solid fa-user" />Home</Link></li>
                    <li><Link to={"/service"}><i className="fas fa-sliders-h"></i>Services</Link></li>
                    <li><Link to={"/contact"}><i className="fas fa-user"></i>Contact us</Link></li>
                    <li><Link to={"/faqs"}><i className="fas fa-cog"></i>FAQs</Link></li>
                    <li><Link to={"/aboutus"}><i className="fas fa-address-book"></i>About us </Link></li>
                    <li><Link to={"/location"}><i className="fas fa-user"></i>Locations</Link></li>
                    <li><a href="tel:+917988174873"><FontAwesomeIcon icon="fa-solid fa-phone" />Call now</a></li>
                    <div className="icons">
                      <a href="#"><i className="fab fa-facebook-f"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fab fa-github"></i></a>
                      <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-sm-4 logo">
              <center><img src={pic} /></center>
            </div>
            <div className="col-sm-4">
              <h1 className='number'><a href="tel:+917988174873">Call Now</a></h1>
            </div>
          </div>
        </div>
      </Fragment>
    )
  }
}
