import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiHtml5,
} from "react-icons/di";
import {
  SiTypescript,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
} from "react-icons/si";
import { FaAngular } from "react-icons/fa";

function Techstack() {
  const techStack = [
    { icon: <DiReact />, name: "React" },
    { icon: <FaAngular />, name: "Angular" },
    { icon: <DiJavascript1 />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <DiHtml5 />, name: "HTML5" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <DiJava />, name: "Java" },
    { icon: <DiPython />, name: "Python" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <DiNodejs />, name: "Node.js" },
    { icon: <DiMongodb />, name: "MongoDB" },
    { icon: <DiGit />, name: "Git" },
    { icon: <CgCPlusPlus />, name: "C++" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {techStack.map((tech, index) => (
        <Col xs={4} md={2} className="tech-icons" key={index} title={tech.name}>
          {tech.icon}
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
