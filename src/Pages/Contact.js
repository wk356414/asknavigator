import React, { Fragment, Component } from 'react';
import Header from './Common/Header';
import Footer from './Common/Footer';
import contact from "../assets/img/contact.png";

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
      {/* header */}
        <Header />
      {/* header */}

      <div className='container-fluid'>
        <div className='row'>
          <div className='about'>
          <h2>Contact</h2>
          </div>
        </div>
      </div>

      <div className='container contact'>
        <div className='row'>
          <div className='col-sm-6'>
            <img alt='contact' width="100%" src={contact} />
          </div>
          <div className='col-sm-6'>
            <h3>IMMEDIATELY REQUIRE A HOUSE MOVER? <br /> FOR A QUOTE, CONTACT US RIGHT AWAY.</h3>
            <p>Packers Bazar can handle all the worry and difficulty of packing boxes and moving, whether you are going to relocate homes, cars, or any other thing.</p>
            <form>
              <div className="mb-3">
                <label for="name" className="form-label">Name <span id='veg'>*</span></label>
                <input type="text" className="form-control" name='name' placeholder='Name'  required/>
              </div>

              <div className="mb-3">
                <label for="name" className="form-label">Where would you like to get response?</label>
                <select name='responce' className='form-control'>
                  <option value='Where would you like to get response?'>Where would you like to get response?</option>
                  <option value="Phone">Phone</option>
                  <option value="Email">Email</option>
                </select>
              </div>

              <div className="mb-3">
                <label for="email" className="form-label">Email  <span id='veg'>*</span></label>
                <input type="email" className="form-control"  name='email' placeholder='Email' required />
              </div>

              <div className="mb-3">
                <label for="number" className="form-label">Number  <span id='veg'>*</span></label>
                <input type="text" className="form-control"  name='number' placeholder='Contact Number' required />
              </div>

              <div className="mb-3">
                <label for="" className="form-label">Comment or Message <span>*</span></label>
                <textarea cols="6" rows="3" className="form-control"></textarea>
              </div>
            
              <button type="submit" className=" query">Send Query</button>
            </form>
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
