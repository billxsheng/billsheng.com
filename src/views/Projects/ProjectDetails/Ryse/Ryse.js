import React from 'react';
import projectsInfo from '../../../../assets/projectsInfo';

const Ryse = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    {projectsInfo.Ryse.name}
                </h1>
            </div>
            <span className="container">
                <p>
                    {projectsInfo.Ryse.description}
                </p>
            </span>
            <span className="container">
                <h3>Technologies Used</h3>
            </span>
        </span>
    </div>
)

export default Ryse;