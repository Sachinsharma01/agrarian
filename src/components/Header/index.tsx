import React, {useState} from 'react'
import {Link} from "react-router-dom";
import {RxHamburgerMenu} from 'react-icons/rx'
import {useQuery} from "../../hooks/useQuery";
import SideBar from "../sideBar";
import {VscChromeClose} from "react-icons/vsc";
import {IoIosArrowDown} from 'react-icons/io';

const Header = () => {
    const [isSiderBarOpen, setIsSideBarOpen] = useState(false);
    const [active, setActive] = useState(localStorage.getItem('active'))
    const [innerHeaderOpen, setInnerHeaderOpen] = useState(false);
    console.log("Hover", innerHeaderOpen)
    const setHandler = (active: any) => {
        setActive(active)
    }
    const setOpen = () => {
        setIsSideBarOpen(false)
    }
    const isMobile = useQuery();
    return (
        <>
            <nav className='container-fluid header'>
                {/*{!isMobile && <TopBar/>}*/}
                <div className='container-fluid'>
                    <div className='container-fluid'>
                        <div className='row'>
                            <div className='col-md-1 col-10'>
                                <img src='/assets/logo.png' alt='agrarian' width={120}/>
                            </div>
                            <div className='col-md-11 col-2'>
                                {!isMobile ? <div className='container-fluid text-center h-100'>
                                        <ul className='row h-100'>
                                            <li key={1} className='col-2'>
                                                <Link to='/' onClick={() => setHandler('home')} className='nav-link'><span
                                                    className='link'><span
                                                    className={active === 'home' ? 'active' : ''}>Home</span></span></Link>
                                            </li>
                                            <li key={2} className='col-2'><Link to='/services'
                                                                                onClick={() => setHandler('services')}
                                                                                className='nav-link'><span
                                                className='link'><span
                                                className={active === 'services' ? 'active' : ''}>Services</span></span>
                                            </Link>
                                            </li>
                                            <li key={3} className='col-2'>                        
                                                    <Link to='/team' 
                                                    onClick={() => setHandler('team')}
                                                    className='nav-link'><span
                                                    className='link'><span
                                                    className={active === 'team' ? 'active' : ''}>Team</span></span></Link>
                                            </li>
                                            <li key={4} className='col-2'>
                                                <Link to='/about' onClick={() => setHandler('about')}
                                                      className='nav-link'><span
                                                    className='link'><span
                                                    className={active === 'about' ? 'active' : ''}>About</span></span></Link>
                                            </li>
                                            <li key={5} className='col-2'><Link to='/contact'
                                                                                onClick={() => setHandler('contact')}
                                                                                className='nav-link'><span
                                                className='link'><span
                                                className={active === 'contact' ? 'active' : ''}>Contact</span></span>
                                            </Link>
                                            </li>
                                            <li key={6} className='col-2'><Link to='/vermicompost'
                                                                                onClick={() => setHandler('blogs')}
                                                                                className='nav-link'><span
                                                className='link'><span
                                                className={active === 'blogs' ? 'active' : ''}>Product</span></span>
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
                                <SideBar setOpen={setOpen}/>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header
