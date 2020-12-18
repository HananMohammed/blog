import React, { Component } from "react";
import SuccessAlert from "../SuccessAlert";
import ErrorAlert from "../ErrorAlert";

class Add extends Component{

    constructor() {

        super();

        this.state = {
            category_name:"",
            alert_message:""
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this)
    }

    onChangeCategoryName(event){
        this.setState({
            category_name: event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault();
        const category = {
            name: this.state.category_name
        };
        axios.post("/category/store", category)
            .then(response =>{
                this.setState({
                    category_name: "",
                    alert_message:"success"
                })
                }
            )
            .catch(error => {
                this.setState({
                    alert_message:"error"
                })
            })

    }
    render() {
        return(
            <div className="card component hoverable" >
                <div className="card-header bg-dark">
                    Add New Category
                </div>
                <div className="mt-3">
                    {
                        this.state.alert_message == "success" ? <SuccessAlert/> : null
                    }
                    {
                        this.state.alert_message == "error" ? <ErrorAlert /> : null
                    }
                </div>
                <div className="card-body">
                    <form className="form-group" onSubmit={this.onSubmit}>
                        <label className="mb-2" htmlFor="#name">Category Name: </label>
                        <input
                            type="text"
                            className="form-control mb-3"
                            id="name"
                            name="name"
                            placeholder="Enter Category Name ...."
                            value={this.state.category_name}
                            onChange={this.onChangeCategoryName}

                        />
                        <input type="submit" className="btn btn-dark" value="Submit" style={{marginLeft:'40%'}} />
                    </form>
                </div>
            </div>
        );
    }
}
export default Add ;
