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
          <li><a href='#'>Delhi</a></li>
          <li><a href='#'>Mumbai</a></li>
          <li><a href='#'>Kolkata</a></li>
          <li><a href='#'>Gurgaon</a></li>
          <li><a href='#'>Bengaluru</a></li>
          <li><a href='#'>Indore</a></li>
          <li><a href='#'>Goa</a></li>
          <li><a href='#'>Noida</a></li>
          <li><a href='#'>Bhopal</a></li>
          <li><a href='#'>Gwalior</a></li>
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
