import React, { Component } from 'react';
import ProjectsInfo from '../../../../assets/projectsInfo';

class DataScience extends Component {

    componentDidMount() {
        window.scrollTo(0,0);
    }
    
    render() {
        return(
            <div className="container">
                <span styleName="curve" className="container">
                    <div className="row">
                        <h1>
                            {ProjectsInfo.headings.ds.title}
                        </h1>
                    </div>
                        <p>
                            {ProjectsInfo.headings.ds.description}
                        </p>
                </span>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>

            </div>
        )
    }
};



export default DataScience;