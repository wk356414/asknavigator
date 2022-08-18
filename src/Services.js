import React, { Fragment, Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import loader from "./service.png";

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
          <div className='col-sm-6'>
            <img width="100%" src={loader} />
          </div>
          <div className='col-sm-6'>
            <h3> Movers and Packers</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.            </p>
          </div>
          <div className='spac'></div>
          <div className='col-sm-6'>
            <h3> Movers and Packers</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.            </p>
          </div>
          <div className='col-sm-6'>
            <img width="100%" src={loader} />
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
