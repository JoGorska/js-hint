import React from "react"

function ModalResults (props) {
    return (
        
        <div className="modal" id="resultsModal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">

                    {/* Modal header */}

                    <div className="modal-header">
                        <h5 className="modal-title" id="resultsModalTitle">API Key status</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    {/* Modal body */}

                    <div className="modal-body" id="results-content">
                        <p>Your Key is valid untill</p>
                        <p>{props.APIExpiryDate}</p>
                        
                    </div>

                    {/* Modal footer */}

                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}


export default ModalResults