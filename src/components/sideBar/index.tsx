import React from 'react'
import {Link} from "react-router-dom";

const SideBar = ({setOpen}: any) => {
    return (
        <div className='container-fluid sidebar'>
            <div className='row h-100 '>
                <ul className='col-12 container h-100 d-flex justify-content-center align-items-center flex-column text-center'>
                    <li className='col-12 side-link my-4'>
                        <Link to='/' onClick={() => setOpen()} className='nav-link'><span
                            className='link'><span>Home</span></span></Link>
                    </li>
                    <li className='col-12 side-link my-4'>
                        <Link to='/about' onClick={() => setOpen()} className='nav-link'><span
                            className='link'><span>About Us</span></span></Link>
                    </li>
                    <li className='col-12 side-link my-4'>
                        <Link to='/team' onClick={() => setOpen()} className='nav-link'><span
                            className='link'><span>Team</span></span></Link>
                    </li>
                    <li className='col-12 side-link my-4'>
                        <Link to='/team/mentors' onClick={() => setOpen()} className='nav-link'><span
                            className='link'><span>Mentors</span></span></Link>
                    </li>
                    <li className='col-12 side-link my-4'>
                        <Link to='/contact' onClick={() => setOpen()} className='nav-link'><span
                            className='link'><span>Contact Us</span></span></Link>
                    </li>
                    <li className='col-12 side-link my-4'>
                        <Link to='/careers' onClick={() => setOpen()} className='nav-link'><span
                            className='link'><span>Careers</span></span></Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar