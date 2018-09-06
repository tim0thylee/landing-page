import React from "react";
import "./Searchbar.css";

const searchbar = (props) => {
    return(
        <form id="search-form">
            <input onChange={props.changed} type="text" id="searchInput" value={props.searched}/>
            <button type="submit" id="searchButton" onClick={props.clicked}>Get started</button>
        </form>
    )
}

export default searchbar;