import React from 'react';
import projectsInfo from '../../../../assets/projectsInfo';

const Moodify = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    {projectsInfo.Moodify.name}
                </h1>
            </div>
            <span className="container">
                <p>
                    {projectsInfo.Moodify.description}
                </p>
            </span>
        </span>
    </div>
)

export default Moodify;