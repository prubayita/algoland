import React from "react";
import './App.css';
function Donate() {
    return (
        <div>
            <h1> 10 Academy   Donor page</h1>

            <label> Full Name:  </label>
            <input class='input' type="text" placeholder="Name" /> <br />
            <small class='small'> Please Enter you name </small>
            <br /><br />
            <label> Phone Number:  </label>
            <input class='input' type="text" placeholder="Number" /> <br />
            <small class='small'> Please Enter you mobile Number </small>
            <br /><br />
            <label> Asset:  </label>
            <input class='input' name="phone" type="text" placeholder="Unit Name" /> <br />
            <small class='small'> Enter the unit name of asset </small> <br /><br />'
            <label> Description: </label>
            <input className='in' type="text" placeholder="Description" /> <br />
            <small class='small'> Description </small> <br /><br />'
            <button id='button'> Donate</button>' <br />  <br />
            <h3> Thank You for your Donation</h3>
        </div>
    );

}
export default Donate;