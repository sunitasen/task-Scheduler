import React, {Component} from 'react';
import './InputForm.css';
import Items from './../Items/Items';

class InputForm extends Component{

    constructor(){
        super();
        this.state = {
            topic: '',
            type: '',
            done: "0",
            created: '',
            testing: false
        }
    }

    onTopicChange = (event) => {
        this.setState({topic: event.target.value})
    }

    onTypeChange = (event) => {
        //console.log(event.target.value)
        this.setState({typed: event.target.value})
        let date = new Date()

        let datee = date.getFullYear() + '-' + date.getMonth() + '-' +date.getDate()
        this.setState({created: datee})
    }

    submitIt = () => {
        event.preventDefault();
    
        fetch('http://localhost:3001/add',{
            method: 'post',
            headers:{'Content-Type' : 'application/json'},
            body: JSON.stringify({
               created: this.state.created,
               topic: this.state.topic,
               typed: this.state.typed,              
               done: this.state.done
            })
        }).then((response) => {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
        }).then((data) => {
            console.log(data) 
            location.reload(true)   
            if(data === "success"){
               this.setState({msg: "Thanks for registering"});  
            }
        }).catch(function(err) {
            console.log(err)
        });
        // .then( response => response.json())
   
    }


    render(){
        return(
            <div>
                <div className="center inputsec">
                    <input 
                        className="topicinput tc" 
                        type="text" 
                        placeholder="topic"
                        onChange={this.onTopicChange}
                    />
                    <select className="typesel pointer" onChange={this.onTypeChange}>
                        <option>Select type</option>
                        <option>Professional</option>
                        <option>Personal</option>
                    </select>
                    <button id="add" onClick={this.submitIt} className="pointer">Add to list</button>
                
                </div>
                {this.state.testing === true 
                ? <Items/>
                :
                 <p> </p>
                }
            </div>
        );
    }
}

export default InputForm;