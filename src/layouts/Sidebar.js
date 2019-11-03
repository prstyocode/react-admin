import React from "react";
import { Accordion, Card } from "react-bootstrap";

export default function Sidebar() {
  return (
    <aside style={sidebarStyle}>
      <header className="main-header aside">
        <div style={sideBarHeaderStyle}>Admin</div>
      </header>
      <hr className="sidebar-divider"></hr>
      <Accordion defaultActiveKey="0">
        <Card style={cardStyle}>
          <Accordion as={Card.Header} style={accordionStyle}>
            <i className="fas fa-tachometer-alt mr-2"></i>Dashboard
          </Accordion>
        </Card>
        <Card style={cardStyle}>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="1"
            style={accordionStyle}
          >
            <i className="fas fa-book mr-2"></i>Post
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body style={accordionStyle}>
              <i className="fas fa-stream mr-2"></i>Lists
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey="1">
            <Card.Body style={accordionStyle}>
              <i className="fas fa-pencil-alt mr-2"></i>Create
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </aside>
  );
}
let sideBarHeaderStyle = { padding: ".5rem 1rem" };

let sidebarStyle = {
  backgroundColor: "#4e73df",
  backgroundImage: "linear-gradient(180deg,#4e73df 10%,#224abe 100%)",
  backgroundSize: "cover",
  width: "230px",
  height: "auto"
};

let cardStyle = {
  border: "none",
  borderRadius: "0px",
  color: "white",
  backgroundColor: "#4e73df"
};

let accordionStyle = { borderBottom: "0px", textAlign: "left" };
