import React from "react"

function MainHeader (props) {
    return (
        <header >

            <div className="row p-4">
                <div className="col-md-10">
                    <h2>JSHinterface</h2>
                </div>

                {/* button to check if the key is valid */}

                <div className="col-md-2 text-end">
                    <button onClick={props.handleOnClick} id="status" className="btn btn-secondary">Check Key</button>
                </div>
            </div>

            
        <div className="row">
            <div className="col"><hr/></div>
        </div>
  
        </header>
    )

}


export default MainHeader