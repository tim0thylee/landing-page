import React from "react";
import "./Navbar.css";

const navbar = () => {
    return (
        <div id="navbar">
            <span className="leftnav-span">
                <span className="brandname-span">
                    <i className="fas fa-dumbbell"></i>
                    <span id="bodyBpText">BODYBP</span>
                </span>
            </span>
            <span className="links-span">
                <ul id="links-list">
                    <li><a href="team">Programs</a></li>
                    <li><a href="contacts">Team</a></li>
                    <li><a href="information">Store</a></li>
                    <li><a href="store">Contact</a></li>
                </ul>
            </span>
        </div>
    )
}

export default navbar;