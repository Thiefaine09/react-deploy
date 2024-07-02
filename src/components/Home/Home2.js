import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Code.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LAISSEZ-MOI <span className="purple"> ME PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je suis étudiant en développement informatique et je suis actuellement à la recherche d'une alternance pour un bachelor Consultant Développeur Web et Application Mobile.
              <br />
              <br />J'ai des connaissance dans plusieurs langages informatiques tels que
              <i>
                <b className="purple"> C#, Javascript , HTML5 , CSS , React.js , Next.js . </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt incluent la création de nouvelles &nbsp;
              <i>
                <b className="purple">technologies web et produits </b> ainsi que des domaines liés à la{" "}
                <b className="purple">
                  blockchain.
                </b>
              </i>
              <br />
              <br />
              Dès que possible, j'aime également appliquer ma passion pour le développement informatique avec <b className="purple">Node.js</b> et
              <i>
                <b className="purple">
                  {" "}
                  les bibliothèques et frameworks modernes de Javascript
                </b>
              </i>
              &nbsp; comme
              <i>
                <b className="purple"> React.js et Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à me <span id="contacter"> contacter </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="lien"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="lien"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="lien"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="lien"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
