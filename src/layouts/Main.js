import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import DashboardCard from "./dashboard/Card";

export default function Main() {
  return (
    <Container>
      <Row className="shadow mb-5">
        <Header />
      </Row>
      <DashboardCard />
    </Container>
  );
}
