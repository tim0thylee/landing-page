import React, {Component} from "react";
import "./Maindiv.css";
import Carddiv from "../Carddiv/Carddiv"

class Maindiv extends Component {
    render () {
        return(
            <div id="container">
                <Carddiv/>
            </div>
        )
    }
}

export default Maindiv;