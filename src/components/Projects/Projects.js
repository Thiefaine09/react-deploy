import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import gestion from "../../Assets/Projects/gestion.png";
import codecraft from "../../Assets/Projects/3.png";
import bistrok from "../../Assets/Projects/1.png";
import therique from "../../Assets/Projects/2.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes Projets | <strong className="purple">Scolaire | Personnel </strong>
        </h1>
        <p style={{ color: "white" }}>
          Ci-dessous, vous trouverez des projets terminés ou actuellement en cours de développement
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bistrok}
              isBlog={false}
              title="BistroK Restaurant Lounge"
              description="Le BistroK est un restaurant lounge réalisé en React et Next.js, avec une conception utilisant HTML et CSS. Il offre une expérience gastronomique unique, avec des fonctionnalités telles que la réservation en ligne, la consultation du menu et la découverte de l'ambiance côté Lounge."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={therique}
              isBlog={false}
              title="Portfolio Therique"
              description="Therique est un portfolio complet réalisé exclusivement avec Bootstrap, HTML, CSS et JavaScript. Il met en valeur mes compétences, mes projets et mon parcours professionnel de manière attrayante et professionnelle."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codecraft}
              isBlog={false}
              title="CodeCraft Innovations"
              description="Le site vitrine de CodeCraft Innovations est une création soignée et professionnelle qui met en avant une entreprise spécialisée dans le développement informatique. Conçu avec une attention particulière aux détails, ce site a été développé pour refléter les valeurs et les compétences de l'entreprise, tout en offrant une expérience utilisateur intuitive."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gestion}
              isBlog={false}
              title="Gestion Client Coiffure"
              description="Est une application innovante développée en C# qui permet aux coiffeurs de gérer efficacement leurs rendez-vous et leurs clients en temps réel. Cette application offre une gamme complète de fonctionnalités pour améliorer la productivité et l'organisation des salons de coiffure."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
