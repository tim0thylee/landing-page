import React from "react";
import "./Carddiv.css";
import Navbar from "../Navbar/Navbar";
import Cardbody from "../Cardbody/Cardbody";

const carddiv = () => {
    return (
        <div id="carddiv">
            <Navbar />
            <Cardbody />
        </div>
    )
}

export default carddiv;