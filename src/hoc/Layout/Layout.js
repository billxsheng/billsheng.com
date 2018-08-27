import React, {Component} from 'react';

import Aux from '../HO-Aux/HO-aux';

class Layout extends Component {
    render() {
        return (
        <Aux>
            <main>
                {this.props.children}
            </main>
        </Aux>
        )
    }
}

export default Layout;
