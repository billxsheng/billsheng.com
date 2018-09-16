import React from 'react';
import projectsInfo from '../../../../assets/projectsInfo';


const VCuts = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    {projectsInfo.vCuts.name}
                </h1>
            </div>
            <span className="container">
                <p>
                    {projectsInfo.vCuts.description}
                </p>
            </span>
        </span>
    </div>
)

export default VCuts;