import React, { Component } from "react";
import Login from "./components/login";
import {Header} from './components/header';


class App extends Component {

  render(){
    return (
      <React.Fragment>
      <div className="#App">
        <div className="heading"> <Header/></div>
        <div className="login"><Login/> </div>
        </div>
  
        
        </React.Fragment>
    );
  }
}

export default App;

