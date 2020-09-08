import React from "react";
import { Card } from "react-bootstrap";

export default function ProjectCard(props) {
  return (
    <Card>
      <Card.Img className="" variant="top" src={props.projectCardInfo.img} />
      <Card.Body>
        <Card.Title>{props.projectCardInfo.title}</Card.Title>
        <Card.Text>{props.projectCardInfo.description}</Card.Text>
        <Card.Link href={props.projectCardInfo.codeLink} target="_blank">
          Code
        </Card.Link>
        <Card.Link href={props.projectCardInfo.projectLink} target="_blank">
          Project
        </Card.Link>
      </Card.Body>
    </Card>
  );
}
