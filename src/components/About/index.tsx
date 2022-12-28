import React from "react";
import { useQuery } from "../../hooks/useQuery";
import { Link } from "react-router-dom";

const About = () => {
  const isMobile = useQuery();
  return (
    <>
      <div className="container-fluid mt-5 ab">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3 className="about" style={{ fontFamily: "fantasy" }}>Who We Are</h3>
              <h2>About Us</h2>
              <p className="" style={{ textAlign: "justify", fontWeight: '400' }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                esse id quidem! Tempora aliquam nesciunt ut enim, repudiandae
                non fuga molestias consequuntur sit alias velit ea magni odit
                sint, cumque perferendis repellendus minus nihil. Consectetur
                minima accusamus nemo corrupti saepe magni quidem quae iure
                perspiciatis autem facere assumenda amet itaque, praesentium
                veniam architecto enim ab nobis in temporibus. Repudiandae,
                veniam labore itaque voluptates, accusantium recusandae sequi a
                doloremque obcaecati deserunt eius. Eaque odit vitae corporis
                maiores sunt? Deserunt illo, laudantium nobis alias nesciunt
                minus commodi eius esse enim exercitationem labore qui sed
                facere, autem expedita officia ad maiores et quis. <br />
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                fugiat itaque debitis perspiciatis ipsa ab quia facere neque
                cumque, rerum necessitatibus commodi veritatis, quos at impedit
                sint dolorum iusto? Et quidem aspernatur perspiciatis adipisci
                facilis cupiditate architecto voluptatem iure exercitationem
                libero repudiandae animi nobis, modi aliquam delectus
                consequuntur incidunt asperiores. <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptates iusto magni animi vel! Sequi incidunt aut, at
                voluptatibus dolor eveniet fugit exercitationem accusamus,
                temporibus <br /> 
                <Link to='/' className="read-btn btn btn-primary mt-3">Read More</Link>
              </p>
            </div>
            {!isMobile && (
              <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">
                <img
                  src="/assets/current-pro1.jpg"
                  height="90%"
                  width="100%"
                  alt="logo"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
