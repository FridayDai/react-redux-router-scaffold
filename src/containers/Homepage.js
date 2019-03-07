import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import SideBar from 'components/Homepage/Sidebar';
import loadable from '@loadable/component';
import '../style/global.css';

const Login = loadable(() => import('./Login'), {
    'fallback': ''
});
const Login1 = loadable(() => import('./Login1'), {
    'fallback': ''
});
const NoMatch = loadable(() => import('./NoMatch'), {
    'fallback': ''
});

const {
    Header, Sider, Content
} = Layout;

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'collapsed': false
        };
    }

    toggle() {
        const { collapsed } = this.state;
        this.setState({ 'collapsed': !collapsed });
    }

    render() {
        return (
            <Layout theme='light' style={{ 'height': '100%' }}>
                <Sider
                    style={{ 'background': '#fff' }}
                    trigger={null}
                    collapsible={true}
                    collapsed={this.state.collapsed}
                >
                    <SideBar />
                </Sider>
                <Layout>
                    <Header style={{ 'background': '#fff', 'padding': 0 }} />
                    <Content
                        style={{
                         'margin': '24px 16px', 'padding': 24, 'background': '#fff', 'minHeight': 280
                        }}
                    >
                        <Switch>
                            <Route path='/' exact={true} component={Login} />
                            <Route path='/login' exact={true} component={Login} />
                            <Route path='/login1' exact={true} component={Login1} />
                            <Route path='/dashboard/monitor' component={Login1} />
                            <Route component={NoMatch} />
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

const mapStateToProps = state => state;
export default withRouter(connect(mapStateToProps)(Homepage));
