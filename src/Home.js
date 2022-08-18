import Header from './Header';
import Footer from './Footer';
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
                        <div className='radeos'>
                            <input type='checkbox' name='text' className='checkbox-round'  />
                            <FontAwesomeIcon icon="fa-box" />
                            <p>Other</p>
                        </div>
                        <div className='radeos'>
                            <input type='checkbox' name='text' className='checkbox-round'  />
                            <FontAwesomeIcon icon="fa-car" />
                            <p>Vehilcle</p>
                        </div>
                        <div className='radeos'>
                            <input type='checkbox' name='text' className='checkbox-round'  />
                            <FontAwesomeIcon icon="fa-dolly" />
                            <p>Some Items</p>
                        </div>
                        <div className='radeos'>
                            <input type='checkbox' name='text' className='checkbox-round'  />
                            <FontAwesomeIcon icon="fa-home" />
                            <p>Full Household</p>
                        </div>
                        {/*<div className='main-header-down'>
                        <p>Tip: Try Above Options <i className="fa-solid fa-arrow-turn-up"></i></p>
                        <h6 className='shield'> <i className="fa-solid fa-shield-halved"></i></h6>
                        <h5><i id='xig' className="fa-solid fa-arrow-trend-up"></i> Trusted By 4859 Users & Rated 4.8 Star </h5>
                        </div>*/}
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
