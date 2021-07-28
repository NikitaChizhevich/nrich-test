import React from 'react';
import { Redirect } from 'react-router-dom';
import { PageWrapper } from '../../shared/components/StyledComponents';
import { SignInForm } from '../../shared/components/signin-form/SigInForm';
import { getAuthData } from '../../utils/functions';
import { LoginFormContainer } from './styles';

export const LoginPage = () => {
  const authData = getAuthData();
  if(authData.isAuth) {
    return (<Redirect to="/"/>);
  }

  return (
    <PageWrapper>
      <LoginFormContainer>
        <SignInForm />
      </LoginFormContainer>
    </PageWrapper>)
};