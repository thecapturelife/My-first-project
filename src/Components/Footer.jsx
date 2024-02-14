import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsWhatsapp } from "react-icons/bs";
import { CiTwitter } from "react-icons/ci";
import { SiGmail } from "react-icons/si";
import { IoLogoWindows } from "react-icons/io5";
import {
  FaFacebookF ,
  FaTelegram ,
  FaInstagram ,
  FaAppStoreIos,
  FaGooglePlay} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer p-5" style={{ background: "rgb(223, 219, 219)" }}>
        <Container fluid>
          <Row>
            <Col lg={4} md={12} className="mb-3">
              <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <h3>Blep</h3>
                <hr />
                <div>
                  <p><b>Contact Us </b></p> 
                  <p><b>Track Order </b></p>
                  <p><b>Privacy Policy</b></p>
                  <p><b>Refund Policy</b></p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={12} className="mb-3">
              <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <h3>Quick</h3>
                <hr />
                <div>
                  <p><b>FAQs</b></p>
                  <p><b>Blogs </b></p>
                  <p><b>Shop</b></p>
                  <p><b>Terms of Service</b></p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={12}>
              <div style={{ marginBottom: '1rem', textAlign: 'center' }}>
                <h3>Contact us</h3>
                <hr />
                <div>
                  <p><b>Call : </b>+919744653296</p>
                  <p><b>Email : </b>albinjohn1996th@gmail.com</p>
                  <p><b>Address : </b>kannur</p>
                    <BsWhatsapp /> <CiTwitter /> <SiGmail /> <FaFacebookF /> <FaInstagram />  <FaTelegram /><br/>
                    <FaAppStoreIos  style={{height:'50px', width :'50px'}}/> <IoLogoWindows style={{height:'50px' ,width:'50px'}} /><FaGooglePlay style={{height:'50px' ,width:'50px'}} />
                    
                </div>
              </div>
            </Col>  
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
