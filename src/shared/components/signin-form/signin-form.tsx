import React, { ChangeEvent, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { setAuthData } from '../../../utils/functions';
import { SigInFromWrapper } from './styles';

export const SignInForm = () => {
  const [formData, setFormData] = useState({ userName: '', password: '' });
  const history = useHistory();
  const setUserName = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, userName: e.target.value });
  }
  const setPassword = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, password: e.target.value });
  }

  const saveUserData = () => {
    setAuthData(formData);
    history.replace('/profile')
  }
  return (
    <SigInFromWrapper>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>User Name</Form.Label>
          <Form.Control type="text" placeholder="Enter User Name" value={formData.userName} onChange={setUserName} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={setPassword} value={formData.password} />
        </Form.Group>
        <Button variant="primary" disabled={!formData.userName || !formData.password} onClick={saveUserData}>
          Signin
        </Button>
      </Form>
    </SigInFromWrapper>
  )
}