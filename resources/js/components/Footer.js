import React, { Component } from "react";

class Footer extends Component{
    render() {
        return(
            <div className="bg-primary text-white" style={{height:"70px",fontWeight:"bold",marginTop:"170px",lineHeight:5}}>
                <p className="d-flex justify-content-center mt-3">
                    &copy; All Right Reserved To Hanan Mohamed
                </p>
            </div>
        );
    }
}

export default Footer
