import React,{ Component } from 'react';

class SuccessAlert extends Component{

    render(){

        return (
            <div className="alert alert-primary alert-dismissible fade show" role="alert">
                Record <strong>Created / Updated / Deleted </strong>  Successfully.
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );

    }

}

export default SuccessAlert;
