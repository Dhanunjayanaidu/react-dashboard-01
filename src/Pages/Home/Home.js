import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <header className="App-header">
        <h2 className="mt-4 pt-1">Home page React Bootstrap</h2>
        <p className="mb-3">
          Here is the practice react js dashboard from Dhanunjay
        </p>

        <Container className="pb-5 pt-3">
          <Row>
            <Col>
              <Card className="shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src="https://plus.unsplash.com/premium_photo-1661678244954-d1d766c00a57?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="small">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src="https://images.unsplash.com/photo-1544894079-e81a9eb1da8b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="small">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="shadow-sm border-0">
                <Card.Img
                  variant="top"
                  src="https://plus.unsplash.com/premium_photo-1661889099855-b44dc39e88c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text className="small">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </header>
      <Footer />
    </>
  );
}

export default Home;
