import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Icon, Tag } from 'antd';
import styled from 'styled-components';
import numeral from 'numeral';
import moment from 'moment';

export default function Item({ name, url, description, topics, language, stars, license, updated, issues }) {
  return (
    <Wrapper>
      <Col span={14}>
        <h3><a href={url}>{name}</a></h3>
        <p>{description}</p>
        <Tags>
          {
            topics.map(topic => (
              <Tag color="blue">{topic}</Tag>
            ))
          }
        </Tags>
        <Info>
          <span>{license}</span>
          <span>Updated {moment(updated).fromNow()}</span>
          <span>{issues} open issues</span>
        </Info>
      </Col>
      <Col span={5}>
        {language}
      </Col>
      <Col span={5}>
        <Icon type="star" theme="filled" /> {numeral(stars).format('0a')}
      </Col>
    </Wrapper>
  )
}

Item.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  description: PropTypes.string,
  topics: PropTypes.array,
  language: PropTypes.string,
  stars: PropTypes.string
};

Item.defaultProps = {
  filters: {},
  results: {},
  topics: []
};

const Wrapper = styled(Row)`
  position: relative;
  padding-top: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
  
  &:last-of-type {
    border-bottom: none;
  }
`;

const Tags = styled.div`
  margin-bottom: 16px;
`;

const Info = styled.div`
  & > * {
    margin-right: 12px;
  }
`;