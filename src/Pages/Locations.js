import React, { Fragment, Component } from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';

export default class Locations extends Component {
  render() {
    return (
      <Fragment>
      {/* header */}
        <Header />
      {/* header */}

      <div className='container-fluid'>
        <div className='row'>
          <div className='about'>
          <h2>Locations</h2>
          </div>
        </div>
      </div>

      <div className='container '>
        <div className='row'>
          <center>
          <div className='lcoations'>
          <li><a href={() => false}>Delhi</a></li>
          <li><a href={() => false}>Mumbai</a></li>
          <li><a href={() => false}>Kolkata</a></li>
          <li><a href={() => false}>Gurgaon</a></li>
          <li><a href={() => false}>Bengaluru</a></li>
          <li><a href={() => false}>Indore</a></li>
          <li><a href={() => false}>Goa</a></li>
          <li><a href={() => false}>Noida</a></li>
          <li><a href={() => false}>Bhopal</a></li>
          <li><a href={() => false}>Gwalior</a></li>
        </div>
          </center>
        </div>
      </div>
      

      


      {/* footer */}
        <Footer/>
      {/* footer */}
      </Fragment>
    )
  }
}
