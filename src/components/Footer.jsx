import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="r-footer mb-5 pb-5">
          <Col className="col-12 col-md-6 col-lg-3">
            <h3>Contact us</h3>
            <p>Envato <br /> Level 13, 2 Elizabeth <br /> Victoria 3000 <br /> Australia</p>
          </Col>
          <Col className="col-12 col-md-6 col-lg-3">
            <h3>Shortcut links</h3>
            <a href="#">Who We Are</a>
            <a href="#">About us</a>
            <a href="#">Our Services</a>
            <a href="#">Blog</a>
          </Col>
          <Col className="col-12 col-md-6 col-lg-3">
            <h3>Help</h3>
            <a href="#">Lorem, ipsum.</a>
            <a href="#">Lorem, ipsum.</a>
            <a href="#">Lorem, ipsum.</a>
            <a href="#">Lorem, ipsum.</a>
            <a href="#">Lorem, ipsum.</a>
          </Col>
          <Col className="col-12 col-md-6 col-lg-3">
            <h3>Customer care</h3>
            <a href="#">Orders</a>
            <a href="#">Downloads</a>
            <a href="#">Addresses</a>
            <a href="#">Account Details</a>
            <a href="#">lost Password</a>
          </Col>
        </Row>
        <div>
          <p>© 2025 Mahipal Kachhad</p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
