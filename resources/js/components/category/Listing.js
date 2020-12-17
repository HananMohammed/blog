import React, { Component } from "react";
import axios from "axios";

class Listing extends Component{

    constructor()
    {
        super();
        this.state={
            categories: []
        }

    }

    componentDidMount() {
        axios.get('/category')
            .then( response=>{
                console.log(response.data)
                this.setState({
                    categories:response.data
                });
                console.log(this.state.categories)
            })

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
                </tr>
                </thead>
                <tbody>
                {
                    this.state.categories.map( category =>
                        <tr key={category.id}>
                            <th scope="row">{category.id}</th>
                            <td>{category.name}</td>
                            <td>{category.active}</td>
                            <td>{category.created_at}</td>
                        </tr>
                    )
                }
                </tbody>
            </table>
         );
    }
}
export default Listing ;
