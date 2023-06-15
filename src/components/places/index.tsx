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
                              17km Stone, NH-2, Mathura-Delhi Road Mathura, Chaumuhan, Uttar Pradesh 281406
                          </p>
                      </div>
                      <div className="col-md-2">
                          <MdOutlineMail style={{fontSize: 'xx-large'}} />
                          <p className='mt-2'>agrarianthetrustforgrowth@gmail.com
                              AGRARIAN The Trust For Growth</p>
                      </div>
                      <div className="col-md-2">
                          <BsPhone style={{fontSize: 'xx-large'}} />
                          <p className='mt-2'>(+91) 8737803157<br/> <br/> <br/> </p>
                      </div>
                  </div>
              </div>
          </div>
      </>
    );
}

export default Places;