import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './Button.css';
import {NavLink} from 'react-router-dom';

class Button extends Component {
    state = {
        newPage: this.props.newPage,
        resume: this.props.resume
    }

    render() {
        const linkStyle = {
            'margin': `${this.props.margin}`
        }

        if(this.props.to) {
            return (
                <NavLink style={linkStyle} styleName="btn-link" to={this.props.to}>{this.props.children}</NavLink>
            )
        }else if(this.props.resume) {
            return (
                <a target="_blank" href= {require(`../../assets/documents/resume.pdf`)} style={linkStyle} styleName={this.props.btnType}>{this.props.children}</a>
            )
        } else if(this.props.newPage === "false") {
            return (
                <a href={this.props.link} style={linkStyle} styleName={this.props.btnType}>{this.props.children}</a>
            )
        } else {
            return (
                <a target="_blank" href={this.props.link} style={linkStyle} styleName={this.props.btnType}>{this.props.children}</a>
            )
        }
    }
}


export default CSSModules(Button, styles);