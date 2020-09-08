import React from "react";
import ProjectCard from "./ProjectCard";
import StarWarsImg from "./Images/StarWars.PNG";
import PiImg from "./Images/Pi.PNG";
import { Col } from "react-bootstrap";

export default function ProjectCardDisplay() {
  let StarWars = {
    title: "Star Wars Dashboard",
    img: StarWarsImg,
    description:
      "A Dashboard that displays the information of a character that you search up. All information on the characters is provided by The Star Wars API(SWAPI).",
    projectLink: "https://boolyy.github.io/star-wars-dashboard/",
    codeLink: "https://github.com/boolyy/star-wars-dashboard/tree/master/src",
  };

  let Drip = {
    title: "Drip n' Dash",
    description:
      "An app designed for students to have their laundry completed by other students in their dorm. Students can request a dasher that will complete their laundry and return it to their dorm.",
    codeLink:
      "https://github.com/boolyy/DripNDashMain/tree/master/DripNDashProject/app/src/main/java/edu/rutgers/dripndashproject",
  };

  let Pi = {
    title: "Visualization of Monte Carlo Pi Calculation",
    img: PiImg,
    projectLink: "https://boolyy.github.io/Pi-Calculator-Deploy/",
    codeLink: "https://github.com/boolyy/Pi-Calculator-Deploy/tree/master/src",
  };

  return (
    <>
      <Col>
        <ProjectCard projectCardInfo={StarWars} />
      </Col>
      <Col>
        <ProjectCard projectCardInfo={Pi} />
      </Col>
      <Col>
        <ProjectCard projectCardInfo={Drip} />
      </Col>
    </>
  );
}
