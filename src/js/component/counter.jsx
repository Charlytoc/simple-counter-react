
import React from "react";

function SimpleCounter ({ numOfSeconds }) {
    return (
    <div className="container w-50 bg-dark text-warning mt-3 fs-4 text-center">
        <div className="row">
            <div className="col"><p>{numOfSeconds}</p></div>
        </div>
    </div>
    );
}

export default SimpleCounter;

// ¿Cómo hacer que la función se ejecuta en el onLoad?