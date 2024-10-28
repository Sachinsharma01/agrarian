import React from 'react';
import { MdOutlinePlace, MdOutlineMail } from 'react-icons/md'
import { BsPhone } from 'react-icons/bs'

const Places = () => {
    return (
      <>
          <div className="container mt-3">
              <div className="row">
                  <div className="col-12 d-flex justify-content-between align-items-center flex-wrap places">
                      <div className="col-md-2">
                          <MdOutlinePlace style={{fontSize: 'xx-large'}} />
                          <p className='mt-2'>
                          Address: Satta Kothi, Etmadpur, Agra, Uttar Pradesh - 283202
                          </p>
                      </div>
                      <div className="col-md-2">
                          <MdOutlineMail style={{fontSize: 'xx-large'}} />
                          <p className='mt-2'>contact@agriaanrootz.com
                          Agriaan Rootz Pvt. Ltd.</p>
                      </div>
                      <div className="col-md-2">
                          <BsPhone style={{fontSize: 'xx-large'}} />
                          <p className='mt-2'>(+91) 7668910456<br/> <br/> <br/> </p>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
}

export default Places;