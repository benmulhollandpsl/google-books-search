import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from'axios';

class App extends Component {
  
  
  render() {
    
    const [books, setBook] = useState("");
    const[result, setResult] = useState([]);
    const [apiKey, setApiKey] = useState("AIzaSyDacCrRbdlrbik-iyxN9QAdMjH7-wALY08");
    
    handleChange = (event) => { 
      
      const book = event.target.value;

      setBook(book);
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(book)

    }
    
    
    return (
     <div className="App">
         <div className="App-header">
          
          <h2>GoogleBooks React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      


    <div class="container">
      <form>
      <div class="form-group">
      <input type="text" 
        className="input-control mt-10" 
        placeholder="book search" 
        autoComplete="off"/>
      </div>
      <button type="submit" className="btn btn-danger">Search</button>
      </form>
      </div>
      </div>
    );
  }
}

export default App;
