import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <Container className="pb-5 pt-3">
        <Row>
          <Col>
            <h2 className="mt-4 pt-1">Dashboard page</h2>
            <p className="mb-3">
              Here is the practice react js dashboard from Dhanunjay
            </p>

            <p>
              <Link to="comments">Comments</Link>
              <Link to="posts">Posts</Link>
            </p>

            <h5>Dashboard Header content</h5>
            <h6>sidebar content for Dashboard</h6>
            <Outlet />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Dashboard;
