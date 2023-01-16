import React, {useState} from 'react';import config from '../../config'import {useQuery} from "../../hooks/useQuery";const Mission = () => {    document.title = 'Agrarian | About'    const [active, setActive] = useState();    const isMobile = useQuery();    const [data, setData] = useState(config.data.mission);    const [show, setShow] = useState(false);    console.log(config.bgImages.mission)    const setHandler = (data: any, active: any) => {        setActive(active);        setData(data)        setShow(true);    }    return (        <>            <div className="container my-4">                <div className="row">                    <div className="col-12 rounded-4  ">                        <div className="row ab-left h-100">                            <div                                className={`${isMobile ? 'col-4' : 'col-md-4'} ${active === '1' ? 'actDiv' : ''} mb-2 text-center l-btn d-flex justify-content-center align-items-center`}                                onClick={() => setHandler(config.data.mission, '1')}>                                {!isMobile && <h4 className={active === '1' ? 'active' : ''}>MISSION</h4>}                                    <img src='/assets/target.gif' height='40px' width='40px' alt='mission'/>                            </div>                            <div                                className={`${isMobile ? 'col-4' : 'col-md-3'} ${active === '2' ? 'actDiv' : ''} mb-2 text-center l-btn d-flex justify-content-center align-items-center`}                                onClick={() => setHandler(config.data.vision, '2')}>                                {!isMobile && <h4 className={active === '2' ? 'active' : ''}>VISION</h4>}                                <img src='/assets/vision.gif' height='40px' width='40px' alt='vision'/>                            </div>                            <div                                className={`${isMobile ? 'col-3' : 'col-md-4'} ${active === '3' ? 'actDiv' : ''} mb-2 text-center l-btn d-flex justify-content-center align-items-center`}                                onClick={() => setHandler(config.data.values, '3')}>                                {!isMobile && <h4 className={active === '1' ? 'active' : ''}>VALUES</h4>}                                <img src='/assets/goal.gif' height='40px' width='40px' alt='Values'/>                            </div>                        </div>                    </div>                    {show && <div className="container col-md-10 mt-2 aboutData rounded-4">                        {/*<img src={config.bgImages.mission} alt='mission' />*/}                        {/*<div className=" h-100 w-100" style={styles}>*/}                        <div className="text-wrap mt-2">                            <ul>                                {                                    data.map((ele, idx) => {                                            return <li className='text-wrap mb-4 mx-0 ab-data' key={idx}>{ele}</li>                                        }                                    )                                }                            </ul>                        </div>                        {/*</div>*/}                    </div> }                </div>            </div>        </>    )}export default Mission;const styles = {    background: `url(${config.bgImages.mission}`,    backgroundRepeat: 'no-repeat',    backgroundPosition: 'center',}