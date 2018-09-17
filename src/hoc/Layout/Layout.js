import React, {Component} from 'react';
import { withRouter } from "react-router";

import Aux from '../HO-Aux/HO-aux';
import Spinner from '../../components/Spinner/Spinner';

class Layout extends Component {

    state = {
        isLoading: false
    };

    componentDidUpdate = (prevProps) => {
        if(this.props.location !== prevProps.location) {
            this.setState({isLoading: true});

            setTimeout(() => {
                this.setState({isLoading: false});
            }, 300);
        }
    }

    render() {
        return (
        <Aux>
            {this.state.isLoading
                 ?
            <Spinner/>   
                : 
            <main>
                {this.props.children}
            </main> }
        </Aux>
        )
    }
}

export default withRouter(Layout);
