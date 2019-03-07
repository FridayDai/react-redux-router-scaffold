import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ScrollToTop from 'components/ScrollToTop';

import './App.css';

class App extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ScrollToTop>
                <div>{this.props.children}</div>
            </ScrollToTop>
        );
    }
}

const mapStateToProps = state => state;
export default withRouter(connect(mapStateToProps)(App));
