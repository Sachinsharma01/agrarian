import React from "react";
import {Link} from "react-router-dom";

const About = () => {
    return (
        <>
            <div className="container-fluid mt-5 ab">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h3 className="about" style={{fontFamily: "fantasy"}}>Who We Are</h3>
                            <h2>About Us</h2>
                            <p className="" style={{textAlign: "justify", fontWeight: '400'}}>
                                AGRARIAN The Trust For Growth was established in 2021, with
                                the objective of renewing the agriculture sector and working at
                                the grass-root level, in the fields of Agriculture, micro-entrepreneurship, sanitation,
                                and health and education.
                                After supporting several initiatives and running multiple programs
                                in the State of Bihar and Uttar Pradesh, Bihar and Uttar Pradesh
                                highly opportunity in the field of Agriculture It is rich in art and
                                culture, as well as tenders fertile soil as a result of the Ganga and
                                the Yamuna doab.<br/>
                                We provide a specific platform to the farmers that help them to
                                get all the modern information and sustainable ways regarding
                                crop cultivation practices from sowing to harvesting.
                                As per concern, the green revolution is the best example, during
                                this time agricultural produce, the prosperity of farmers,
                                Industrial growth and Rural employment increased , but the loss
                                of soil fertility, soil erosion, soil toxicity, diminishing water
                                resources, pollution of underground water, the salinity of
                                underground water, increased incidence of human and livestock
                                diseases and global warming are some of the negative impacts of
                                over adoption. <br/>
                                Given all things, we develop software that provides all the
                                information from sowing to harvesting. Via this software, we will
                                provide weather forecasting data that helps to choose a suitable
                                crop, crop pattern, time of irrigation and all needed information regarding
                                cultivation practice. Also,we install sensors that detect
                                the soil moisture, soil pH and insect pest attack (Sensors notify farmers by SMS,
                                f the insect pests or diseases affect the crop body
                                ut 10%). <br/>
                                We are aiming to build an integrated software platform that helps
                                the farmer by providing them with complete knowledge about the
                                Cultivation, Control , Cure and Management of the crops.
                                Via this we also provide them basic Agriculture inputs at farmers
                                door step with effective price. like Seeds, Fertilizer,Insecticide, pesticides etc. <br/>
                                <Link to='/about' target='_blank' className="read-btn btn btn-primary mt-3">Read
                                    More</Link>
                            </p>
                        </div>
                        {/*{!isMobile && (*/}
                        <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">
                            <img
                                src="/assets/current-pro1.jpg"
                                height="90%"
                                width="100%"
                                alt="logo"
                            />
                        </div>
                        {/*)}*/}
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
