import React, { Component } from "react";
import { Link, Route,Switch } from "react-router-dom";
import Add from "./Add";
import Listing from "./Listing";
import Edit from "./Edit"

class Index extends Component{

    render() {
        return(
            <div>
                <div className="row">
                    <div className="col-sm-2 d-none d-md-block bg-light sidebar">
                        <div className="sidebar-sticky">
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <Link className="nav-link active" to="/category">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="feather feather-file-text">
                                            <path
                                                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                            <polyline points="10 9 9 9 8 9"></polyline>
                                        </svg>
                                        Categories <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/category/Add">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                             strokeLinecap="round" strokeLinejoin="round"
                                             className="feather feather-file">
                                            <path
                                                d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                                            <polyline points="13 2 13 9 20 9"></polyline>
                                        </svg>
                                        Add Category
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                        <Switch>
                            <Route exact path="/category" component={ Listing }></Route>
                            <Route exact path="/category/Add" component={Add}></Route>
                            <Route exact path="/category/edit/:id" component={Edit}></Route>
                        </Switch>
                    </div>
                </div>
            </div>
        );
    }
}
export default Index ;
