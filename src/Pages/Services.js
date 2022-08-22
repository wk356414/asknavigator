import React, { Fragment, Component } from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import loader from "../assets/img/service.jpg";

export default class Services extends Component {
  render() {
    return (
      <Fragment>
      {/* header */}
        <Header />
      {/* header */}

      <div className='container-fluid'>
        <div className='row'>
          <div className='about'>
          <h2>Services</h2>
          </div>
        </div>
      </div>

      <div className='container about-para'>
        <div className='row'>
          
          <div className='col-sm-12'>
            <h3>Movers and Packers</h3>
            <p>When it comes to assisting individuals with moving households, vehicles, or any other item, we are experts. We assist clients all around India with their moves, making sure that everything is securely packed. Many customers have distinct needs, and our specialised moving experts offer a one-on-one, individualised service, assisting you with every aspect of your relocation.</p>  
          </div>
          <div className='col-sm-12'>
            <img width="100%" src={loader} alt="loading..."/>
          </div>
          <div className='spac'></div>
          <div className='col-sm-12'>
          <p>Contact Packers Bazar if you need a firm to deliver something to your consumers or if you need a product delivered as quickly as possible to your home. We move households, vehicles, or any other item safely within your budget.</p>
            <p>As soon as you hire us, you can relax knowing that you are in the capable hands of our highly qualified staff. In order to guarantee that our clients receive a trustworthy service at a reasonable cost, our team of highly qualified experts is passionate about what they do.</p>
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
