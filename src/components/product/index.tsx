import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useQuery } from "../../hooks/useQuery";
import { Link } from "react-router-dom";

function ProductMarketingModal(props: any) {
  const isMobile = useQuery();
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      style={{ zIndex: "9999999999999" }}
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Agriaan Rootz Pvt Ltd
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-center">We have Parterned With Utkarsh Private Limited.</h4>
        <div
          className="d-flex justify-content-center align-items-center mx-4"
          style={{ flexWrap: "wrap" }}
        >
          <div className={isMobile ? "" : "w-50"}>
            <h6>
              <span>✅</span>
              Vermicomposting is directly associated with National
                      Programme for Organic Production (NPOP) which aims to
                      promote organic program in the country. The program will
                      enhance the living standard of small and marginal farming
                      communities due to increase in price of organically
                      produced crops.
            </h6>
            <h6>
              <span>✅</span>Jvillage hygiene and sanitation condition due to collection
                      and processing of waste and cow dung. Vermicomposting
                      needs to be introduced in every village and municipality
                      for recycling of the waste.
            </h6>
            <h6>
              <span>✅</span>In addition to it
                      the product obtained (vermicompost) has the ability to
                      reduce the soil salinity upto a neutral pH. Due to this
                      property more nutrients are available to the plants for
                      its healthy growth.
            </h6>
            {/* <div
              className="d-flex align-items-center flex-wrap"
              style={{ flexWrap: "wrap" }}
            >
              <img
                src="/assets/vermicompost/vermi-compost.jpeg"
                alt="app-qr"
                width={120}
                height={120}
              />
            </div> */}
            <Link to='/vermicompost' className="mt-3">
              <Button variant="success" className="w-50">
                Checkout
              </Button>
              </Link>
          </div>
          {!isMobile && (
            <div className="w-50 d-flex justify-content-center align-items-center flex-column">
              <img
                src="/assets/vermicompost/vermi-compost.jpeg"
                alt="app-mockup"
                height={400}
                width={250}
              />
            </div>
          )}
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductMarketingModal;

// function App() {
//     const [modalShow, setModalShow] = React.useState(false);
//
//     return (
//         <>
//             <Button variant="primary" onClick={() => setModalShow(true)}>
//                 Launch vertically centered modal
//             </Button>
//
//             <MyVerticallyCenteredModal
//                 show={modalShow}
//                 onHide={() => setModalShow(false)}
//             />
//         </>
//     );
// }
