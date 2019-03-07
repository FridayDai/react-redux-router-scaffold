import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class NoMatch extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>404</div>
        );
    }
}

export default withRouter(NoMatch);
