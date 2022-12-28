import React from 'react';
import {Link} from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai";

const MobileService = () => {
    return (
        <>
            <div className='container mt-5 mbs'>
                <div className='row'>
                    <div className='col-12 text-center'>
                        <h5>Disease Diagnosis</h5>
                        <small>Full Crop Disease Diagnosis</small><br/>
                        <Link to='/'
                              style={{fontSize: "30px"}}><AiOutlineArrowRight/></Link>
                    </div>
                    <div className='col-12 text-center'>
                        <h5>Farmer Community</h5>
                        <small>Full Crop Disease Diagnosis</small><br/>
                        <Link to='/'
                              style={{fontSize: "30px"}}><AiOutlineArrowRight/></Link>
                    </div>
                    <div className='col-12 text-center'>
                        <h5>Disease Diagnosis</h5>
                        <small>Full Crop Disease Diagnosis</small><br/>
                        <Link to='/'
                              style={{fontSize: "30px"}}><AiOutlineArrowRight/></Link>
                    </div>
                    <div className='col-12 text-center'>
                        <h5>Farmer Community</h5>
                        <small>Full Crop Disease Diagnosis</small><br/>
                        <Link to='/'
                              style={{fontSize: "30px"}}><AiOutlineArrowRight/></Link>
                    </div>
                    <div className='col-12 text-center'>
                        <h5>Disease Diagnosis</h5>
                        <small>Full Crop Disease Diagnosis</small><br/>
                        <Link to='/'
                              style={{fontSize: "30px"}}><AiOutlineArrowRight/></Link>
                    </div>
                    <div className='col-12 text-center'>
                        <h5>Farmer Community</h5>
                        <small>Full Crop Disease Diagnosis</small><br/>
                        <Link to='/'
                              style={{fontSize: "30px"}}><AiOutlineArrowRight/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MobileService;