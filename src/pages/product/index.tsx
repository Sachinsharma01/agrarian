import "react-image-gallery/styles/css/image-gallery.css";
import { Link } from "react-router-dom";
import ImageGallery from "react-image-gallery";

const VermiCompost = () => {
  localStorage.setItem("active", "about");
  const gallery = [
    {
      original: "/assets/vermicompost/gallary/1.jpeg",
      thumbnail: "/assets/vermicompost/gallary/1.jpeg",
      originalHeight: 500,
    },
    {
      original: "/assets/vermicompost/gallary/2.jpeg",
      thumbnail: "/assets/vermicompost/gallary/2.jpeg",
      originalHeight: 500,
    },
    {
      original: "/assets/vermicompost/gallary/3.jpeg",
      thumbnail: "/assets/vermicompost/gallary/3.jpeg",
      originalHeight: 500,
    },
    {
      original: "/assets/vermicompost/gallary/4.jpeg",
      thumbnail: "/assets/vermicompost/gallary/4.jpeg",
      originalHeight: 500,
    },
    {
      original: "/assets/vermicompost/gallary/5.jpeg",
      thumbnail: "/assets/vermicompost/gallary/5.jpeg",
      originalHeight: 500,
    },
    {
      original: "/assets/vermicompost/gallary/6.jpeg",
      thumbnail: "/assets/vermicompost/gallary/6.jpeg",
      originalHeight: 500,
    },
    {
      original: "/assets/vermicompost/gallary/7.jpeg",
      thumbnail: "/assets/vermicompost/gallary/7.jpeg",
      originalHeight: 500,
    },
    {
      original: "/assets/vermicompost/gallary/8.jpeg",
      thumbnail: "/assets/vermicompost/gallary/8.jpeg",
      originalHeight: 500,
    },
  ];
  return (
    <>
      <div className="container-fluid aboutus mt-4">
        <div className="row">
          <div className="col-12 about-banner">
            <div className="container h-100">
              <div className="row h-100 d-flex justify-content-center align-items-center">
                <div className="col-6">
                  <h2 className="fs-1 text-center text-light">
                    Agriaan Rootz 🤝 Utkarsh Vermi Compost
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="container-fluid mt-5 ab">
              <div className="container">
                <div className="row">
                  {/*{!isMobile && (*/}
                  <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">
                    <img
                      src="/assets/vermicompost/vermi-compost.jpeg"
                      height="70%"
                      width="70%"
                      alt="logo"
                    />
                  </div>
                  {/*)}*/}
                  <div className="col-md-6">
                    <h3 className="about" style={{ fontFamily: "fantasy" }}>
                      Vermi Compost
                    </h3>
                    {/*<h2>About Us</h2>*/}
                    <p
                      className=""
                      style={{ textAlign: "justify", fontWeight: "400" }}
                    >
                      Production of vermicompost through agricultural waste by
                      using ‘JaiGopal’ earthworm which have ability to eat cow
                      dung and wild vegetation very fast and convert it into
                      organic fertilizer. In addition, it also reduces soil
                      salinity up to a neutral pH. Due to this property more
                      nutrients are available to the plants for its excellent
                      growth. <br />
                      <br />
                      <strong>
                        What are the unique features of the product, in detail?
                      </strong>{" "}
                      <br />
                      <strong>Farmer and Environment Friendly:</strong>{" "}
                      Vermicomposting is directly associated with National
                      Programme for Organic Production (NPOP) which aims to
                      promote organic program in the country. The program will
                      enhance the living standard of small and marginal farming
                      communities due to increase in price of organically
                      produced crops.
                      <br />
                      <strong>Improve hygiene and sanitation:</strong> Improved
                      village hygiene and sanitation condition due to collection
                      and processing of waste and cow dung. Vermicomposting
                      needs to be introduced in every village and municipality
                      for recycling of the waste.
                      <br />
                      <strong>Reduces Soil Salinity:</strong> In addition to it
                      the product obtained (vermicompost) has the ability to
                      reduce the soil salinity upto a neutral pH. Due to this
                      property more nutrients are available to the plants for
                      its healthy growth.
                      <br />
                      <strong>Improves crop production:</strong> Vermicomposting
                      technology is comparatively cheaper, eco-friendly and
                      enhances soil health which will have a positive impact on
                      human health, flora and fauna. Vermicompost is essential
                      input for organic farming which will reduce or prevent the
                      deterioration of soil health and in the long run it will
                      ensure sustainable crop production.
                      <br />
                      <a
                        href="https://firebasestorage.googleapis.com/v0/b/agrarian-app-5ad14.appspot.com/o/utkarsh-vermi-compost%2Fquality-report.pdf?alt=media&token=7c53c670-5a4a-474a-ad34-62b12d22d96e"
                        target="_blank"
                        className="mt-3"
                      >
                        Download Quality Report
                      </a>
                      {/*<Link to='/' className="read-btn btn btn-primary mt-3">Read More</Link>*/}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="container-fluid mt-5 ab">
              <div className="container">
                <div className="row">
                  <div className="col-md-6">
                    <h3 className="about" style={{ fontFamily: "fantasy" }}>
                      Creater of the product
                    </h3>
                    <h2>Alok Bhardwaj</h2>
                    <p
                      className=""
                      style={{ textAlign: "justify", fontWeight: "400" }}
                    >
                      I noticed that the soil in our university campus and
                      adjoining areas has very high salt content. Therefore,
                      with the help of this startup grant, I want to establish a
                      large vermicompost unit in the university campus because
                      we have sufficient amount of garden waste as well as
                      kitchen waste (from hostel mess). So, I can prepare large
                      amount of vermicompost that we can use in our university
                      campus to reduce soil salinity and enhance plant growth.
                      In addition to it we can organize few workshops for the
                      farmers of nearby villages of our university and tell them
                      about the advantages of vermicompost technology. So, they
                      will adopt this technology in order to enhance their crop
                      productivity as well as soil physicochemical
                      characteristics. In University campus, after commercial
                      production on large scale, we can sell our product through
                      our company (Utkarsh Technovation Private Limited). We
                      also want to share my experience initially with the
                      villagers of my nearby areas of university. I am highly
                      thankful to the organizers of this startup grant if they
                      gave me a chance to prove myself. <br />
                    </p>
                  </div>
                  {/*{!isMobile && (*/}
                  <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">
                    <img
                      src="/assets/current-pro1.jpg"
                      height="90%"
                      width="100%"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="container-fluid mt-5 ab">
              <div className="container">
                <div className="row">
                  {/*{!isMobile && (*/}
                  <div className="rounded-3 col-md-6 d-flex justify-content-center align-items-center">
                    <img
                      src="/assets/vermicompost/vermi-compost.jpeg"
                      height="70%"
                      width="70%"
                      alt="logo"
                    />
                  </div>
                  {/*)}*/}
                  <div className="col-md-6">
                    <h3 className="about" style={{ fontFamily: "fantasy" }}>
                      Vermi Compost and its benefits
                    </h3>
                    {/*<h2>About Us</h2>*/}
                    <p
                      className=""
                      style={{ textAlign: "justify", fontWeight: "400" }}
                    >
                      <strong>Soil Salinity:</strong> This is the major issue
                      associated with the farming system. Due to the increased
                      soil salinity the crop productivity as well as the soil
                      health is decreasing continuously.
                      <br />
                      <strong>Agricultural Waste:</strong> The generation of
                      agricultural waste is one of the major issues in the
                      present scenario.
                      <br />
                      <strong>Soil Health and Plant Productivity:</strong>
                      Due to the excessive use of chemical fertilizers, the soil
                      health has decreased drastically that directly affects the
                      crop productivity and crop yield.
                      <br />
                      <br />
                      The vermicompost technology has the capability to overcome
                      these major issues. This earthworm excreta i.e
                      vermicompost is rich in nutritive status thus improves the
                      soil physical (soil pH, water holding capacity, soil
                      texture, soil porosity and infiltration rate) as well as
                      nutritive (soil carbon, total nitrogen, phosphorous,
                      potassium and other micronutrients) health. The addition
                      of vermicompost in the soil make the nutrients are
                      available to the plants for its healthy growth and
                      increased yield also.
                    </p>
                  </div>
                  <h2>
                    {" "}
                    <b>Product Gallery </b>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <ImageGallery
              items={gallery}
              infinite={true}
              showPlayButton={false}
              autoPlay={true}
              showThumbnails={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VermiCompost;
