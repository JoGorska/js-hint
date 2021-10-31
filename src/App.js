
import './App.css';

function App() {
  return (
    <div className="App">
      <header >

      <div class="row">
            <div class="col-md-10">
                <h2>JSHinterface</h2>
            </div>
            <div class="col-md-2 text-end">
                <button id="status" class="btn btn-secondary">Check Key</button>
            </div>
        </div>

      </header>

      <div class="container">

        <div class="row">
            <div class="col"><hr/></div>
        </div>
        <div class="row">
            <div class="col">
                <form id="checksform">
                    <div class="row mb-3">
                        <label for="filename" class="col-2 form-label">Filename:</label>
                        <div class="col-6">
                            <input class="form-control" aria-describedby="fileHelp" placeholder="Enter filename" id="filename" name="filename" type="text"/>
                            <small id="fileHelp" class="form-text">Mandatory if you are pasting code, but not used if you enter a URL.</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="url" class="col-2 form-label">URL:</label>
                        <div class="col-6">
                            <input class="form-control" aria-describedby="urlHelp" placeholder="Enter URL" id="url" name="url" type="url"/>
                            <small id="urlHelp" class="form-text">Enter a URL or paste JavaScript content below.</small>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="options" class="col-2 form-label">Options:</label>
                        <div class="col-6">
                            <div class="form-check form-switch form-check-inline">
                                <input class="form-check-input" name="options" type="checkbox" value="es6"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">ES6</label>
                            </div>
                            <div class="form-check form-switch form-check-inline">
                                <input class="form-check-input" name="options" type="checkbox" value="es8"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">ES8</label>
                            </div>
                            <div class="form-check form-switch form-check-inline">
                                <input class="form-check-input" name="options" type="checkbox" value="harsh"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Harsh</label>
                            </div>
                            <div class="form-check form-switch form-check-inline">
                                <input class="form-check-input" name="options" type="checkbox" value="jquery"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">jQuery</label>
                            </div>
                            <div class="form-check form-switch form-check-inline">
                                <input class="form-check-input" name="options" type="checkbox" value="relax"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Relax</label>
                            </div>
                            <div class="form-check form-switch form-check-inline">
                                <input class="form-check-input" name="options" type="checkbox" value="strict"/>
                                <label class="form-check-label" for="flexSwitchCheckDefault">Strict</label>
                            </div>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label for="code" class="col-2 form-label">Code:</label>
                        <div class="col-8">
                            <textarea class="form-control" id="code" name="code"></textarea><br/>
                        </div>
                    </div>
                </form>
                <button class="btn btn-primary text-start" id="submit">Run Checks</button>
            </div>
        </div>
    </div>

    {/* <!-- Modal 1 --> */}
    <div class="modal" id="resultsModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="resultsModalTitle">Modal Header</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body" id="results-content">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    </div>
  );
}

export default App;
