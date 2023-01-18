import React from 'react';const ServicesPage = () => {    document.title = 'Agrarian | Services'    localStorage.setItem('active', 'services');    return (        <>            <div className="container-fluid">                <div className="row">                    <div className="col-12 contact">                        <div className="container h-100">                            <div className="row h-100 d-flex justify-content-center align-items-center">                                <div className="col-6">                                    <h2 className="fs-1 text-light text-center">Solutions & Focus Area</h2>                                </div>                            </div>                        </div>                    </div>                    <div className="col-12">                        <div className="container-fluid mt-5 ab">                            <div className="container">                                <div className="row">                                    <div className="col-md-6">                                        <h3 className="about" style={{fontFamily: "fantasy"}}>Empowering Women Farmers</h3>                                        <p className="" style={{textAlign: "justify", fontWeight: '400'}}>                                            Agriculture sector employs 80% of all economically active women in                                            India; they comprise 33% of the agriculture labor force and 48% of the self-employed farmers.                                            In India, 85% of rural women are engaged in agriculture, yet only about 13% own land. The situation is                                            worse in Bihar with only 7% women having land rights, though women play an important role in various                                            agricultural activities.<br/>                                            While seeds are sown and harvesting is carried, women farmers work for about 3,300 hours which is                                            almost double that of male farmers who contribute 1,860 hours, as per a report by a leading                                            international group. Women comprise the most of small and marginal farmers. Despite their                                            contribution being high over male counterparts, their access to the market is low. They are either paid                                            less or unpaid as they do not own much land.                                        </p>                                    </div>                                    {/*{!isMobile && (*/}                                    <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">                                        <img                                            src="/assets/farmer-women.jpg"                                            height="90%"                                            width="100%"                                            alt="logo"                                        />                                    </div>                                    {/*)}*/}                                </div>                            </div>                        </div>                    </div>                    <div className="col-12">                        <div className="container-fluid mt-5 ab">                            <div className="container">                                <div className="row">                                    <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">                                        <img                                            src="/assets/agritech.jpg"                                            height="90%"                                            width="100%"                                            alt="logo"                                        />                                    </div>                                    <div className="col-md-6">                                        <h3 className="about" style={{fontFamily: "fantasy"}}>Agriculture and Tech</h3>                                        <p className="" style={{textAlign: "justify", fontWeight: '400'}}>                                            Automate agriculture processes for operational consistency,                                            precision, and context.                                            Our vision AI platform enables livestock and crop producers and processors to quickly and easily                                            increase efficiency, improve decision making, and realize more revenue. We empower businesses                                            across the value chain to quickly and easily.<br/>                                            i).Eliminate costly inaccuracies of manual inspection, quantification, & analysis.<br/>                                            ii). Collect visual data across locations & share insights with easy-to-use dashboards.<br/>                                            iii).Create auditable records for process & regulatory compliance.<br/>                                            iv). Increase speed, throughput, & yield of processes & production.<br/>                                            v). Deploy new solutions & obtain value in days, not months.<br/>                                        </p>                                    </div>                                    {/*{!isMobile && (*/}                                    {/*)}*/}                                </div>                            </div>                        </div>                    </div>                    <div className="col-12">                        <div className="container-fluid mt-5 ab">                            <div className="container">                                <div className="row">                                    <div className="col-md-6">                                        <h3 className="about" style={{fontFamily: "fantasy"}}>Agristore</h3>                                        <p className="" style={{textAlign: "justify", fontWeight: '400'}}>                                            Provide all essential inputs for increasing the crops yields:- our team provide all inputs at the time of                                            sowing and also provide method for how to use materials .then after less chance to loss the inputs                                            and farmers get benefited.<br/>                                            Provide knowledge for systematic crops cultivation, our team provide knowledge for maximum                                            land use system and how to grow more then one crop in single peace of land.                                        </p>                                    </div>                                    {/*{!isMobile && (*/}                                    <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">                                        <img                                            src="/assets/agristore.jpg"                                            height="90%"                                            width="100%"                                            alt="logo"                                        />                                    </div>                                    {/*)}*/}                                </div>                            </div>                        </div>                    </div>                </div>            </div>        </>    )}export default ServicesPage;