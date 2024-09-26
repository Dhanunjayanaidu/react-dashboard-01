import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function About() {
  return (
    <>
      <Header />
      <Container className="pb-5 pt-3">
        <Row>
          <Col>
            <h2 className="mt-4 pt-1">About page React Bootstrap</h2>
            <p className="mb-3">
              Here is the practice react js dashboard from Dhanunjay
            </p>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default About;
