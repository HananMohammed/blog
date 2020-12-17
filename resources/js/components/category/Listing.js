import React, { Component } from "react";
import axios from "axios";

class Listing extends Component{

    constructor()
    {
        super();
        this.state={
            categories: [],
        }
        this.onDelete = this.onDelete.bind(this)
    }

    componentDidMount() {
        axios.get('/category')
            .then( response=>{
                this.setState({
                    categories:response.data
                });
            })

    }
    onDelete(category_id){
        axios.post(`/category/delete/${category_id}`)
            .then(response =>{
                 var categories = this.state.categories ;
                categories.forEach((category, index)=>{
                    if(category.id === category_id ){
                        categories.splice(index, 1)
                        this.setState({
                            categories: categories
                        })
                    }
                })
            });
    }

    render() {
        return(
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
                                <a href="#" className="btn btn-danger" onClick={this.onDelete.bind("category_id" , category.id)}>Delete</a>
                            </td>
                        </tr>
                    )
                }
                </tbody>
            </table>
         );
    }
}
export default Listing ;
