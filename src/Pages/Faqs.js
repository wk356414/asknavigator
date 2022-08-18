import React, { Fragment, Component } from 'react';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from './Common/Header';
import Footer from './Common/Footer';
import faq from "../assets/img/faq.png";

export default class Faqs extends Component {
  render() {
    return (
      <Fragment>
      {/* header */}
        <Header />
      {/* header */}

      <div className='container-fluid'>
        <div className='row'>
          <div className='about'>
          <h2>FAQs</h2>
          </div>
        </div>
      </div>

      <div className='container about-para about-faq'>
        <div className='row'>
          <div className='col-sm-6'>
            <h3>FAQs</h3>
            <ul>
              <li><FontAwesomeIcon icon="fa-solid fa-angle-right" /> What is Packerbazar?</li>
              <li><FontAwesomeIcon icon="fa-solid fa-angle-right" /> How Packerbazar Work?</li>
              <li><FontAwesomeIcon icon="fa-solid fa-angle-right" /> Which one best from all Recommendations?</li>
              <li><FontAwesomeIcon icon="fa-solid fa-angle-right" /> What you will do with My number?</li>
            </ul>
          </div>
          <div className='col-sm-6'>
          <img width="100%" src={faq} />
          </div>
        </div>
      </div>
      

      


      {/* footer */}
        <Footer/>
      {/* footer */}
      </Fragment>
    )
  }
}
