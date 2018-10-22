import React  from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import styled from 'styled-components';

export default function Buttons({ handleNewRepoTab, handleNewUserTab }) {
  return (
    <Wrapper>
      <Button type="primary" size="large" onClick={handleNewUserTab}>П</Button>
      <Button type="primary" size="large" onClick={handleNewRepoTab}>Р</Button>
    </Wrapper>
  );
}

Buttons.propTypes = {
  handleNewTab: PropTypes.func
};

const Wrapper = styled.div`
  & > button:not(:last-child) {
    margin-right: 5px;
  }
`;