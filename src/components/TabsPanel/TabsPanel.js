import React  from 'react';
import styled from 'styled-components';
import TabsControl from '../../containers/TabsControl';
import TabsList from '../../containers/TabsList';

export default function () {
  return (
    <Wrapper>
      <TabsControl />
      <TabsList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  margin-bottom: 32px;
  
  & > div:first-child {
    margin-right: 32px;
  }
`;