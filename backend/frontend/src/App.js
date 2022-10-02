import React from 'react';
import "./App.css";
import Box from '@material-ui/core/Box';
import ButtonClick from "./button.js";
import Trainee from "./Trainee.js";
import Tutor from "./Tutor.js";
import Donate from "./donate.js";
import create_account from "./Account";
import Nav from "./Nav.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Account from './Account';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Routes>
          <Route path="Home" element={<Home />} />
          <Route path="Tutor" element={<Tutor />} />
          <Route path="Trainee" element={<Trainee />} />
          <Route path="create_account" element={<Account />} />
          <Route path="Donate" element={<Donate />} />
        </Routes>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>

    <h1> 10 Academy Algo Site</h1>
    <div style={{ marginLeft: '40%', marginTop: '60px', width: '30%' }}></div>
    <label> Full Name:  </label>
    <input class='input' type="text" placeholder="Name" />
    <label> Wallet ID:  </label>
    <input class='input' type="text" placeholder="Wallet ID" />


    {/* <Box color="blue" bgcolor="palevioletred" p={1}>
      Enter
    </Box> */}
    <ButtonClick />
  </div>
);
export default App;