import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import Header from "./Header";
import Footer from "./Footer";
import {BrowserRouter as Router} from "react-router-dom";

class Index extends Component{

    render(){

        return (
            <div>
                <Header />
                <Footer />
            </div>
        );

    }

}

export default Index;

if (document.getElementById('app')) {
    ReactDOM.render(<Router ><Index /></Router>, document.getElementById('app'));
}
