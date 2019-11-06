import React, { useContext, useEffect } from "react";
import { Nav, Form, FormControl, Button } from "react-bootstrap";
import Context from "../context/root";

const Navbar = () => {
  const context = useContext(Context);
  useEffect(() => {
    // console.log(context);
  }, []);
  return (
    <Nav
      activeKey="/home"
      onSelect={selectedKey => alert(`selected ${selectedKey}`)}
    >
      <button
        className="toggle-button ml-3"
        onClick={() => context.toggleSidebar()}
      >
        <i className="fas fa-bars fa-lg" style={barStyle}></i>
      </button>
      <Nav.Item className="ml-auto">
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

let barStyle = {
  top: "24px",
  position: "absolute"
};

export default Navbar;
