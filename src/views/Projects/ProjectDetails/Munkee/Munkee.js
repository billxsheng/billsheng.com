import React from 'react';
import projectsInfo from '../../../../assets/projectsInfo';


const Munkee = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    {projectsInfo.Munkee.name}
                </h1>
            </div>
            <span className="container">
                <p>
                    {projectsInfo.Munkee.description}
                </p>
            </span>
        </span>
    </div>
)

export default Munkee;