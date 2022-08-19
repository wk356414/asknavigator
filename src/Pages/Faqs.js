import React, { Fragment, Component } from 'react';
// import fontawesome from '@fortawesome/fontawesome'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
            <div class="accordion" id="accordionExample">
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  What is Packers Bazar?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                    <strong>Packers Bazar</strong> is one of the greatest packers and movers company in India. We carry out migrations across India in a secure and safe manner. Packers Bazar is the best option for you whether you're looking to move or relocate your household, vehicles, or any other item. In addition to being a reputable moving business, Packers Bazar is also reasonably priced.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  How Packers Bazar Works?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                  As a Packers and movers service provider we pack and move your belongings including furniture, suitcases, artifacts, vehicles and other items , safely. This helps to ease out the moving process as we are your one stop solution for relocating solutions. Once we get your contact number we get back to you as early as possible and make sure we close the deal in your budget and start working.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Do Packers Bazar Unpack, as well?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                  Yes, we do unpack your items depending upon the requirements and budget you have. We are trained and know how to pack and unpack every type of household goods, vehicle and any other items.
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="headingfour">
                  <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                  How Packers Bazar cost are calculated?
                  </button>
                </h2>
                <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                  <div class="accordion-body">
                  The cost of moving is based on the luggage and distance that must be travelled between two locations. For intercity moving, the standard rate for packers & movers is between Rs 15,000 and Rs 40,000.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-sm-6'>
          <img width="100%" src={faq} alt="loading..." />
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
