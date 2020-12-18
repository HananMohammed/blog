import React,{ Component } from 'react';

class SuccessAlert extends Component{

    constructor(props) {
        super(props);
    }
    render(){

        return (
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
                {this.props.message}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );

    }

}

export default SuccessAlert;
