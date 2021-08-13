
import React from 'react';
import './App.css'
import 'antd/dist/antd.css';
import Overview from "./containers/Overview"
import Tablepage from "./containers/tablePage"
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { BugTwoTone, PieChartOutlined, BarChartOutlined } from '@ant-design/icons';
import { fetchDetails } from "./store/action";
import { connect } from "react-redux";
import { Spin, Alert } from 'antd';
import CovidCharts from "./containers/covidCharts";
import CurrentTym from "./containers/time/timer"
import { Row, Col } from 'antd';
import MyAnimatedTypo from "./containers/ticker/ticker"
import MovingFunction from './containers/ticker/ticker2'
import covidicon from "./assests/covid.gif";
import vacimnation from "./assests/vacination.gif";
import gify from "./assests/giphy.gif";
const {  Content, Footer, Sider } = Layout;

class App extends React.Component {
    state = {
        collapsed: false,
        loading: true,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    async componentDidMount() {
        await this.props.fetchDetails();
        this.setState({ loading: false })
    }


    render() {

        const { collapsed } = this.state;



        return (
            <Layout style={{ minHeight: "99vh",backgroundColor:"white" }} >
                <Router>
                    <Sider collapsible style={{ backgroundColor: "white" ,height:"100%"}}
                        collapsed={collapsed} onCollapse={this.onCollapse}>
                        <div className="logo">
                             Stats
                        </div>

                        <Menu theme="light" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                <Link to="/">Overview</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<BugTwoTone />}>
                                <Link to="/Details">Worldwide Details </Link>

                            </Menu.Item>
                            <Menu.Item key="3" icon={<BarChartOutlined />}>
                                <Link to="/CovidCharts">Charts </Link>

                            </Menu.Item>



                        </Menu>
                    </Sider>

                    <Layout className="site-layout">
                        <Row className="iconHeader">

                            <Col span={6} >
                               
                                      <img style={{ height: "60px", borderRadius: "30%" }} src={gify} alt="" />

                                    <img style={{ height: "60px", borderRadius: "50%" }} src={covidicon} alt="" />
                                    <MovingFunction />
                           
                            </Col>
                            <Col span={14}>
                                <MyAnimatedTypo />
                            </Col>
                            <Col span={4}  style={{  display: "flex", justifyContent: "flex-end" }}> 
                            <CurrentTym /></Col>
                        </Row>


                        <Content >


                            <div className="loadingdiv">

                                {this.state.loading ?
                                    <Spin tip="Loading..." size="large">
                                        <Alert className="alertbox"
                                            message=" Please Wait"
                                            description="Worldwide Corona Information is loading... "
                                            type="info"
                                        />
                                    </Spin>
                                    :
                                    <div >
                                        <Route exact path="/"><Overview /></Route>
                                        <Route exact path="/Details"><Tablepage /></Route>
                                        <Route exact path="/CovidCharts"><CovidCharts /></Route>
                                    </div>
                                }
                            </div>
                        </Content>
                        <Footer >

                            <p> Copyright &copy; {(new Date().getFullYear())} All Rights Reserved | Ruqiyah</p>
                        </Footer>
                    </Layout>
                </Router>
            </Layout>
        );

    }
}


export default connect(null, { fetchDetails })(App);


