import React, {useState} from "react"


import './App.css';
import MainHeader from './components/MainHeader';
import FormReady from './components/FormReady';
import ModalResults from './components/ModalResults';

//installed bootstrap and import Modal from bootstrap
//import Modal from 'react-bootstrap/Modal'


const API_KEY = "yxr3xVP6sNHAmgELC7Fv-ikLmYQ";

const API_URL = "https://ci-jshint.herokuapp.com/api";

// const resultsModal = new Modal(document.getElementById("resultsModal"))

function App() {




  // function to handle errors https://www.tjvantoll.com/2015/09/13/fetch-and-errors/

  function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

function handleOnClick () {
  
    //full URL with the key, using the const variables from above
    fetch(API_URL + "?api_key=" + API_KEY)
    
    .then(handleErrors)
    .then (response => response.json())
    .then (data => console.log(data.expiry))
    
    .then(function(response) {
        console.log("ok");
    }).catch(function(error) {
        console.log(error);
    });
    
};

  return (
    <div className="App container">

      <MainHeader handleOnClick={handleOnClick}/>

      <FormReady />
          
      <ModalResults />

    </div>
  )
};

export default App;
