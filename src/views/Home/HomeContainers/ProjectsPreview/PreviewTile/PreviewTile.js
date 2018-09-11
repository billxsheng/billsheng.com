import React from 'react';
import CSSModules from 'react-css-modules';
import {NavLink} from 'react-router-dom';
import styles from './PreviewTile.css';

const PreviewTile = (props) => {
        return (
            <NavLink to="/projects" className='btn' styleName="project-preview-tile" >
                <div styleName="tile-div" className="row"> 
                    <div className="col-md-6" >
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                    </div>
                    <div className="col-md-6">
                    <p styleName="project-preview-tag">{props.tag}</p>
                    </div>
                </div>
            </NavLink>
        )
}
    


export default CSSModules(PreviewTile, styles, {allowMultiple: true});