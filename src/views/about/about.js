import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./about.css";
import Image from 'react-bootstrap/Image';
import Tile from '../../components/tile/tile';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowDownCircleFill, ArrowLeftSquareFill } from 'react-bootstrap-icons';
import projects from '../../assets/projects'


class About extends Component {
    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div>
                <Container styleName="summary-container">
                    <Row styleName="back-row">
                        <Link styleName="back-arrow" to="/"><ArrowLeftSquareFill /></Link>
                    </Row>
                    <Row styleName="row">
                        <Col md={8} styleName="col-text">
                            <Row>
                                <div styleName="content-wrapper">
                                    <p><b>Hey, I'm Bill!</b> I'm a product-driven, people-focused engineer with extensive expertise designing, developing, and
                                shipping software solutions through critical thinking, active collaboration, and best practices.</p>
                                    <p>I've worked as an engineering intern at five companies, including
                                 <a target="_blank" styleName="text-link-shopify" href="https://shopify.ca">&nbsp;Shopify&nbsp;</a>
                                  and
                                  <a target="_blank" styleName="text-link-nvidia" href="https://fortune.com/fortune500/">&nbsp;NVIDIA</a>
                                  . I'm currently in my 4A term of Management Engineering at the University of Waterloo.
                                  </p>
                                    <p>In my spare time, I like to exercise, watch sports, play video games, and read.</p>
                                </div>
                            </Row>
                        </Col>
                        <Col md={4} styleName="col-image">
                            <Row>
                                <Image fluid styleName="image" src={require(`../../assets/images/home-pic.jpg`)} />
                            </Row>
                        </Col>
                    </Row>
                    <Row styleName="icon-row">
                        <ArrowDownCircleFill />
                    </Row>
                </Container>

                <Container styleName="exp-container">
                    <Row styleName="tile-row-header">
                        <Col styleName="col-text">
                            <h2>Experiences</h2>
                        </Col>
                    </Row>
                    {projects.experiences.map((exp) => {
                        console.log(exp.name)
                        return (
                            <Row styleName="tile-row">
                                <Tile name={exp.name} position={exp.position} duration={exp.duration} image_name={exp.image_name} />
                            </Row>
                        )
                    })}
                </Container>

            </div>

        )
    }
};

export default CSSModules(About, styles, { allowMultiple: true });