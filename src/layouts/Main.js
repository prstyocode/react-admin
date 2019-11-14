import React from "react";
import { Container, Row } from "react-bootstrap";
import Header from "./Header";
import DashboardCard from "./dashboard/Card";
import DataTable from "./dashboard/DataTable";
import BasicForm from "./form/BasicForm";

export default function Main() {
  return (
    <Container className="full-width">
      <Row className="shadow mb-5">
        <Header />
      </Row>
      <DashboardCard />
      <hr></hr>
      <DataTable />
      <hr></hr>
      <BasicForm />
    </Container>
  );
}
