import React from 'react';
import projectsInfo from '../../../../assets/projectsInfo';

const prog = (props) => (
    <div>
        <span className="container">
            <div className="row">
                <h1>
                    {projectsInfo.PROG.name}
                </h1>
            </div>
            <span className="container">
                <p>
                    {projectsInfo.PROG.description}
                </p>
            </span>
        </span>
    </div>
)

export default prog;