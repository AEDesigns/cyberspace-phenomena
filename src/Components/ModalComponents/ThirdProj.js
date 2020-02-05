import React from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

const ThirdProjectModal = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button variant="primary" onClick={showModal} className="cta-btn">
        Views of MrFormalAz.com
      </button>
      <Modal show={isOpen} onHide={hideModal} dialogClassName="modal-90vw">
        <Modal.Body>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../Imgs/Snips/Lottz/home-1.png")}
                width="1000"
                height="auto"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../Imgs/Snips/Lottz/home-2.png")}
                width="1000"
                height="auto"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../Imgs/Snips/Lottz/home-3.png")}
                width="1000"
                height="auto"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={require("../../Imgs/Snips/Lottz/home-4.png")}
                width="1000"
                height="auto"
                alt="First slide"
              />
            </Carousel.Item>
          </Carousel>
        </Modal.Body>
        <Modal.Footer>
          <button variant="primary" onClick={hideModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ThirdProjectModal;
