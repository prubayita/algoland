import React from "react";
import './App.css';
import { Link } from "react-router-dom";
import {ReactComponent as Logo} from "./logo.svg"

function Nav() {
    const navStyle = {
        color: 'white'
    };
    return (
        <nav>
            {/* <Logo /> */}
            <ul className="nav-links">
                <Link style={navStyle} to="/Home">
                    <li>Home</li>
                </Link>
                <Link style={navStyle} to="/Trainee">
                    <li>Trainee</li>
                </Link>
                <Link style={navStyle} to="/Tutor">
                    <li>Tutor</li>
                </Link>
                <Link style={navStyle} to="/Donate">
                    <li>Donate</li>
                </Link>
                <Link style={navStyle} to="/create_account">
                    <li>Account</li>
                </Link>

            </ul>
        </nav>
    );
}
export default Nav;