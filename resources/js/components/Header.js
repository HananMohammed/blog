import React, { Component } from "react";
import { Link, Switch, Route } from 'react-router-dom';
import Home  from './Home' ;
import About from './About' ;
import Index from "./category";
import Error404 from "./errors/Error404";

class Header extends Component{
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div className="container-fluid">
                            <Link to="/" className="navbar-brand">Landing Page</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/about" className="nav-link" aria-current="page">About Us</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/category" className="nav-link" aria-current="page">category</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <form className="d-flex" style={{float:'right'}}>
                            <input className="form-control me-2" type="search" placeholder="Search"
                                   aria-label="Search" />
                            <button className="btn btn-outline-dark ml-2" type="submit">Search</button>
                        </form>
                    </nav>
                <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/about' component={About}/>
                <Route exact path='/category' component={Index}/>
                <Route exact path="/category/Add" component={Index}></Route>
                <Route exact path="/category/edit/:id" component={Index}></Route>
                <Route exact path="/*" component={Error404}></Route>
                </Switch>
            </div>
        );
    }
}

export default Header ;
