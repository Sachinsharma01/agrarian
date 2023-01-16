import React from "react";
import Banner from "../../components/banner";
import Services from "../../components/services";
import About from "../../components/About";

const Home = () => {
    document.title = 'Agrarian | The Trust Of Growth'
    localStorage.setItem('active', 'home');
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
                <div className="col-12">
                    <div className="container-fluid">
                        <div className="container mt-5">
                            <div className="row">
                                <div className="container-fluid mt-5 ab">
                                    <div className="container">
                                        <div className="row">
                                            <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">
                                                <img
                                                    src="/assets/farmers.jpg"
                                                    height="90%"
                                                    width="100%"
                                                    alt="logo"
                                                />
                                            </div>
                                            <div className="col-md-6">
                                                <h3 className="about" style={{ fontFamily: "fantasy" }}>India At Glance</h3>
                                                <p className="" style={{ textAlign: "justify", fontWeight: '400' }}>
                                                    <small style={{fontSize: '30px', fontWeight: '400'}}>W</small>ith a population of 1.27 billion India is the world's second most populous
                                                    country. It is the seventh largest country in the world with an area of 3.288 million sq km. It has a long
                                                    coastline of over 7,500 km. India is a diverse country where over 22 major languages and 415 dialects
                                                    are spoken. With the highest mountain range in the world, the Himalayas to its North, the Thar desert
                                                    to its West, the Gangetic delta to its East and the Deccan Plateau in the South, the country is home to
                                                    vast agro-ecological diversity.<br/>
                                                    <strong>Major economic pillar:- </strong> Around 65–70%% of the Indian population (directly or indirectly) depends
                                                    upon the Agriculture sector and currently, it contributes to 16–17% of the GDP in the Indian economy.<br/><br/>

                                                    <strong>Major Crops </strong>
                                                    Area of cultivation of rice
                                                    45.1m ha
                                                    Area of cultivation of wheat
                                                    31.6m ha
                                                    Area of cultivation of pulses.
                                                    29 m ha<br /> <br/>
                                                    <strong>Livelihoods and food security for many </strong>
                                                    Concerning Indian Agriculture provides livelihood to nearly 70% of the workforce. It also contributes
                                                    immensely to the food security of the nation as it is the top producer of many crops.
                                                    Good quality of seeds and new technologies is not reaching the farmers.
                                                    The quality of soil is degraded due to
                                                    contamination from the overuse of pesticides and fertilizers for decades.
                                                </p>
                                            </div>
                                            {/*{!isMobile && (*/}
                                            {/*)}*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="container-fluid">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-12 text-center mt-2">
                                                <span className='fs-1'>The Issue On The Ground</span>
                                            </div>
                                            <div className="col-12 text-wrap more">
                                                <p>
                                                    Unavailability of quality inputs:- Good quality of seeds and new technologies is not reaching the farmers.
                                                    The quality of soil is degraded due to
                                                    contamination from the overuse of pesticides and fertilizers for decades.
                                                    - Not many have access to opt for mechanization, also
                                                    poor soil quality and varying climatic conditions
                                                    Due to unavailability of good market farmers sells their
                                                    harvest product in low price and middle man get benifited. so need good market facilities in every
                                                    district.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <About />
            </div>
        </div>
    )
}

export default Home;