import Header from './Common/Header';
import Footer from './Common/Footer';
import React, { Component, Fragment } from 'react'
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faCrosshairs, faLocationArrow,faCalendar, faPhone, faQuestion, faList} from '@fortawesome/fontawesome-free-solid'
import Autocomplete from "react-google-autocomplete";
import { WithContext as ReactTags } from 'react-tag-input-latest';
// import { ToastContainer } from "react-toast";
// import axios from 'axios'


fontawesome.library.add(faCheckSquare, faCoffee, faCrosshairs, faLocationArrow);

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            pick_location : '',
            move_location : '',
            client_name : '',
            move_date : '',
            phone_number : '',
            tags : [],
            suggestions: ["Double Bed", "Single Bed", "Mattress", "Seater Sofa", "5 Seater Sofa", "Washing Machine", "Window AC"] 
        }
        this.Next_one = this.Next_one.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }


    Next_one() {
        let Form1 = document.getElementById('Form1')
        let Form2 = document.getElementById('Form2')
        let Progress = document.getElementById('Progress')
        
        if(!this.state.pick_location){
            return alert('please enter pickup location');
        }

        Form1.style.left = '-450px';
        Form2.style.left = '40px';
        Progress.style.width='130px';			
    }

    Next_two = () =>{
        let Form3 = document.getElementById('Form3')
        let Form2 = document.getElementById('Form2')
        let Progress = document.getElementById('Progress')
        if(!this.state.move_location){
            return alert('please enter move location')
        }
        Form2.style.left = '-450px';
        Form3.style.left = '40px';
        Progress.style.width='195px';
    }

    Next_three = () =>{
        let Form4 = document.getElementById('Form4')
        let Form3 = document.getElementById('Form3')
        let Progress = document.getElementById('Progress')
        if (!this.state.client_name) {
            return alert('please enter client name')
        }
        if (!this.state.move_date) {
            return alert('please enter move date')
        }
        Form3.style.left = '-450px';
        Form4.style.left = '40px';
        Progress.style.width='270px';
    }

    Next_foure = () =>{
        let Form5 = document.getElementById('Form5')
        let Form4 = document.getElementById('Form4')
        let Progress = document.getElementById('Progress')
        
        if(!this.state.phone_number){
            return alert('please enter phone number')
        }
        
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
    handleDelete =(i)=> {
        let tags = this.state.tags;
        tags.splice(i, 1);
        this.setState({tags: tags});
    }
    handleAddition =(tag)=> {
        let tags = this.state.tags;
        tags.push({
            id: tags.length + 1,
            text: tag
        });
        this.setState({tags: tags});
    }
    handleDrag =(tag, currPos, newPos)=> {
        let tags = this.state.tags;
 
        // mutate array
        tags.splice(currPos, 1);
        tags.splice(newPos, 0, tag);
 
        // re-render
        this.setState({ tags: tags });
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        let {pick_location,move_date,move_location,phone_number,tags,client_name} = this.state
        // let payload = {
        //     headers: {
        //         "Access-Control-Allow-Origin": "*",
        //         "Content-Type": "application/json"
        //     },
        //     method: 'POST',
        //     body:{
        //             pickup_location: pick_location,
        //             move_locations: move_location,
        //             date: move_date,
        //             name: client_name,
        //             mobile_number: phone_number,
        //             item_taking: tags
        //         }
        //     }


        const postData = {
            headers: {
                "Accept": "*/*",
                "Content-Type": "application/json",
                'token': 'abc'
            },
            method: 'POST',
            body: JSON.stringify({
                pickup_location: pick_location,
                move_locations: move_location,
                date: move_date,
                name: client_name,
                mobile_number: phone_number,
                item_taking: tags
            })
        }

        
        fetch("http://packers.realmakeronline.com/api/v1/create-packers", postData)
            .then((response) =>{
                console.log(response)
                response.json()
            })
            .then((responseJson) => {
                console.log(responseJson)
                
            })
            .catch((err) => {
                console.log(err)
                
            })
    }

  render() {
    // console.log(this.state)
    let tags = this.state.tags;
    let suggestions = this.state.suggestions;
    
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
                                <form onSubmit={e => {           e.preventDefault();         }}   id="Form1"  >
                                    <h1><FontAwesomeIcon icon={faCrosshairs} /></h1>
                                    <h3 id='heading-pop'>
                                        Choose Your Pickup Location
                                    </h3>
                                    <Autocomplete
                                        style={{ width: "90%", zIndex:999 }}
                                        apiKey={'AIzaSyBDA4IeNM1O1HNxI2y-5WwcONyv1TwdZLc'}
                                        inputAutocompleteValue={this.state.pick_location}
                                        onPlaceSelected={(place) => this.setState({pick_location:place.formatted_address})}
                                    />
                                    <div className="btn-box">
                                        <button type="button" id="Next1" onClick={this.Next_one}>NEXT</button>
                                    </div>
                                </form>

                                <form onSubmit={e => {           e.preventDefault();         }}   id="Form2">

                                    <h1><FontAwesomeIcon icon={faLocationArrow} /></h1>

                                    <h3 id='heading-pop'>Where do you want to move?</h3>
                                    <Autocomplete
                                        style={{ width: "90%", zIndex:999 }}
                                        apiKey={'AIzaSyBDA4IeNM1O1HNxI2y-5WwcONyv1TwdZLc'}
                                        inputAutocompleteValue={this.state.move_location}
                                        onPlaceSelected={(place) => this.setState({move_location:place.formatted_address})}
                                    />
                                    <div className="btn-box">
                                        <button type="button" id="Back1" onClick={this.Back_one}>BACK</button>
                                        <button type="button" id="Next2" onClick={this.Next_two}>NEXT</button>	
                                    </div>
                                </form>

                                <form onSubmit={e => {           e.preventDefault();         }}   id="Form3">
                                    <h1><FontAwesomeIcon icon={faCalendar} /></h1>
                                    <h3 id='heading-pop'>When do you want to move?</h3>
                                    <input 
                                        type="date" 
                                        value={this.state.move_date} 
                                        name="move_date" 
                                        onChange={this.handleInputChange} 
                                    />
                                    <input 
                                        type="text" 
                                        placeholder="Enter Name" 
                                        value={this.state.client_name} 
                                        name="client_name" 
                                        onChange={this.handleInputChange} 
                                    />

                                    <div className="btn-box">
                                        <button type="button" id="Back2" onClick={this.Back_two}>BACK</button>
                                        <button type="button" id="Next3" onClick={this.Next_three}>NEXT</button>
                                        
                                    </div>
                                </form>

                                <form onSubmit={e => {           e.preventDefault();         }}   id="Form4">
                                    <h1><FontAwesomeIcon icon={faPhone} /></h1>  
                                    <h3 id='heading-pop'>How can we contact you</h3>
                                    <input 
                                        type="number" 
                                        placeholder="Enter Number" 
                                        name='phone_number'
                                        value={this.state.phone_number}
                                        onChange={this.handleInputChange}
                                    />
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

                                <form onSubmit={this.handleSubmit}   id="Form5">
                                    <h1><FontAwesomeIcon icon={faList} /></h1>
                                    <h3 id='heading-pop'>What items are you taking with you?</h3>

                                    <ReactTags 
                                        tags={tags}
                                        suggestions={suggestions}
                                        handleDelete={this.handleDelete}
                                        handleAddition={this.handleAddition}
                                        handleDrag={this.handleDrag} />
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
