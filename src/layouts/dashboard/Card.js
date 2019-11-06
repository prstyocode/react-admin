import React, { useContext, useEffect } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import Context from "../../context/root";

export default function DashboardCard() {
  const context = useContext(Context)
  useEffect(() => {
    console.log(context)
  }, [])

  return (
    <Row>
      {context.posts.map((post, i) => (
        <Col key={i}>
        <Card className="text-center">
          <Card.Body onClick={() => context.addPostToBookmark({ id: "5", title: "the adding", description: "The content added" })}>
            <Card.Title>{ post.title }</Card.Title>
            <Card.Text>{ post.description }</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </Col>
      ))}
    </Row>
  );
}
