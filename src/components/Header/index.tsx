import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {RxHamburgerMenu} from 'react-icons/rx'
import {useQuery} from "../../hooks/useQuery";
import SideBar from "../sideBar";
import {VscChromeClose} from "react-icons/vsc";

const Header = () => {
    const [isSiderBarOpen, setIsSideBarOpen] = useState(false);
    const isMobile = useQuery();
    return (
        <nav className='container-fluid header'>
            <div className='container-fluid'>
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-md-1 col-10'>
                            <img src='/assets/logo.jpg' alt='agrarian'/>
                        </div>
                        <div className='col-md-11 col-2 '>
                            {!isMobile ? <div className='container text-center h-100'>
                                    <ul className='row h-100'>
                                        <li key={1} className='col-3'>
                                            <Link to='/' className='nav-link'><span
                                                className='link'><span>Home</span></span></Link>
                                        </li>
                                        <li key={2} className='col-3'>
                                            <Link to='/' className='nav-link'>
                                                <select className="class3">
                                                    <option><span className='link'><span>About Us</span></span></option>
                                                    <option>List1</option>
                                                    <option>List2</option>
                                                    <option>List3</option>
                                                </select>
                                            </Link>

                                        </li>
                                        <li key={3} className='col-3'><Link to='/'
                                                                            className='nav-link'><span
                                            className='link'><span>Our Team</span></span></Link>
                                        </li>
                                        <li key={4} className='col-3'><Link to='/'
                                                                            className='nav-link'><span
                                            className='link'><span>Contact Us</span></span>
                                        </Link>
                                        </li>
                                    </ul>
                                </div> :
                                <button className='btn' onClick={() => setIsSideBarOpen(v => !v)}>
                                    {isSiderBarOpen ? <VscChromeClose style={{height: '50px', width: '50px'}}/> :
                                        <RxHamburgerMenu style={{height: '50px', width: '50px'}}/>
                                    }
                                </button>}
                        </div>
                        {
                            isSiderBarOpen &&
                            <SideBar/>
                        }
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
