import React from 'react';
import projectsInfo from '../../../../assets/projectsInfo';


const canadianTire = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    {projectsInfo.CTC.name}
                </h1>
            </div>
            <span className="container">
                <p>
                    {projectsInfo.CTC.description}
                </p>
            </span>
        </span>
    </div>
)

export default canadianTire;