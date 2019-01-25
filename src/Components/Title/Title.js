import React, { Component } from 'react';
import './Title.css';

class Title extends Component{

    constructor(){
        super();
        this.state = {
            dd:"",
            mm: "",
            yyyy: "",
        }
    }

    todaydate= () => {
        var date = new Date();
        this.setState({
            dd: date.getDate(),
            mm: date.getMonth()+1,
            yyyy: date.getFullYear()
        })
    }

    componentDidMount(){
        this.todaydate();
    }


    render(){
        return(
        <div className="title">
            <p className="para f1 tc"><b>
                My Todo List for {this.state.dd}/{this.state.mm}/{this.state.yyyy}
            </b></p>
        </div>
    );
    }
}

export default Title;