/**
 * Created by yi.dai on 2018/2/26.
 */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //
        };
    }

    render() {
        return(
            <div>
                <span>
                    <Link to='/'>back</Link>
                </span>
                {'login page0'}
            </div>
        );
    }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(Login);
