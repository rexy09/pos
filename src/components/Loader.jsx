import React from 'react';
// import ReactCircularLoader from 'react-circular-loader';
import { SpinnerCircular } from 'spinners-react';

const Loader = () => {
    return (
        <div className="content-page">
            <div className="container-fluid">
                <div className="d-flex text-center">
                    <div className="col-lg-12 mt-5" style={{marginTop:"40vh"}}>
                    <SpinnerCircular  />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Loader