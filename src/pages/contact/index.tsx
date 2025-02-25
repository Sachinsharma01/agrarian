import React from 'react';
import {ContactForm} from "../../components/contact/ContactForm";
import Places from "../../components/places";

const Contact = () => {
    document.title = 'Agrarian | Contact'
    localStorage.setItem('active', 'contact');
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 contact">
                        <div className="container h-100">
                            <div className="row h-100 d-flex justify-content-center align-items-center">
                                <div className="col-6">
                                    <h2 className="fs-1 text-light text-center">Contact Us</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <Places />
                    </div>
                    <div className="col-12">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;