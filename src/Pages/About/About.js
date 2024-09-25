import React from "react";
import { Col, Container, Row } from "react-bootstrap";

function About() {
  return (
    <>
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
    </>
  );
}

export default About;