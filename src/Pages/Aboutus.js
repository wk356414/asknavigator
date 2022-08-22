import React, { Fragment, Component } from 'react'
import Header from './Common/Header';
import Footer from './Common/Footer';
import loader from "../assets/img/aboutus.jpg";



export default class Aboutus extends Component {
  render() {
    return (

      <Fragment>
      {/* header */}
        <Header />
      {/* header */}

      <div className='container-fluid'>
        <div className='row'>
          <div className='about'>
          <h2>About us</h2>
          </div>
        </div>
      </div>

      <div className='container about-para'>
        <div className='row'>
          <div className='col-sm-12'>
            <p>Are you planning on moving Households, Vehicles or any other item soon and do not want the fuss of packing? Searching for Movers and Packers? Looking for an affordable Movers and Packers? Packers Bazar is the solution. </p>
            <p>Packers Bazar is one of the best moving companies in India. We conduct moves throughout India safely and with proper security. If you are planning for moving/relocate your Household, Vehicles or any other item Packers Bazar is the right choice for you. Packers Bazar is not only a trusted moving company but also a budget-friendly moving company. </p>
          </div>
          <div className='col-sm-12'>
            <img width="100%" src={loader} alt="loading..."/>
          </div>
        </div>
      </div>
      <div className='spac'></div>
      <div className='container about-para'>
        <div className='row'>
          <div className='col-sm-12'>
          <p>We are a trusted and reliable packers and movers company in India. Do you have products you love and want to move but just will not fit in the car? Do not worry, Packers Bazar is here to help. </p>
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
