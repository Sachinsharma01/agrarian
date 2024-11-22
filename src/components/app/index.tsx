import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useQuery } from "../../hooks/useQuery";

function AppMarketingModal(props: any) {
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
          Agrarian Pvt. Ltd.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4 className="text-center">We have just launched out App.</h4>
        <div
          className="d-flex justify-content-center align-items-center mx-4"
          style={{ flexWrap: "wrap" }}
        >
          <div className={isMobile ? "" : "w-50"}>
            <h6>
              <span>✅</span>
              Users who install the app now will get lifetime Premium.
            </h6>
            <h6>
              <span>✅</span>Join and contact us through our wide farmer
              community.
            </h6>
            <h6>
              <span>✅</span>Not satisfied with our services? Send you feed to
              us with integrated feedback system.
            </h6>
            <h6>
              <span>✅</span>24/7 Active support available on the app.
            </h6>
            <div
              className="d-flex align-items-center flex-wrap"
              style={{ flexWrap: "wrap" }}
            >
              <img
                src="/assets/app-qr.jpg"
                alt="app-qr"
                width={120}
                height={120}
              />
              <div className="d-flex align-items-center flex-wrap flex-column gap-3">
                <a
                  href="https://play.google.com/store/apps/details?id=com.agrarian"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src="/assets/playstore.png"
                    height={60}
                    alt="Play Store"
                    // className="mx-4"
                  />
                </a>
                <a
                  rel="noreferrer"
                  href="https://www.facebook.com/profile.php?id=100088894643348"
                  target="_blank"
                ></a>
              </div>
            </div>
          </div>
          {!isMobile && (
            <div className="w-50 d-flex justify-content-center align-items-center flex-column">
              <img
                src="/assets/app.jpg"
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

export default AppMarketingModal;

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
