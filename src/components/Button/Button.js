import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './Button.css';


class button extends Component {
    state = {
        newPage: this.props.newPage,
        resume: true
    }

    render() {
        if(this.state.newPage === 'false') {
            return (
                <a href={this.props.link} styleName={this.props.btnType}>{this.props.children}</a>
            )
        }

        if(this.state.resume) {
            return (
                <a target="_blank" href= {require(`../../assets/documents/resume.pdf`)} styleName={this.props.btnType}>{this.props.children}</a>
            )
        }

        return (
            <a target="_blank" href={this.props.link} styleName={this.props.btnType}>{this.props.children}</a>
        )
    }
}


export default CSSModules(button, styles);