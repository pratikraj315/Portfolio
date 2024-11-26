import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import invoice from "../../Assets/Projects/invoice.png";
import snappy from "../../Assets/Projects/snappy.png";

import printify from "../../Assets/Projects/printify.png";
import chatapp from "../../Assets/Projects/chatapp.png";


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
              imgPath={chatapp}
              isBlog={false}
              title="Talk-A-Tive"
              description="Talk-A-Tive is a real-time chat application built with ReactJS, NodeJS, ExpressJS, and Socket.io. It features one-on-one messaging, group chats, and typing indicators for enhanced user interaction. Secure authentication and session management are implemented using JWT tokens, ensuring data privacy. MongoDB is used for efficient data storage, and real-time communication is powered by Socket.io, providing a seamless user experience. Designed with Chakra-UI, the app offers a clean and intuitive interface, making it a robust solution for modern communication needs."
              ghLink="https://github.com/pratikraj315/Talk-A-Tive"
              demoLink="https://talk-a-tive-7fgq.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoice}
              isBlog={false}
              title="Invoice Generator"
              description="The Invoice Generator is a web application designed to create, manage, and download professional invoices. Built with ReactJS and styled using Tailwind CSS, it features dynamic data entry forms for easy customization of invoice details. The app uses jsPDF to generate downloadable PDF invoices and incorporates Headless UI for building interactive, accessible components. This tool streamlines the invoicing process, providing users with an efficient and user-friendly experience."
              ghLink="https://github.com/pratikraj315/Invoice_Generator/tree/main/Invoice%20Generator/invoice-generator"
              demoLink="https://react-invoice-generator.web.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={printify}
              isBlog={false}
              title="Printify"
              description="Printify Clone is a responsive homepage inspired by the Printify website, developed using ReactJS and styled with Tailwind CSS. The project showcases a clean, component-based architecture, ensuring maintainability and scalability. It emphasizes a seamless user experience with modern UI elements and responsiveness across devices. The design replicates the original layout, focusing on interactive elements and precise alignment. This project demonstrates proficiency in ReactJS, Tailwind CSS, and web development best practices, highlighting the ability to create visually appealing and functional web pages."
              ghLink="https://github.com/pratikraj315/Printify-Clone-"
              demoLink="https://printify-clone-lst8.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={snappy}
              isBlog={false}
              title="Snappy-The Chat App"
              description="This Chat App is a full-stack real-time messaging platform built with ReactJS, NodeJS, ExpressJS, and Socket.io. It features one-on-one chats, group messaging, and typing indicators, providing an engaging user experience. Secure user authentication is achieved using JWT tokens, while MongoDB ensures efficient and reliable data storage. The app utilizes Socket.io for instant communication and is styled for a modern interface. This project highlights expertise in building scalable, interactive, and secure web applications for real-time communication."
              ghLink="https://github.com/pratikraj315/Snappy--The-Chat-App"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
