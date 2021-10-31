
import './App.css';
import MainHeader from './components/MainHeader';
import FormReady from './components/FormReady';
import ModalResults from './components/ModalResults';

//installed bootstrap and import Modal from bootstrap
//import Modal from 'react-bootstrap/Modal'


const API_KEY = "yxr3xVP6sNHAmgELC7Fv-ikLmYQ";

const API_URL = "https://ci-jshint.herokuapp.com/api";

// const resultsModal = new Modal(document.getElementById("resultsModal"))

console.log(API_KEY)
console.log(API_URL)

function App() {

function handleOnClick () {
  console.log("I was clicked")
}

  return (
    <div className="App container">

      <MainHeader handleOnClick={handleOnClick}/>

      <FormReady />
          
      <ModalResults />

    </div>
  )
}

export default App;
