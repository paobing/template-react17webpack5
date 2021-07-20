import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';

import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

import { permissionsPage, noPermissionsPage,pageIndex ,hidePermissionsPage} from './router.config';

class Menutree extends Component {
    constructor(props){
        super(props);
        this.state = {
            collapsed: false
        }
    }

    getRouteList = (data) => {
        let results;

        results = data.map(function (o, i) {
            const path = o.paramName ? (o.path + '/:' + o.paramName + '?') : o.path;
            return <Route key={o.id || i} exact={o.exact} path={path} component={o.component}/>
        })

        return results;
    };

    render() {
        // 获取路由列表
        const noPermissionsRouterList = this.getRouteList(noPermissionsPage);

        return (
            <Router>
                <Layout style={{minHeight: "100vh"}}>
                    <Sider collapsible collapsed={this.state.collapsed}>
                        <Menu mode="inline">
                            <Menu.Item key="1">
                                <NavLink to="/app"> APP </NavLink>
                            </Menu.Item>
                            <SubMenu key="sub1" title="User">
                                <Menu.Item key="2">
                                    <NavLink to="/comp1"> Comp1 </NavLink>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <NavLink to="/comp2"> Comp2 </NavLink>
                                </Menu.Item>
                                <Menu.Item key="4">
                                    <NavLink to="/comp3"> Comp3 </NavLink>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content style={{margin: "16px"}}>
                        <Switch>
                            { noPermissionsRouterList }
                        </Switch>
                    </Content>
                </Layout>
            </Router>
        )
    }
}

export default Menutree;
