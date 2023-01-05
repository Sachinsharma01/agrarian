import React from 'react';
import About from "../../components/About";
import Mission from "../../components/mission";
import Mentor from "../../components/team/mentor";

const AboutUs = () => {
    localStorage.setItem('active', 'about');
    return (
        <>
            <div className="container-fluid aboutus mt-4">
                <div className="row">
                    <div className="col-12 about-banner">
                        <div className="container h-100">
                            <div className="row h-100 d-flex justify-content-center align-items-center">
                                <div className="col-6">
                                    <h2 className='fs-1 text-center text-light'>About Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <Mentor/>
                    </div>
                    <div className="col-12">
                        <About />
                    </div>
                    <div className="col-12">
                        <Mission />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;