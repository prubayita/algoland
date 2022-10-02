import React from "react";
import logo from "./logo.svg"
import Box from '@material-ui/core/Box';
import ButtonClick from "./button.js"
function Home() {
    return (
        <div>
            <h1> 10 Academy Home</h1>
            <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}></div>
            <label> Full Name:  </label>
            <input class='input' type="text" placeholder="Name" />
            <label> Wallet ID:  </label>
            <input class='input' type="text" placeholder="Wallet ID" />
            <button id='button'> Create account</button>
             <br />
               <br />

            {/* <Box color="blue" bgcolor="palevioletred" p={1}>
        Enter
        </Box> */}
            <ButtonClick />
        </div>
    );

}
export default Home;