import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function DashboardCard() {
  const [dashboardCount, setdashboardCount] = useState(3);

  let col_ = [];
  Array.apply(null, Array(dashboardCount)).forEach((v, i) => {
    col_.push(
      <Col key={i}>
        <Card className="text-center">
          <Card.Body onClick={() => setdashboardCount(dashboardCount + 1)}>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>yoy isi</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </Col>
    );
  });
  return <Row>{col_}</Row>;
}
