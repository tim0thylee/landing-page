import React, {Component} from "react";
import "./Cardbody.css";
import Searchbar from "../Searchbar/Searchbar";

class Cardbody extends Component {
    state = {
        searched: ""
    }

    searchBarHandler = (event) => {
        event.preventDefault();
        alert("You searched: " + this.state.searched)

        const {searched} = this.state;

        fetch(`http://127.0.0.1:4001/searched?searched=${searched}`)
            .catch(err => console.log(err));
    }
       

    searchInputHandler = (event) => {
        this.setState({searched: event.target.value});
    }
    render() {
        return (
            <div className="card-body">
                <div className="card-body-span" id="card-left-span">
                    <h1>Find the best fitness program 
                        <br/>
                        and personal trainer 
                        <br/>
                        to meet your needs</h1>
                    <p>Thousands of motivated and qualified trainers across the nation</p>
                    <Searchbar 
                        clicked={this.searchBarHandler.bind(this)}
                        changed={this.searchInputHandler.bind(this)}
                        searched={this.state.searched}
                    />
                </div>
            </div>
        );
    }
};

export default Cardbody;