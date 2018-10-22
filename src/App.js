import React, { Component } from 'react';
import { Layout } from 'antd';
import styled from 'styled-components';
import TabsPanel from './components/TabsPanel/TabsPanel';
import TabsBody from './containers/TabsBody';

const { Content } = Layout;

class App extends Component {
  render() {
    return (
      <LayoutWrapper>
        <ContentWrapper>
          <Body>
            <TabsPanel />
            <TabsBody />
          </Body>
        </ContentWrapper>
      </LayoutWrapper>
    );
  }
}

const LayoutWrapper = styled(Layout)`
  min-height: 100vh !important;
`;

const ContentWrapper = styled(Content)`
  padding: 50px 100px;
`;

const Body = styled.div`
  background: #fff;
  padding: 24px;
  
`;

export default App;
