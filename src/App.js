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


  const [APIExpiryDate, setAPIExpiryDate]  = useState("01/12/2021");
  const [modalHeading, setModalHeading] = useState("");
  const [modalBody, setModalBody] = useState("")

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
      setAPIExpiryDate(data.expiry)
      setModalHeading("API Key status");
      setModalBody(`Your Key is valid untill ${APIExpiryDate}`)

      })
    
    .then(function(response) {
        console.log("ok");
    }).catch(function(error) {
        console.log(error);
    });
    
};


function processOptions(form) {
    let optArray = [];

    for (let e of form.entries()) {
        if (e[0] === "options") {
            optArray.push(e[1]);
        }
    }

    form.delete("options");

    form.append("options", optArray.join());

    return form;
}


async function handleSubmit(e) {
  e.preventDefault()

const form = processOptions(new FormData(document.getElementById("checksform")));

  // const form = new FormData(document.getElementById("checksform"));

  const response = await fetch(API_URL, {
      method: "POST",
      headers: {
          "Authorization": API_KEY,
      },
      body: form,
  });

  const data = await response.json();
  
    if (response.ok) {
      displayErrorsInSubmittedCode(data);
    } else if (response.status === 500) {
      return response.json()
      .then((json) => {
        const { message, stackTrace } = json;
        throw new Error(message, stackTrace);
      });

    } else {
      throw new Error(data.error);
    }

}

function displayErrorsInSubmittedCode(data){
  setModalHeading(`JSHint Results for ${data.file}`);
  let results = "";
  if (data.total_errors === 0) {
  setModalBody(`No errors reported!`);
  } else {
    
    for (let error of data.error_list) {
        results += `At line ${error.line}, `;
        results += `column ${error.col}: `;
        results += `${error.error}`;
    }
    setModalBody(`Total Errors: ${data.total_errors} ${results}`);
  }
}


  return (
    <div className="App container">

      <MainHeader handleOnClick={handleOnClick}/>

      <FormReady handleSubmit = {handleSubmit}/>
          
      <ModalResults modalHeading={modalHeading} modalBody={modalBody} APIExpiryDate= {APIExpiryDate}/>

    </div>
  )
};

export default App;
