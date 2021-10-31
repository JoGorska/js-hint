
import './App.css';
import MainHeader from './components/MainHeader';
import FormReady from './components/FormReady';
import ModalResults from './components/ModalResults';

function App() {
  return (
    <div className="App container">

    <MainHeader />
      <div className="container">

        <div className="row">
            <div className="col"><hr/></div>
        </div>

      <FormReady />
        
    </div>

    <ModalResults />
    

    </div>
  );
}

export default App;
