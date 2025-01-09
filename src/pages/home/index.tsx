import React from "react";
import Confetti from "react-confetti";
import Banner from "../../components/banner";
import Services from "../../components/services";
import About from "../../components/About";
import AppMarketingModal from "../../components/app";
import ProductMarketingModal from "../../components/product";

const Home = () => {
  const [showModal, setShowModal] = React.useState(true);
  document.title = "Agriaan Rootz | Home";
  localStorage.setItem("active", "home");
  return (
    <div className="container-fluid">
      <div className="row">
        <div className={"col-12 banner"}>
          <Banner />
        </div>
        <div className="container-fluid mt-5">
          <div className="container">
            <div className="row solutions">
              <div
                className={
                  "col-md-4 sol d-flex justify-content-center align-items-center flex-column"
                }
              >
                <img
                  src="/assets/forest.png"
                  height="200px"
                  width="200px"
                  alt="natural farming"
                />
                <h5 className="mt-4">Crop Seasoning</h5>
              </div>
              <div className="col-md-4 sol d-flex justify-content-center align-items-center flex-column">
                <img
                  src="/assets/recycled.png"
                  height="200px"
                  width="200px"
                  alt="natural farming"
                />
                <h5 className="mt-4">IOT Solutions</h5>
              </div>
              <div className="col-md-4 d-flex justify-content-center align-items-center flex-column">
                <img
                  src="/assets/growth.png"
                  height="200px"
                  width="200px"
                  alt="natural farming"
                />
                <h5 className="mt-4">Better Crop Quality</h5>
              </div>
            </div>
          </div>
        </div>
        <Services />
        {/* <AppMarketingModal
          show={showModal}
          onHide={() => setShowModal(false)}
        /> */}
        <ProductMarketingModal
          show={showModal}
          onHide={() => setShowModal(false)}
        />
        {showModal && (
          <Confetti
            width={window.innerWidth / 2}
            height={window.innerHeight}
            style={{ zIndex: 10000000000 }}
          />
        )}

        <div className="col-12">
          <div className="container-fluid">
            <div className="container mt-5">
              <div className="row">
                <div className="container-fluid mt-5 ab">
                  <div className="container">
                    <div className="row">
                      <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">
                        <img
                          src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          height="90%"
                          width="100%"
                          alt="logo"
                        />
                      </div>
                      <div className="col-md-6">
                        <h3 className="about" style={{ fontFamily: "fantasy" }}>
                          India At Glance
                        </h3>
                        <p
                          className=""
                          style={{ textAlign: "justify", fontWeight: "400" }}
                        >
                          
                          - <strong>Population:</strong> 1.43 billion (second largest in the world) <br />
                          - <strong>Area:</strong> 3.288 million sq km (seventh largest globally) <br />
                          - <strong>Coastline:</strong> Over 7,500 km  <br />
                          - <strong>Diversity:</strong> 22 major languages, 415 dialects 
                          <br />
                          <br />
                          <strong>Agriculture: </strong> <br />
                          - <strong>Economic Role:</strong> Engages 65-70% of the population, contributing 16-17% to GDP  
                          <br />
                          - <strong>Major Crops:</strong>  <br />
                          - Rice: 45.1 million hectares  <br /> 
                          - Wheat: 31.6 million hectares   <br />
                          - Pulses: 29 million hectares

                          <br />
                          <br />

                          <strong>Challenges: </strong> <br />
                          Despite being a top producer and a key contributor to food security, challenges persist, including poor access to quality seeds, outdated technologies, and soil degradation from excessive pesticide and fertilizer use.
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
                        <span className="fs-1">The Issue On The Ground</span>
                      </div>
                      <div className="col-12 text-wrap more">
                        <p>
                          Unavailability of quality inputs:- Good quality of
                          seeds and new technologies is not reaching the
                          farmers. The quality of soil is degraded due to
                          contamination from the overuse of pesticides and
                          fertilizers for decades. - Not many have access to opt
                          for mechanization, also poor soil quality and varying
                          climatic conditions Due to unavailability of good
                          market farmers sells their harvest product in low
                          price and middle man get benifited. so need good
                          market facilities in every district.
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
  );
};

export default Home;
