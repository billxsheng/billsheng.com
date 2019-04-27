import React, {Component} from 'react';
import CSSModules from 'react-css-modules';
import styles from './GraphQL.css';
import galleryInfo from '../../../../assets/galleryInfo';

class graphQL extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return (
            <div className="container">
                <span className="container">
                    <div className="row">
                        <h1>
                            {galleryInfo.graphql.title}
                        </h1>
                    </div>
                        <p>
                            {galleryInfo.graphql.description}
                        </p>
                </span>
                <div styleName="content">
                </div>
            </div>
        )
    }
} 

export default CSSModules(graphQL, styles);