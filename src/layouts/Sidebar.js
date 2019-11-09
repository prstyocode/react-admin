import React, { useContext, useEffect } from "react";
import { Accordion, Card, Col, Row } from "react-bootstrap";
import Context from "../context/root";

const Sidebar = props => {
  const context = useContext(Context);
  useEffect(() => {
    console.log(context);
  }, []);
  return (
    <aside
      className={
        context.isToggledSidebar ? "sidebar-active" : "sidebar-collapse"
      }
    >
      <header className="main-header aside">
        <div style={sideBarHeaderStyle}>
          {context.isToggledSidebar
            ? context.appName
            : context.appName.charAt(0)}
        </div>
      </header>
      <hr className="sidebar-divider"></hr>
      <Accordion defaultActiveKey="0">
        {context.sideBarMenu.map((menu, i) => (
          <Card style={cardStyle} key={i}>
            {menu.child ? (
              <React.Fragment>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey={i}
                  style={accordionStyle}
                >
                  <Row>
                    <Col md={1}>
                      <i className={"fas " + menu.icon + " mr-2"}></i>
                    </Col>
                    <Col
                      className={context.isToggledSidebar ? "" : "none-display"}
                    >
                      {menu.title}
                    </Col>
                  </Row>
                </Accordion.Toggle>
                {menu.child.map((childMenu, ii) => (
                  <Accordion.Collapse eventKey={i} key={ii}>
                    <Card.Body style={accordionStyle}>
                      <Row>
                        <Col md={1}>
                          <i className={"fas " + childMenu.icon + " mr-2"}></i>
                        </Col>
                        <Col
                          className={
                            context.isToggledSidebar ? "" : "none-display"
                          }
                        >
                          <p>{childMenu.title}</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Accordion.Collapse>
                ))}
              </React.Fragment>
            ) : (
              <Accordion as={Card.Header} style={accordionStyle}>
                <i className={"fas " + menu.icon + " mr-2"}></i>
                {menu.title}
              </Accordion>
            )}
          </Card>
        ))}
      </Accordion>
    </aside>
  );
};
let sideBarHeaderStyle = { padding: ".5rem 1rem" };

let cardStyle = {
  border: "none",
  borderRadius: "0px",
  color: "white",
  backgroundColor: "#4e73df"
};

let accordionStyle = { borderBottom: "0px", textAlign: "left" };

export default Sidebar;
