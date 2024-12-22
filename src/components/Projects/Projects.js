import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import foodhub360 from "../../Assets/Projects/Foodhub360.png";
import calendly from "../../Assets/Projects/calendly.png";
import FireCsv from "../../Assets/Projects/FIreCsv.png";
import jira from "../../Assets/Projects/Jira.png";
import chairsphere from "../../Assets/Projects/ChairSphere.png";
import kanbanboard from "../../Assets/Projects/Kanban-Board.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jira}
              isBlog={false}
              title="JIRA"
              description="Users of this web-based task management application can add, amend, and remove jobs with different priority colours. Task filtering is supported by the user-friendly interface, and data permanence is guaranteed by local browser storage. It was created with HTML, CSS, and JavaScript and has grid structure for a well-organized representation of tasks."
              ghLink="https://github.com/SushantKumar1999/Jira-App"
              demoLink="https://jira-app-one.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kanbanboard}
              isBlog={false}
              title="Kanban Board"
              description="The Kanban Board Clone, powered by React, JavaScript, HTML, and CSS, streamlines project management with drag-and-drop features. Responsive and collaborative, it enables users to organize tasks seamlessly across customizable columns. Prioritizing simplicity, it's an ideal tool for efficient project organization."
              ghLink="https://github.com/SushantKumar1999/Kanban_clone"
              demoLink="https://kanban-clone-delta.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={FireCsv}
              isBlog={false}
              title="Fire Table CSV "
              description="This React project with Firebase integration enables user authentication, showcasing a responsive design with a sidebar menu. Users can upload CSV files via a modal, and the data is instantly displayed in a table on the home screen."
              ghLink="https://github.com/SushantKumar1999/FireTableCSV"
              demoLink="https://openinapp-assignment-nu.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foodhub360}
              isBlog={false}
              title="FoodHub360"
              description="FoodHub360: AI-driven food delivery crafting personalized meal plans for busy lifestyles. Prioritizing health, we partner with top restaurants. Say goodbye to poor eating habits with our convenient, tailored solutions."
              ghLink="https://github.com/SushantKumar1999/FoodHub360"
              demoLink="https://food-hub360.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chairsphere}
              isBlog={false}
              title="Chair Sphere"
              description="Explore my Chair Sphere project! This HTML/CSS repository showcases a stylish online chair store. Dive into elegant designs and seamless user experience. Perfect for web development enthusiasts and furniture lovers!"
              ghLink="https://github.com/SushantKumar1999/Chair-Sphere"
              demoLink="https://chair-sphere.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calendly}
              isBlog={false}
              title="Calendly Clone"
              description="Explore my Calendly clone, crafted with React.js & Tailwind CSS! Enjoy seamless scheduling and appointment management with an intuitive interface mirroring the convenience of the original platform."
              ghLink="https://github.com/SushantKumar1999/Calendly-Clone"
              demoLink="https://calendly-clone-orpin.vercel.app/"   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
