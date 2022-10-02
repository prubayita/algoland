import React from "react";
import './App.css';
function Account(){
    return (
        <div>
            <h1> 10 Academy </h1>
            <h1> New Account </h1>
            <label> Full Name:  </label>
            <input class='input' type="text" placeholder="Name" /> <br />
            <small class='small'> Please Enter you name </small>
            <br /><br />
            <label> email address:  </label>
            <input class='input' type="text" placeholder="email" /> <br />
            <small class='small'> Please Enter you email address </small>
            <br /><br />
            <button id='button'> Create account</button>' <br />  <br />
            <br /><br />'
            <label> Public address: </label>
            <output className='in' type="text" placeholder="Public address" /> <br />
            <label> Mnemonic: </label>
            <output className='in' type="text" placeholder="Mnemonic" /> <br />
            <small class='small'> Please remember these keys </small> <br /><br />
            
            <h3> Account Created</h3>
        </div>
    );

}
export default Account;