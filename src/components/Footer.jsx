import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <Row className="r-footer">
          <Col className="col-12 col-md-6 col-lg-3">
            <h3>Contact us</h3>
            <p>Envato Level 13, 2 Elizabeth Victoria 3000 Australia</p>
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
      </Container>
    </div>
  );
};

export default Footer;
