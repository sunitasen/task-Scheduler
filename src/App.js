import React, { Component } from 'react';
import './App.css';
//var { app } = window.require('electron').remote;
//const { app } = window.require('electron').remote;
import SideNav from './Components/SideNav/SideNav';
import Title from './Components/Title/Title';
import InputForm from './Components/InputForm/InputForm';
import Items from './Components/Items/Items';

class App extends Component {

  constructor(){
    super();
    this.state = {
      route: "today",
    }
  }

  // close = () => {
  //   app.quit();
  // } 

  render() {
    return (
      <div className="app">
        <div id="title-bar">
          <div id="title" className="tc f5">Daily-Scheduler</div>
          <div id="title-bar-btns">
               <div id="close-btn" className="bg-black white pointer f5" onClick={this.close}>x</div>
          </div>
        </div>
        <SideNav/>
        <Title/>
        <InputForm/>
        <Items/>
      </div>
    );
  }
}

export default App;
