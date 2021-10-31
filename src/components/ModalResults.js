import React from "react"

function ModalResults () {
    return (
        
        <div className="modal" id="resultsModal" tabIndex="-1">
            <div className="modal-dialog">
                <div className="modal-content">

                    {/* Modal header */}

                    <div className="modal-header">
                        <h5 className="modal-title" id="resultsModalTitle">Modal Header</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    {/* Modal body */}

                    <div className="modal-body" id="results-content">
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