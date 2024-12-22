import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiJira,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  const toolStack = [
    { icon: <SiMacos />, name: "macOS" },
    { icon: <SiVisualstudiocode />, name: "Visual Studio Code" },
    { icon: <SiPostman />, name: "Postman" },
    { icon: <SiJira />, name: "Jira" },
    { icon: <SiVercel />, name: "Vercel" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {toolStack.map((tool, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} title={tool.name}>
          {tool.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
