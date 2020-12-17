import React, { Component } from "react";

class Add extends Component{

    render() {
        return(
            <div className="card component hoverable" >
                <div className="card-header bg-dark">
                    Add New Category
                </div>
                <div className="card-body">
                    <form className="form-group">
                        <label className="mb-2" htmlFor="#name">Category Name: </label>
                        <input type="text" className="form-control mb-3" id="name" name="name" placeholder="Enter Category Name ...." />
                        <input type="submit" className="btn btn-dark" value="Submit" style={{marginLeft:'40%'}} />
                    </form>
                </div>
            </div>
        );
    }
}
export default Add ;
