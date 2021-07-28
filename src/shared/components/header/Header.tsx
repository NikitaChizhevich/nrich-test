import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { PageLink } from '../StyledComponents';
import { deleteAuthData } from '../../../utils/functions';
import Logo from '../../../logo.svg';

export const Header = () => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          NRich Test
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <PageLink to="/">Home</PageLink>
            <PageLink to="/profile">Profile</PageLink>
            <PageLink to="/news">News</PageLink>
          </Nav>
          <Nav>
            <PageLink to="/login" onClick={deleteAuthData}>Logout</PageLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>)
};