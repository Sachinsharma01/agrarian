import React from "react";
import Banner from "../../components/banner";
import Services from "../../components/services";
import About from "../../components/About";

const Home = () => {
    document.title = 'Agrarian | The Trust Of Growth'
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className={'col-12 banner'}>
                    <Banner/>
                </div>
                <div className='container-fluid mt-5'>
                    <div className='container'>
                        <div className='row solutions'>
                            <div
                                className={'col-md-4 sol d-flex justify-content-center align-items-center flex-column'}>
                                <img src='/assets/forest.png' height='200px' width='200px' alt='natural farming'/>
                                <h5 className='mt-4'>Crop Seasoning</h5>
                            </div>
                            <div className='col-md-4 sol d-flex justify-content-center align-items-center flex-column'>
                                <img src='/assets/recycled.png' height='200px' width='200px' alt='natural farming'/>
                                <h5 className='mt-4'>IOT Solutions</h5>
                            </div>
                            <div className='col-md-4 d-flex justify-content-center align-items-center flex-column'>
                                <img src='/assets/growth.png' height='200px' width='200px' alt='natural farming'/>
                                <h5 className='mt-4'>Better Crop Quality</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Services/>
                <About />
            </div>
        </div>
    )
}

export default Home;