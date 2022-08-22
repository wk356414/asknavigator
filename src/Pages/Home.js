import Header from './Common/Header';
import Footer from './Common/Footer';
import React, { Component, Fragment } from 'react'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faCrosshairs, faLocationArrow,faCalendar, faPhone, faQuestion, faList} from '@fortawesome/fontawesome-free-solid'
import Autocomplete from "react-google-autocomplete";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "react-datepicker/src/stylesheets/datepicker.scss";

fontawesome.library.add(faCheckSquare, faCoffee, faCrosshairs, faLocationArrow);

export default class Home extends Component {
    constructor(props){
        super(props)
        this.Next_one = this.Next_one.bind(this);
        this.state = {
            current_date : new Date()
        }
    }

    Next_one() {
        let Form1 = document.getElementById('Form1')
        let Form2 = document.getElementById('Form2')
        let Progress = document.getElementById('Progress')
        console.log(Form1)

        Form1.style.left = '-450px';
        Form2.style.left = '40px';
        Progress.style.width='130px';			
    }
    Next_two = () =>{
        let Form3 = document.getElementById('Form3')
        let Form2 = document.getElementById('Form2')
        let Progress = document.getElementById('Progress')
        
        Form2.style.left = '-450px';
        Form3.style.left = '40px';
        Progress.style.width='195px';
    }

    Next_three = () =>{
        let Form4 = document.getElementById('Form4')
        let Form3 = document.getElementById('Form3')
        let Progress = document.getElementById('Progress')
        
        Form3.style.left = '-450px';
        Form4.style.left = '40px';
        Progress.style.width='270px';
    }

    Next_foure = () =>{
        let Form5 = document.getElementById('Form5')
        let Form4 = document.getElementById('Form4')
        let Progress = document.getElementById('Progress')
        
        Form5.style.left = '40px';
        Form4.style.left = '-450px';
        Progress.style.width='360px';
    }
    
    Back_one = () => {
        let Form1 = document.getElementById('Form1')
        let Form2 = document.getElementById('Form2')
        let Progress = document.getElementById('Progress')
        
        Form1.style.left = '40px';
        Form2.style.left = '450px';
        Progress.style.width='65px';
    }
    Back_two = () => {
        let Form3 = document.getElementById('Form3')
        let Form2 = document.getElementById('Form2')
        let Progress = document.getElementById('Progress')
        
        Form3.style.left = '450px';
        Form2.style.left = '40px';
        Progress.style.width='130px';
    }
    Back_three = () => {
        let Form4 = document.getElementById('Form4')
        let Form3 = document.getElementById('Form3')
        let Progress = document.getElementById('Progress')
        
        Form4.style.left = '450px';
        Form3.style.left = '40px';
        Progress.style.width='195px';
    }
    Back_four = () => {
        let Form5 = document.getElementById('Form5')
        let Form4 = document.getElementById('Form4')
        let Progress = document.getElementById('Progress')
        
        Form5.style.left = '450px';
        Form4.style.left = '40px';
        Progress.style.width='270px';
    }

    handleDateChange=()=>{

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
                        {/*Modal*/}
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-scrollable">
                                <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title model_title"  id="staticBackdropLabel">Packerbazar</h5>
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

                                    <h1><FontAwesomeIcon icon={faLocationArrow} /></h1>

                                    <h3 id='heading-pop'>Where do you want to move?</h3>
                                    <Autocomplete
                                          style={{ width: "90%", zIndex:999 }}
                                        apiKey={'AIzaSyBDA4IeNM1O1HNxI2y-5WwcONyv1TwdZLc'}
                                        onPlaceSelected={(place) => console.log(place)}
                                    />

                                    <div className="btn-box">
                                        <button type="button" id="Back1" onClick={this.Back_one}>BACK</button>
                                        <button type="button" id="Next2" onClick={this.Next_two}>NEXT</button>	
                                    </div>
                                </form>

                                <form id="Form3">
                                    <h1><FontAwesomeIcon icon={faCalendar} /></h1>
                                    <h3 id='heading-pop'>When do you want to move?</h3>
                                    <input type="date" value = "date()" required />
                                    <input type="text" placeholder="Enter Name" required />

                                    <div className="btn-box">
                                        <button type="button" id="Back2" onClick={this.Back_two}>BACK</button>
                                        <button type="button" id="Next3" onClick={this.Next_three}>NEXT</button>
                                        
                                    </div>
                                </form>

                                <form id="Form4">
                                    <h1><FontAwesomeIcon icon={faPhone} /></h1>  
                                    <h3 id='heading-pop'>How can we contact you</h3>
                                    <input type="" placeholder="Enter Number" required />
                                    <span id='phone'><FontAwesomeIcon icon={faQuestion}/> Why Phone Number is required? </span><br></br>
                                    <span id='confirm'><small>1</small> Confirm Requirement</span><br></br>
                                    <span id='requ'><small>We Will Confirm your Requirement to get better results</small></span><br></br>
                                    <span id='confirm'><small>2</small> Avoid Spam</span><br></br>
                                    <span id='requ'><small>We have to verify that you are a real human & not a bot or spammer.</small></span><br></br>


                                    <div className="btn-box">
                                        <button type="button" id="Back3" onClick={this.Back_three}>BACK</button>
                                        <button type="button" id="Next4" onClick={this.Next_foure}>NEXT</button>
                                        
                                    </div>
                                </form>

                                <form id="Form5">
                                    <h1><FontAwesomeIcon icon={faList} /></h1>
                                    <h3 id='heading-pop'>What items are you taking with you?</h3>
                                    <input type="text" placeholder="Item" required />
                                    <h5> Suggestions</h5>


                                    <div className="btn-box">
                                        <button type="button" id="Back4" onClick={this.Back_four}>BACK</button>
                                        <button type='submit' >Get Price Now</button>
                                        
                                    </div>
                                </form>
                                    <div className="step-row">
                                    <div id="Progress"></div>
                                        <div className="step-col"><small>Step 1</small></div>
                                        <div className="step-col"><small>Step 2</small></div>
                                        <div className="step-col"><small>Step 3</small></div>
                                        <div className="step-col"><small>Step 4</small></div>
                                        <div className="step-col"><small>Step 5</small></div>
                                    </div>
                            </div>
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

        <div className='container home-text'>
            <div className='row'>
            <p>Are you planning on moving Households, Vehicles or any other item soon and do not want the fuss of packing? Searching for Movers and Packers? Looking for an affordable Movers and Packers? Packers Bazar is the solution.</p>
            </div>
        </div>

        <Footer />
    </Fragment>
    )
  }
}
