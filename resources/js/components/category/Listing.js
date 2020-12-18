import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom" ;
import Pagination from "react-js-pagination";
import SuccessAlert from "../SuccessAlert";
import ErrorAlert from "../ErrorAlert";

class Listing extends Component{

    constructor()
    {
        super();

        this.state={
            categories: [],
            activePage: 1,
            itemsCountPerPage: 1,
            totalItemsCount: 1,
            pageRangeDisplayed:1,
            alert_message:""
        }
        this.onDelete = this.onDelete.bind(this)
    }

    componentDidMount() {
        axios.get('Api/V1/category')
            .then( response=>{
                this.setState({
                    categories:response.data.data,
                    activePage:response.data.current_page,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    pageRangeDisplayed:response.data.last_page
                });
            })

    }
    onDelete(category_id){
        axios.post(`Api/V1/category/delete/${category_id}`)
            .then(response =>{
                 var categories = this.state.categories ;
                categories.forEach((category, index)=>{
                    if(category.id === category_id ){
                        categories.splice(index, 1)
                        this.setState({
                            categories: categories,
                            alert_message:"success"

                        })
                    }
                })
            })
            .catch(error => {
            this.setState({
                alert_message:"error"
            })
        })
    }
    handlePageChange(pageNumber){
        axios.get(`http://127.0.0.1:8000/Api/V1/category?page=${pageNumber}`)
            .then(response => {
                this.setState({
                    categories:response.data.data,
                    activePage:response.data.current_page,
                    itemsCountPerPage: response.data.per_page,
                    totalItemsCount: response.data.total,
                    pageRangeDisplayed:response.data.last_page
                });
            })
    }

    render() {
        return(
            <div>
                <div className="mt-3">
                    {
                        this.state.alert_message == "success" ? <SuccessAlert message={"Category Deleted Successfully "} /> : null
                    }
                    {
                        this.state.alert_message == "error" ? <ErrorAlert message={"Error Occurred While Deleting Category "} /> : null
                    }
                </div>
                <table className="table table-striped component hoverable">
                <thead className="bold-blue bg-dark">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Category Name</th>
                    <th scope="col">Status</th>
                    <th scope="col">Created.At</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.state.categories.map( category =>
                        <tr key={category.id}>
                            <th scope="row">{category.id}</th>
                            <td>{category.name}</td>
                            <td>{category.active ===1 ? <p className="text-success">Active </p>: <p className="text-danger">In Active</p> }</td>
                            <td>{category.created_at}</td>
                            <td>
                                <a href="#" className="btn btn-danger mr-2" onClick={this.onDelete.bind("category_id" , category.id)}>Delete</a>
                                <Link to={`/category/edit/${category.id}`} className="btn btn-success">Edit</Link>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
                <div className="mt-3 d-flex justify-content-center">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={this.state.itemsCountPerPage}
                        totalItemsCount={this.state.totalItemsCount}
                        pageRangeDisplayed={this.state.pageRangeDisplayed}
                        onChange={this.handlePageChange.bind(this)}
                        itemClass="page-item"
                        linkClass="page-link"
                    />
                </div>
            </div>
         );
    }
}
export default Listing ;
