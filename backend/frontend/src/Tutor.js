import React from "react";
import logo from "./logo.svg"
function Tutor() {
    return (
        <div>

            <label> Full Name:  </label>
            <input class='input' type="text" placeholder="Name" /> <br />
            <small class='small'> Your full name please </small>
            <br /><br />
            <label> Wallet ID:  </label>
            <input class='input' name="phone" type="text" placeholder="Wallet ID" /> <br />
            <small class='small'> The your wallet ID </small> <br /><br />'
            <label> Description: </label>
            <input className='in' type="text" placeholder="Description" /> <br />
            <small class='small'> description of this asset </small> <br /><br />'
            <button id='button'> Generate Certificate </button>' <br /> <br />
            <button id='button'> Deny Access </button>'
            
        </div>
    );

}
export default Tutor;