import React from 'react';
import projectsInfo from '../../../../assets/projectsInfo';


const pweb = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    {projectsInfo.personalWebsite.name}
                </h1>
            </div>
            <span className="container">
                <p>
                    {projectsInfo.personalWebsite.description}
                </p>
            </span>
            <span className="container">
                <h3>Technologies Used</h3>
                <div className="row">
                    
                </div>
            </span>
        </span>
    </div>
)

export default pweb;