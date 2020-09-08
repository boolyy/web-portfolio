import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProjectCardDisplay from "./Components/ProjectCardDisplay";
import { Container, Row } from "react-bootstrap";

export default function App() {
  return (
    <Container>
      <Row>
        <ProjectCardDisplay />
      </Row>
    </Container>
  );
}
