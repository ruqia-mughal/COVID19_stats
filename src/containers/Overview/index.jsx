
import dateFormat from "dateformat";
import React from "react";
import "./style.css";
import { connect } from "react-redux";

import { Fragment } from "react";
import { Layout } from 'antd';
import steps from "../../assests/steps.gif";


import { Card, Col, Row } from 'antd';

const { Header, Footer, Sider, Content } = Layout;


class Overview extends React.Component {

  render() {


    console.log(" res in overview=>", this.props.data)
    const tableData = this.props.data.Global

    // debugger
    var fields = tableData.Date.split('T');
    var date = dateFormat(fields, "dddd, mmmm dS, yyyy, h:MM:ss TT");

    return (
      <Fragment>
        <Layout>

          <Sider className="sidebar"><img src={steps} className="sideimg" alt="loading..." />  </Sider>
          <Layout>
            <Header className="date">{date}</Header>

            <Content >

          


              <div className="site-card-wrapper" >
                <Row gutter={16} className="normalize">
                  <Col span={12} >
                    <Card className="card one"  title="New Confirmed " bordered={true} >
                      <h1>{tableData.NewConfirmed}</h1>

                    </Card>
                  </Col>
                  <Col span={12} >
                    <Card className="card two" title=" Total Confirmed " bordered={false}>

                      <h1>{tableData.TotalConfirmed}</h1>
                    </Card>
                  </Col>
                
                  
                </Row>
                <Row gutter={16} className="normalize">
                  <Col span={12} >
                    <Card className="card three" title="Total Deaths" bordered={false}>

                      <h1>{tableData.TotalDeaths}</h1>
                    </Card>
                  </Col>
                  <Col span={12} >
                    <Card className="card four" title="New Deaths" bordered={false}>
                      <h1>{tableData.NewDeaths}</h1>
                    </Card>
                  </Col>
                    </Row>
                <Row gutter={16} className="normalize">
                  
                  <Col span={12} >
                    <Card className="card five" title="New Recovered" bordered={false}>
                      <h1>{tableData.NewRecovered}</h1>
                    </Card>
                  </Col>
                  <Col span={12} >
                    <Card className="card six" title="Total Recovered" bordered={false}>
                      <h1>{tableData.TotalRecovered}</h1>
                    </Card>
                  </Col>


                </Row>
              </div>
            </Content>

          </Layout>
        </Layout>





      </Fragment>

    );
  }
}


const mapStateToProps = (state) => ({
  data: state.Global,



});

export default connect(mapStateToProps, null)(Overview);
