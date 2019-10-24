import React from 'react';
import {Row, Col} from 'antd';
import Header from './components/Header/index';
import Footer from './components/Footer/index';
import NavLeft from './components/NavLeft/index';
import './style/common.less';



function App() {
  return (
    <Row className="container">
      <Col span="5" className="nav-left">
        <NavLeft />
      </Col>
      <Col span="19" className="main">
        <Header />
        <Row>
          {this.props.children}
        </Row>
        <Footer />
      </Col>

    </Row>
  );
}

export default App;
