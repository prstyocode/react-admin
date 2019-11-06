import React, {useContext, useEffect} from "react";
import { Accordion, Card } from "react-bootstrap";
import Context from "../context/root"

const Sidebar = props => {
  const context = useContext(Context)
  useEffect(() => {
    console.log(context)
  }, [])
  return (
    <aside style={sidebarStyle}>
      <header className="main-header aside">
        <div style={sideBarHeaderStyle}>Admin</div>
      </header>
      <hr className="sidebar-divider"></hr>
      <Accordion defaultActiveKey="0">
        {context.sideBarMenu.map((menu, i) => (
          <Card style={cardStyle} key={i}>
            {menu.child ?
              <React.Fragment>
                <Accordion.Toggle
                  as={Card.Header}
                  eventKey={i}
                  style={accordionStyle}
                >
                  <i className={"fas "+menu.icon+" mr-2"}></i>{menu.title}
                </Accordion.Toggle>
                {menu.child.map((childMenu, ii) => (
                  <Accordion.Collapse eventKey={i} key={ii}>
                    <Card.Body style={accordionStyle}>
                      <i className={"fas "+childMenu.icon+" mr-2"}></i>{childMenu.title}
                    </Card.Body>
                  </Accordion.Collapse>
                ))}
              </React.Fragment> : 
              <Accordion as={Card.Header} style={accordionStyle}>
                <i className={"fas "+menu.icon+" mr-2"}></i>{menu.title}
              </Accordion>
            }
          </Card>
        ))}
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

export default Sidebar;