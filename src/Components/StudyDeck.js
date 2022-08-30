import React from "react";

export default function StudyDeck({id, length, index, showing, flip, next}){
    
    return(
        <div key={id} className="card w-75">
            <div className="card-body">
                <h5 className="card-title">Card {index+1} of {length}</h5>
                <p className="card-text">{showing}</p>
                <button href="#" onClick={flip} className="btn btn-secondary" >
                    Flip
                </button>
                <button href="#" onClick={next} className="btn btn-secondary" >
                    Next
                </button>
            </div>
        </div>);
}
