import Header from './Common/Header';
import Footer from './Common/Footer';
import React, { Component, Fragment } from 'react'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faCrosshairs} from '@fortawesome/fontawesome-free-solid'
import Autocomplete from "react-google-autocomplete";


fontawesome.library.add(faCheckSquare, faCoffee, faCrosshairs);

export default class Home extends Component {
    constructor(props){
        super(props)
        this.Next_one = this.Next_one.bind(this);
        this.state = {

        }
    }

    Next_one() {
        let Form1 = document.getElementById('Form1')
        let Form2 = document.getElementById('Form2')
        let Progress = document.getElementById('Progress')
        console.log(Form1)

        Form1.style.left = '-450px';
        Form2.style.left = '40px';
        Progress.style.width='240px';			
    }
    Next_two = () =>{
        let Form3 = document.getElementById('Form3')
        let Form2 = document.getElementById('Form2')
        let Progress = document.getElementById('Progress')
        
        Form2.style.left = '-450px';
        Form3.style.left = '40px';
        Progress.style.width='360px';
    }
    Back_one = () => {
        let Form1 = document.getElementById('Form1')
        let Form2 = document.getElementById('Form2')
        let Progress = document.getElementById('Progress')
        
        Form1.style.left = '40px';
        Form2.style.left = '450px';
        Progress.style.width='120px';
    }
    Back_two = () => {
        let Form3 = document.getElementById('Form3')
        let Form2 = document.getElementById('Form2')
        let Progress = document.getElementById('Progress')
        
        Form3.style.left = '450px';
        Form2.style.left = '40px';
        Progress.style.width='240px';
    }

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
                                <div className=" main-box-form">
                                <form id="Form1"  >
                                        <h1><FontAwesomeIcon icon={faCrosshairs} /></h1>
                                    <h3 id='heading-pop'>
                                        Choose Your Pickup Location
                                    </h3>
                                    <Autocomplete
                                          style={{ width: "90%", zIndex:999 }}
                                        apiKey={'AIzaSyBDA4IeNM1O1HNxI2y-5WwcONyv1TwdZLc'}
                                        onPlaceSelected={(place) => console.log(place)}
                                    />
                                    <div className="btn-box">
                                        <button type="button" id="Next1" onClick={this.Next_one}>NEXT</button>
                                    </div>
                                </form>

                                <form id="Form2">
                                    <h3 id='heading-pop'>SOCIAL FROM</h3>
                                    <input type="text" placeholder="Medium" required />
                                    <input type="text" placeholder="Github"  />
                                    <input type="text" placeholder="linkdin"  />

                                    <div className="btn-box">
                                        <button type="button" id="Back1" onClick={this.Back_one}>BACK</button>
                                        <button type="button" id="Next2" onClick={this.Next_two}>NEXT</button>	
                                    </div>
                                </form>

                                <form id="Form3">
                                    <h3 id='heading-pop'>PERSONAL INFO</h3>
                                    <input type="text" placeholder="First name" required />
                                    <input type="text" placeholder="Last name" required />
                                    <input type="text" placeholder="mo number" required />

                                    <div className="btn-box">
                                        <button type="button" id="Back2" onClick={this.Back_two}>BACK</button>
                                        <button type="submit" >SUBMIT</button>
                                    </div>
                                </form>

                                <div className="step-row">
                                <div id="Progress"></div>
                                    <div className="step-col"><small>Step 1</small></div>
                                    <div className="step-col"><small>Step 2</small></div>
                                    <div className="step-col"><small>Step 3</small></div>
                                </div>


                            </div>
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
