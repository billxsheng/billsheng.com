import React, {Component} from 'react';

import CSSModules from 'react-css-modules';
import styles from './ProjectsPreview.css';
import PreviewTile from './PreviewTile/PreviewTile';
import Link from '../../../../components/Button/Link/Link';

class projectsPreview extends Component {
    

    render() {
        return (
            <div styleName= 'projectsPreview'>
            <span className="container">
                    <h2>Projects</h2>
            </span>
            <span className="container">
                    <p>I'm always up for a challenge <span aria-label="emoji" role="img">💡</span></p>            
            </span> 
            <div styleName="tile-wrapper" className="row">
                <PreviewTile title="Skout" desc="LinkedIn for Athletes" tag="Project" />
                <PreviewTile title="Canadian Tire" desc="Canada's largest retail organization" tag="Internship" />
                <PreviewTile title="Blitz" desc="Sports Notification Innovation" tag="Project" />
            </div>
            <div className="container">
                <div styleName="proj-prev-el" className="row">
                    <Link link="/projects">View All Projects</Link>
                </div>
            </div>
            </div>
        )
    }
} 
   
export default CSSModules(projectsPreview, styles);