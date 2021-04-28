import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./home.css";
import { EnvelopeFill, FileEarmarkFill, Github, Linkedin } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';


class Home extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <Container styleName="container">
                <Row styleName="row">
                    <Col styleName="col">
                        <div styleName="content-wrapper">
                            <Row styleName="name">
                                <h1>Bill Sheng</h1>
                            </Row>
                            <Row>
                                <p>Hi! I'm a Management Engineering student at the University of Waterloo currently in my 4A term. 🔬</p>
                            </Row>
                            <Row>
                                <p>This past winter, I interned at
                                    <a target="_blank" styleName="text-link-shopify" href="https://shopify.ca">&nbsp;Shopify&nbsp;</a>
                                     as a backend engineer on the 
                                    <a target="_blank" styleName="text-link-gc" href="https://apps.shopify.com/google?surface_detail=places-to-sell-online-marketplaces&surface_inter_position=1&surface_intra_position=1&surface_type=category">&nbsp;Google Sales Channel&nbsp;</a>
                                      team. 🚀
                                </p>
                            </Row>
                            <Row>
                                <Link to="/about"><Button styleName="text-link-learn-more">Learn More!</Button></Link>
                            </Row>
                            <Row styleName="future-text">
                                <p>Currently seeking <b>Fall 2021 internships and 2022 New Grad opportunities.</b> 👨‍💻</p>
                            </Row>
                            <Row styleName="links-row">
                                <a target="_blank" href=""><FileEarmarkFill /></a>
                                <a href="mailto:bxsheng@uwaterloo.ca"><EnvelopeFill /></a>
                                <a target="_blank" href="https://linkedin.com/in/billxsheng"><Linkedin /></a>
                                <a target="_blank" href="https://github.com/billxsheng"><Github /></a>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
};

export default CSSModules(Home, styles, { allowMultiple: true });