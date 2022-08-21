import React from "react";

function Button ({ onClickFunc, buttonName }) {
    return (
       
        <div className="d-grid gap-2 col-6 mx-auto">
   <button onClick={onClickFunc} type="button" className="btn btn-dark btn-lg mt-3 text-warning">{buttonName}</button>
</div>
    );
}

export default Button;