import React, { Component } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import CSSModules from 'react-css-modules';
import styles from "./tile.css";


class Tile extends Component {
    render() {
        return (
            <Row styleName="tile-wrapper">
                <Col styleName="image-col">
                    <Image fluid src={require(`../../assets/images/experiences/${this.props.image_name}.png`)} />
                </Col>
                <Col styleName="text-col">
                    <h3>{this.props.name}</h3>
                    <p>{this.props.position}</p>
                    <p>{this.props.duration}</p>
                </Col>
            </Row>
        )
    }
};

export default CSSModules(Tile, styles, { allowMultiple: true });