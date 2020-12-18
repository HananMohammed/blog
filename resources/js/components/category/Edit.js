import React, { Component } from "react";
import axios from "axios";
import SuccessAlert from "../SuccessAlert";
import ErrorAlert from "../ErrorAlert";

class Edit extends Component{

    constructor(props) {

        super(props);

        this.state = {
            category_name:"",
            alert_message: "",
            error_message:""
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeCategoryName = this.onChangeCategoryName.bind(this)
    }

    componentDidMount() {
        axios.get(`${currentUrl}/Api/V1/category/edit/${this.props.match.params.id}`)
            .then(response => {
                this.setState({
                    category_name :response.data.name
                })
            })
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
        axios.put(`${currentUrl}/Api/V1/category/${this.props.match.params.id}`, category)
            .then(response =>{
                this.setState({
                    category_name: "",
                    alert_message:"success"
                })
                }
            )
            .catch(error => {
                this.setState({
                    alert_message:"error",
                    error_message:error.response.data.errors
                })

            })

    }
    render() {
        return(
            <div className="card component hoverable" >
                <div className="card-header bg-dark">
                    Edit Category
                </div>
                <div className="m-3">
                    {
                        this.state.alert_message == "success" ? <SuccessAlert message={"Category Updated Successfully "} /> : null
                    }
                    {
                        this.state.alert_message == "error" ? <ErrorAlert message = {this.state.error_message.name[0]} /> : null
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
export default Edit ;
