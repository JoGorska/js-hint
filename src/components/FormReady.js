import React from "react"

function FormReady (props) {

    return (
        <div className="row">
            <div className="col">
                <form id="checksform" onSubmit={props.handleSubmit}>

                    {/* enter file name here */}

                    <div className="row mb-3">
                        <label htmlFor="filename" className="col-2 form-label">Filename:</label>
                        <div className="col-6">
                            <input className="form-control" aria-describedby="fileHelp" placeholder="Enter filename" id="filename" name="filename" type="text"/>
                            <small id="fileHelp" className="form-text">Mandatory if you are pasting code, but not used if you enter a URL.</small>
                        </div>
                    </div>

                    {/* enter URL here */}

                    <div className="row mb-3">
                        <label htmlFor="url" className="col-2 form-label">URL:</label>
                        <div className="col-6">
                            <input className="form-control" aria-describedby="urlHelp" placeholder="Enter URL" id="url" name="url" type="url"/>
                            <small id="urlHelp" className="form-text">Enter a URL or paste JavaScript content below.</small>
                        </div>
                    </div>

                    {/* Options radio buttons */}
                    <div className="row mb-3">
                        <label htmlFor="options" className="col-2 form-label">Options:</label>
                        <div className="col-6">
                            <div className="form-check form-switch form-check-inline">
                                <input className="form-check-input" name="options" type="checkbox" value="es6"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ES6</label>
                            </div>
                            <div className="form-check form-switch form-check-inline">
                                <input className="form-check-input" name="options" type="checkbox" value="es8"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">ES8</label>
                            </div>
                            <div className="form-check form-switch form-check-inline">
                                <input className="form-check-input" name="options" type="checkbox" value="harsh"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Harsh</label>
                            </div>
                            <div className="form-check form-switch form-check-inline">
                                <input className="form-check-input" name="options" type="checkbox" value="jquery"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">jQuery</label>
                            </div>
                            <div className="form-check form-switch form-check-inline">
                                <input className="form-check-input" name="options" type="checkbox" value="relax"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Relax</label>
                            </div>
                            <div className="form-check form-switch form-check-inline">
                                <input className="form-check-input" name="options" type="checkbox" value="strict"/>
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Strict</label>
                            </div>
                        </div>
                    </div>

                    {/* text area to paste the code */}

                    <div className="row mb-3">
                        <label htmlFor="code" className="col-2 form-label">Code:</label>
                        <div className="col-8">
                            <textarea className="form-control" id="code" name="code"></textarea><br/>
                        </div>
                    </div>
                    {/* Button */}

                    <button type="submit" className="btn btn-primary text-start" id="submit">Run Checks</button>
                </form>


            </div>
        </div>
    )}

export default FormReady