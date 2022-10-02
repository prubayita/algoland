import React from "react";
import './App.css';
function Trainee() {
    return (
        <div>
            <h1> 10 Academy   trainee page</h1>

            <label> Full Name:  </label>
            <input class='input' type="text" placeholder="Name" /> <br />
            <small class='small'> Please Enter you name </small>
            <br /><br />
            <label> Asset:  </label>
            <input class='input' name="phone" type="text" placeholder="Unit Name" /> <br />
            <small class='small'> Enter the unit name of asset </small> <br /><br />'
            <label> Description: </label>
            <input className='in' type="text" placeholder="Description" /> <br />
            <small class='small'> Description </small> <br /><br />'
            <button id='button'> Request Certificate </button>' <br /> <br /> 
            <button id='button'> Download certificate </button>' <br />  <br />
        </div>
    );

}
export default Trainee;