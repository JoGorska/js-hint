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


  const [APIExpiryDate, setAPIExpiryDate]  = useState("01/12/2021")

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

    // first tested console.log(data.expiry), than set status for API expiry date so I could display it in the modal
    // passed props to ModalResults Component
    .then (data => {
      setAPIExpiryDate(data.expiry)})
    
    .then(function(response) {
        console.log("ok");
    }).catch(function(error) {
        console.log(error);
    });
    
};

// https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

// function handleSubmit(event) {
//   event.preventDefault()
//   const form = new FormData(document.getElementById("checksform"));

//   console.log(form)

//   postForm(API_URL, form)
//   .then(data => {
//     console.log(data); // JSON data parsed by `data.json()` call
//   });


// }


async function handleSubmit(e) {
  e.preventDefault()

  const form = new FormData(document.getElementById("checksform"));

  const response = await fetch(API_URL, {
      method: "POST",
      headers: {
          "Authorization": API_KEY,
      },
      body: form,
  });

  const data = await response.json();
  
  handleErrors(response)

  console.log(data)

}


  return (
    <div className="App container">

      <MainHeader handleOnClick={handleOnClick}/>

      <FormReady handleSubmit = {handleSubmit}/>
          
      <ModalResults APIExpiryDate= {APIExpiryDate}/>

    </div>
  )
};

export default App;
