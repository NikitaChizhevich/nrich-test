import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageWrapper = styled(Container)`
  padding-top: 15px;
`;


export const PageLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: white;
  display: flex;
  margin: 0px 5px;
  &:hover {
    color: white;
    text-decoration: underline;
  }
`;