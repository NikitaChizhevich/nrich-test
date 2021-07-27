import React from 'react';
import { PageWrapper } from '../../shared/components/styled-components';
import Logo from '../../logo.svg';

export const MainPage = () => {
  return (<PageWrapper>
      <div className="App-header">
        <h1>NRich Test Task</h1>
        <img src={Logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
  </PageWrapper>);
};