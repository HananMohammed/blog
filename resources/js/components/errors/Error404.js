import React, { Component } from "react";
import { Link } from "react-router-dom" ;

class Error404 extends Component{

    render() {
        return(
            <div className="error404 d-flex justify-content-center">
                <div className=" body4040">
                    <h1>404</h1>
                    <p className="p-404">Ooops, the link you've search seem broken or has never exist.</p>

                    <small>Back To <Link to="/" className="link">home page</Link></small>
                    <div className="gradient1"></div>
                    <div className="gradient2"></div>
                    <div className="gradient3"></div>

                    <div id="cursor"></div>
                    <div id="follow-cursor"></div>
                </div>
            </div>
        )
    }
}

export default Error404 ;
