import Header from './Common/Header';
import Footer from './Common/Footer';
import React, { Component, Fragment } from 'react'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid'

fontawesome.library.add(faCheckSquare, faCoffee);

export default class Home extends Component {


  render() {
    return (
    <Fragment>
        <Header />
       <div className='main-page'>
         <div className='inner-main'>
        
            <h2>Welcome to Packerbazar.com</h2>
            <div className='line'></div>
            <h1>What You Want to Move?</h1>
            
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2'></div>
                    <div className='col-sm-8'>
                        <div className='radeos' type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <input type='checkbox' name='text' className='checkbox-round'  />
                            <FontAwesomeIcon icon="fa-home" />
                            <p>Full Household</p>
                        </div>
                        
                        <div className='radeos' type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <input type='checkbox' name='text' className='checkbox-round'  />
                            <FontAwesomeIcon icon="fa-dolly" />
                            <p>Some Items</p>
                        </div>
                        <div className='radeos' type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <input type='checkbox' name='text' className='checkbox-round'  />
                            <FontAwesomeIcon icon="fa-car" />
                            <p>Vehilcle</p>
                        </div>
                        <div className='radeos' type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <input type='checkbox'  name='text' className='checkbox-round'  />
                            <FontAwesomeIcon icon="fa-box" />
                            <p>Other</p>
                        </div>
                            <p>Are you planning on moving Households, Vehicles or any other item soon and do not want the fuss of packing? Searching for Movers and Packers? Looking for an affordable Movers and Packers? Packers Bazar is the solution.</p>
                        {/*Modal*/}
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    body part
                                </div>
                                <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Understood</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2'></div>
                </div>
            </div>
         </div>
       </div>
        <Footer />
    </Fragment>
    )
  }
}
