import React from 'react';
import { SpinnerRoundFilled } from 'spinners-react';


const CheckInternetConnection = () =>{
    return (
        <div className="content-page">
            <div className="container-fluid">
                <div className="d-flex justify-content-center text-center">
                    <div className="col-lg-12 mt-5">
                        <div className='d-flex justify-content-center align-items-center'>
                        <SpinnerRoundFilled  />
                        <h3 style={{marginBottom:"0px !important"}}>Please check your internet connection</h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default  CheckInternetConnection;