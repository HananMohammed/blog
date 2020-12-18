import React,{ Component } from 'react';

class SuccessAlert extends Component{

    constructor(props) {
        super(props);
    }
    render(){

        return (
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>{this.props.message}</strong>
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );

    }

}

export default SuccessAlert;
